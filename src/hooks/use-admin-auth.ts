import { useState, useEffect } from 'react';

export const useAdminAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'Osman@123';
  const SESSION_KEY = 'admin_session';
  const SESSION_DURATION = 30 * 60 * 1000; // 30 minutes

  useEffect(() => {
    // Check if user is already authenticated
    const session = localStorage.getItem(SESSION_KEY);
    if (session) {
      const { timestamp } = JSON.parse(session);
      const now = new Date().getTime();
      
      if (now - timestamp < SESSION_DURATION) {
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem(SESSION_KEY);
      }
    }

    // Listen for keyboard shortcut: Ctrl+Alt+Shift+A
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.altKey && event.shiftKey && event.key === 'A') {
        event.preventDefault();
        if (isAuthenticated) {
          // If already authenticated, logout
          logout();
        } else {
          // Show login modal
          setShowLoginModal(true);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isAuthenticated]);

  const login = (password: string): boolean => {
    if (password === ADMIN_PASSWORD) {
      const session = {
        timestamp: new Date().getTime(),
        authenticated: true
      };
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
      setIsAuthenticated(true);
      setShowLoginModal(false);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem(SESSION_KEY);
    setIsAuthenticated(false);
    setShowLoginModal(false);
  };

  return {
    isAuthenticated,
    showLoginModal,
    setShowLoginModal,
    login,
    logout
  };
};
