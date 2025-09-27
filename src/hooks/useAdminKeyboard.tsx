import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAdminKeyboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check for Ctrl + Shift + A + D sequence
      if (event.ctrlKey && event.shiftKey && event.key === 'A') {
        // Set a flag to listen for 'D' next
        const handleDKey = (nextEvent: KeyboardEvent) => {
          if (nextEvent.key === 'D') {
            event.preventDefault();
            nextEvent.preventDefault();
            navigate('/admin-secret-panel');
            document.removeEventListener('keydown', handleDKey);
          }
        };
        
        // Add temporary listener for 'D' key
        setTimeout(() => {
          document.addEventListener('keydown', handleDKey);
          // Remove listener after 2 seconds if 'D' isn't pressed
          setTimeout(() => {
            document.removeEventListener('keydown', handleDKey);
          }, 2000);
        }, 100);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);
};