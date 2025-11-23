/**
 * Auth Context
 * Context API for authentication state management
 */

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authService } from '../services/api/authService';
import { STORAGE_KEYS } from '../constants/config';

const AuthContext = createContext(null);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load persisted auth state on mount
  useEffect(() => {
    loadAuthState();
  }, []);

  const loadAuthState = async () => {
    try {
      const storedToken = await AsyncStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
      const storedRefreshToken = await AsyncStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
      const storedUser = await AsyncStorage.getItem(STORAGE_KEYS.USER_DATA);

      if (storedToken && storedUser) {
        setToken(storedToken);
        setRefreshToken(storedRefreshToken);
        setUser(JSON.parse(storedUser));
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Error loading auth state:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveAuthState = async (authData) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, authData.token);
      if (authData.refreshToken) {
        await AsyncStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, authData.refreshToken);
      }
      await AsyncStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(authData.user));
    } catch (error) {
      console.error('Error saving auth state:', error);
    }
  };

  const clearAuthState = async () => {
    try {
      await AsyncStorage.multiRemove([
        STORAGE_KEYS.AUTH_TOKEN,
        STORAGE_KEYS.REFRESH_TOKEN,
        STORAGE_KEYS.USER_DATA,
      ]);
    } catch (error) {
      console.error('Error clearing auth state:', error);
    }
  };

  const login = useCallback(async (email, password) => {
    try {
      setLoading(true);
      setError(null);
      const response = await authService.login(email, password);
      
      const authData = {
        token: response.token,
        refreshToken: response.refreshToken,
        user: response.user,
      };

      setToken(authData.token);
      setRefreshToken(authData.refreshToken);
      setUser(authData.user);
      setIsAuthenticated(true);
      
      await saveAuthState(authData);
      
      return { success: true };
    } catch (error) {
      const errorMessage = error.message || 'Login failed';
      setError(errorMessage);
      setIsAuthenticated(false);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await authService.logout();
    } catch (error) {
      console.error('Error during logout:', error);
    } finally {
      setToken(null);
      setRefreshToken(null);
      setUser(null);
      setIsAuthenticated(false);
      setError(null);
      await clearAuthState();
    }
  }, []);

  const updateUser = useCallback((userData) => {
    const updatedUser = { ...user, ...userData };
    setUser(updatedUser);
    saveAuthState({ token, refreshToken, user: updatedUser });
  }, [user, token, refreshToken]);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const value = {
    isAuthenticated,
    token,
    refreshToken,
    user,
    loading,
    error,
    login,
    logout,
    updateUser,
    clearError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

