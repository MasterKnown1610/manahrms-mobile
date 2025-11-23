/**
 * Application Configuration
 * Centralized configuration constants
 */

export const API_BASE_URL = __DEV__
  ? 'https://api-dev.manahrms.com/api/v1'
  : 'https://api.manahrms.com/api/v1';

export const APP_VERSION = '1.0.0';

export const STORAGE_KEYS = {
  AUTH_TOKEN: '@manahrms:auth_token',
  REFRESH_TOKEN: '@manahrms:refresh_token',
  USER_DATA: '@manahrms:user_data',
  THEME: '@manahrms:theme',
};

export const API_TIMEOUT = 30000;

export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
};
