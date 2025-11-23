/**
 * Helper Utilities
 * Common utility functions
 */

import { Platform } from 'react-native';

export const helpers = {
  /**
   * Format date to readable string
   */
  formatDate: (date, format = 'DD/MM/YYYY') => {
    if (!date) return '';
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();

    return format
      .replace('DD', day)
      .replace('MM', month)
      .replace('YYYY', year);
  },

  /**
   * Debounce function
   */
  debounce: (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  /**
   * Check if platform is iOS
   */
  isIOS: () => Platform.OS === 'ios',

  /**
   * Check if platform is Android
   */
  isAndroid: () => Platform.OS === 'android',

  /**
   * Capitalize first letter
   */
  capitalize: (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  },

  /**
   * Truncate string
   */
  truncate: (str, length) => {
    if (!str || str.length <= length) return str;
    return str.substring(0, length) + '...';
  },
};

