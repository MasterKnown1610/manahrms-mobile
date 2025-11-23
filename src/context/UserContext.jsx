/**
 * User Context
 * Context API for user profile state management
 */

import React, { createContext, useContext, useState, useCallback } from 'react';
import { userService } from '../services/api/userService';

const UserContext = createContext(null);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProfile = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await userService.getProfile();
      setProfile(response);
      return { success: true, data: response };
    } catch (error) {
      const errorMessage = error.message || 'Failed to fetch profile';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  const updateProfile = useCallback(async (userData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await userService.updateProfile(userData);
      setProfile((prev) => ({ ...prev, ...response }));
      return { success: true, data: response };
    } catch (error) {
      const errorMessage = error.message || 'Failed to update profile';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  const uploadAvatar = useCallback(async (imageUri) => {
    try {
      setLoading(true);
      setError(null);
      const response = await userService.uploadAvatar(imageUri);
      setProfile((prev) => ({ ...prev, ...response }));
      return { success: true, data: response };
    } catch (error) {
      const errorMessage = error.message || 'Failed to upload avatar';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  const changePassword = useCallback(async (oldPassword, newPassword) => {
    try {
      setLoading(true);
      setError(null);
      await userService.changePassword(oldPassword, newPassword);
      return { success: true };
    } catch (error) {
      const errorMessage = error.message || 'Failed to change password';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const value = {
    profile,
    loading,
    error,
    fetchProfile,
    updateProfile,
    uploadAvatar,
    changePassword,
    clearError,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

