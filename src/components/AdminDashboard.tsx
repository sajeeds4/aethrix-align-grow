import { useEnhancedAdminAuth } from '@/hooks/use-enhanced-admin-auth';
import { EnhancedAdminLoginModal } from './EnhancedAdminLoginModal';
import { SessionWarningModal } from './SessionWarningModal';
import ContactSubmissionsDashboard from '@/pages/ContactDashboard';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const AdminDashboard = () => {
  const {
    isAuthenticated,
    showLoginModal,
    showWarning,
    login,
    logout,
    extendSession,
    formatTimeRemaining,
    setShowLoginModal,
    isLocked,
    loginAttempts,
    maxAttempts,
    formatLockoutTime
  } = useEnhancedAdminAuth();

  if (!isAuthenticated) {
    return (
      <EnhancedAdminLoginModal
        open={showLoginModal}
        onOpenChange={setShowLoginModal}
        onLogin={login}
        isLocked={isLocked}
        loginAttempts={loginAttempts}
        maxAttempts={maxAttempts}
        formatLockoutTime={formatLockoutTime}
      />
    );
  }

  return (
    <>
      <Dialog open={isAuthenticated} onOpenChange={logout}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] overflow-auto">
          <ContactSubmissionsDashboard onLogout={logout} />
        </DialogContent>
      </Dialog>
      
      <SessionWarningModal
        open={showWarning}
        onExtendSession={extendSession}
        onLogout={logout}
        formatTimeRemaining={formatTimeRemaining}
      />
    </>
  );
};

export default AdminDashboard;
