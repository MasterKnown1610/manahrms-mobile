/**
 * User Service
 * Handles all user-related API calls
 */

import apiClient from './apiClient';

export const userService = {
  getProfile: async () => {
    const response = await apiClient.get('/user/profile');
    return response.data;
  },

  updateProfile: async (userData) => {
    const response = await apiClient.put('/user/profile', userData);
    return response.data;
  },

  changePassword: async (oldPassword, newPassword) => {
    const response = await apiClient.put('/user/change-password', {
      oldPassword,
      newPassword,
    });
    return response.data;
  },

  uploadAvatar: async (imageUri) => {
    const formData = new FormData();
    formData.append('avatar', {
      uri: imageUri,
      type: 'image/jpeg',
      name: 'avatar.jpg',
    });

    const response = await apiClient.post('/user/avatar', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
};

