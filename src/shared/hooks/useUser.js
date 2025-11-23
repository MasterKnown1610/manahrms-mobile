/**
 * Custom Hook for User
 * Provides user profile methods and state using Context API
 */

import { useUserContext } from '../../context/UserContext';

export const useUser = () => {
  return useUserContext();
};

