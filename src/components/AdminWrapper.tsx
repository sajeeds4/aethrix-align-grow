import { useAdminAuth } from '@/hooks/useAdminAuth';
import { AdminLogin } from './AdminLogin';
import { AdminPanel } from './AdminPanel';

export const AdminWrapper = () => {
  const { isAuthenticated, showLoginModal, setShowLoginModal, login, logout } = useAdminAuth();

  if (isAuthenticated) {
    return <AdminPanel onLogout={logout} />;
  }

  return (
    <AdminLogin
      open={showLoginModal}
      onClose={() => setShowLoginModal(false)}
      onLogin={login}
    />
  );
};