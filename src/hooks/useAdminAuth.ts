import { useState, useEffect } from 'react';

const ADMIN_PASSWORD = 'Osman@123';
const SESSION_KEY = 'admin_session';
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export const useAdminAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    // Check for existing session
    const session = localStorage.getItem(SESSION_KEY);
    if (session) {
      const sessionData = JSON.parse(session);
      if (Date.now() - sessionData.timestamp < SESSION_DURATION) {
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem(SESSION_KEY);
      }
    }

    // Listen for Ctrl+Shift+AD
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'A') {
        // Wait for 'D' key
        const handleDKey = (e: KeyboardEvent) => {
          if (e.key === 'D') {
            setShowLoginModal(true);
            document.removeEventListener('keydown', handleDKey);
          }
        };
        document.addEventListener('keydown', handleDKey);
        
        // Remove listener after 1 second
        setTimeout(() => {
          document.removeEventListener('keydown', handleDKey);
        }, 1000);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const login = (password: string) => {
    if (password === ADMIN_PASSWORD) {
      const sessionData = {
        timestamp: Date.now(),
        authenticated: true,
      };
      localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
      setIsAuthenticated(true);
      setShowLoginModal(false);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem(SESSION_KEY);
    setIsAuthenticated(false);
  };

  return {
    isAuthenticated,
    showLoginModal,
    setShowLoginModal,
    login,
    logout,
  };
};