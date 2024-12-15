import { useAuthStore } from '../stores/useAuthStore';
import { authService, userService } from '../services/api';
import { storageService } from '../services/storage';
import { UserCredentials } from '../models/User';

export function useAuth() {
  const { user, isAuthenticated, isLoading, setUser, setAuthenticated, setLoading, reset } = useAuthStore();

  const login = async (credentials: UserCredentials) => {
    try {
      setLoading(true);
      const { token } = await authService.login(credentials);
      await storageService.setAuthToken(token);
      const userData = await userService.getCurrentUser();
      setUser(userData);
      setAuthenticated(true);
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      await authService.logout();
      await storageService.clearAll();
      reset();
      return true;
    } catch (error) {
      console.error('Logout error:', error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const checkAuth = async () => {
    try {
      setLoading(true);
      const token = await storageService.getAuthToken();
      if (token) {
        const userData = await userService.getCurrentUser();
        setUser(userData);
        setAuthenticated(true);
      }
    } catch (error) {
      console.error('Check auth error:', error);
      await logout();
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
    checkAuth,
  };
}
