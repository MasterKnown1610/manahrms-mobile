/**
 * Context Providers
 * Combines all context providers
 */

import React from 'react';
import { AuthProvider } from './AuthContext';
import { UserProvider } from './UserContext';

export const AppProviders = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>{children}</UserProvider>
    </AuthProvider>
  );
};

