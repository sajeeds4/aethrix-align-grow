import { useState, useEffect, useCallback } from 'react';

interface AdminSession {
  isAuthenticated: boolean;
  loginTime: number;
  lastActivity: number;
  warningShown: boolean;
  sessionId: string;
}

const SESSION_DURATION = 30 * 60 * 1000; // 30 minutes
const WARNING_TIME = 25 * 60 * 1000; // Show warning at 25 minutes
const ACTIVITY_CHECK_INTERVAL = 60 * 1000; // Check every minute

export const useEnhancedAdminAuth = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [session, setSession] = useState<AdminSession>({
    isAuthenticated: false,
    loginTime: 0,
    lastActivity: 0,
    warningShown: false,
    sessionId: ''
  });
  const [showWarning, setShowWarning] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'Osman@123';
  const MAX_LOGIN_ATTEMPTS = 5;
  const LOCKOUT_DURATION = 15 * 60 * 1000; // 15 minutes

  // Generate session ID
  const generateSessionId = () => {
    return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
  };

  // Load session from localStorage
  useEffect(() => {
    const savedSession = localStorage.getItem('adminSession');
    const lockoutData = localStorage.getItem('adminLockout');
    
    // Check lockout status
    if (lockoutData) {
      const { timestamp, attempts } = JSON.parse(lockoutData);
      if (Date.now() - timestamp < LOCKOUT_DURATION && attempts >= MAX_LOGIN_ATTEMPTS) {
        setIsLocked(true);
        setLoginAttempts(attempts);
      } else {
        localStorage.removeItem('adminLockout');
      }
    }
    
    if (savedSession) {
      try {
        const parsed: AdminSession = JSON.parse(savedSession);
        const now = Date.now();
        const timeElapsed = now - parsed.lastActivity;
        
        if (timeElapsed < SESSION_DURATION) {
          setSession({
            ...parsed,
            lastActivity: now
          });
        } else {
          localStorage.removeItem('adminSession');
        }
      } catch (error) {
        console.error('Error loading session:', error);
        localStorage.removeItem('adminSession');
      }
    }
  }, []);

  // Save session to localStorage
  const saveSession = useCallback((sessionData: AdminSession) => {
    localStorage.setItem('adminSession', JSON.stringify(sessionData));
    setSession(sessionData);
  }, []);

  // Update last activity
  const updateActivity = useCallback(() => {
    if (session.isAuthenticated) {
      const updatedSession = {
        ...session,
        lastActivity: Date.now(),
        warningShown: false
      };
      saveSession(updatedSession);
      setShowWarning(false);
    }
  }, [session, saveSession]);

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.altKey && event.shiftKey && event.key === 'A') {
        event.preventDefault();
        if (!session.isAuthenticated && !isLocked) {
          setShowLoginModal(true);
        } else if (session.isAuthenticated) {
          // Toggle logout if already authenticated
          logout();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [session.isAuthenticated, isLocked]);

  // Activity listeners for extending session
  useEffect(() => {
    const activities = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    
    const handleActivity = () => {
      updateActivity();
    };

    if (session.isAuthenticated) {
      activities.forEach(activity => {
        document.addEventListener(activity, handleActivity, true);
      });
    }

    return () => {
      activities.forEach(activity => {
        document.removeEventListener(activity, handleActivity, true);
      });
    };
  }, [session.isAuthenticated, updateActivity]);

  // Session timer and warning
  useEffect(() => {
    if (!session.isAuthenticated) return;

    const interval = setInterval(() => {
      const now = Date.now();
      const timeSinceActivity = now - session.lastActivity;

      if (timeSinceActivity >= SESSION_DURATION) {
        logout();
      } else if (timeSinceActivity >= WARNING_TIME && !session.warningShown) {
        setShowWarning(true);
        const updatedSession = { ...session, warningShown: true };
        saveSession(updatedSession);
      }
    }, ACTIVITY_CHECK_INTERVAL);

    return () => clearInterval(interval);
  }, [session, saveSession]);

  // Lockout timer
  useEffect(() => {
    if (isLocked) {
      const timer = setTimeout(() => {
        setIsLocked(false);
        setLoginAttempts(0);
        localStorage.removeItem('adminLockout');
      }, LOCKOUT_DURATION);

      return () => clearTimeout(timer);
    }
  }, [isLocked]);

  const login = (password: string): { success: boolean; message: string } => {
    if (isLocked) {
      return { success: false, message: 'Account locked due to too many failed attempts. Please wait.' };
    }

    if (password === ADMIN_PASSWORD) {
      const now = Date.now();
      const newSession: AdminSession = {
        isAuthenticated: true,
        loginTime: now,
        lastActivity: now,
        warningShown: false,
        sessionId: generateSessionId()
      };
      saveSession(newSession);
      setShowLoginModal(false);
      setShowWarning(false);
      setLoginAttempts(0);
      localStorage.removeItem('adminLockout');
      return { success: true, message: 'Login successful' };
    } else {
      const newAttempts = loginAttempts + 1;
      setLoginAttempts(newAttempts);
      
      if (newAttempts >= MAX_LOGIN_ATTEMPTS) {
        setIsLocked(true);
        localStorage.setItem('adminLockout', JSON.stringify({
          timestamp: Date.now(),
          attempts: newAttempts
        }));
        return { success: false, message: 'Too many failed attempts. Account locked for 15 minutes.' };
      }
      
      return { 
        success: false, 
        message: `Invalid password. ${MAX_LOGIN_ATTEMPTS - newAttempts} attempts remaining.` 
      };
    }
  };

  const logout = () => {
    localStorage.removeItem('adminSession');
    setSession({
      isAuthenticated: false,
      loginTime: 0,
      lastActivity: 0,
      warningShown: false,
      sessionId: ''
    });
    setShowLoginModal(false);
    setShowWarning(false);
  };

  const extendSession = () => {
    updateActivity();
    setShowWarning(false);
  };

  const getTimeRemaining = () => {
    if (!session.isAuthenticated) return 0;
    const elapsed = Date.now() - session.lastActivity;
    return Math.max(0, SESSION_DURATION - elapsed);
  };

  const formatTimeRemaining = () => {
    const remaining = getTimeRemaining();
    const minutes = Math.floor(remaining / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const getLockoutTimeRemaining = () => {
    const lockoutData = localStorage.getItem('adminLockout');
    if (!lockoutData) return 0;
    
    const { timestamp } = JSON.parse(lockoutData);
    const elapsed = Date.now() - timestamp;
    return Math.max(0, LOCKOUT_DURATION - elapsed);
  };

  const formatLockoutTime = () => {
    const remaining = getLockoutTimeRemaining();
    const minutes = Math.floor(remaining / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return {
    // Authentication state
    isAuthenticated: session.isAuthenticated,
    sessionId: session.sessionId,
    
    // Modal state
    showLoginModal,
    showWarning,
    setShowLoginModal,
    
    // Security state
    isLocked,
    loginAttempts,
    maxAttempts: MAX_LOGIN_ATTEMPTS,
    
    // Actions
    login,
    logout,
    extendSession,
    
    // Time utilities
    getTimeRemaining,
    formatTimeRemaining,
    getLockoutTimeRemaining,
    formatLockoutTime,
    
    // Session info
    lastActivity: new Date(session.lastActivity).toLocaleTimeString(),
    loginTime: new Date(session.loginTime).toLocaleTimeString()
  };
};
