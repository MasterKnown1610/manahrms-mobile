/**
 * Custom Hook for Authentication
 * Provides authentication methods and state using Context API
 */

import { useAuthContext } from '../../context/AuthContext';

export const useAuth = () => {
  return useAuthContext();
};
