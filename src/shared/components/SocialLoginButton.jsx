/**
 * Social Login Button Component
 */

import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, shadows } from '../../constants/theme';

function SocialLoginButton({ icon: Icon, onPress, style }) {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.7}>
      <View style={styles.iconContainer}>
        {Icon && <Icon width={24} height={24} />}
      </View>
    </TouchableOpacity>
  );
}

// Placeholder icon components (you can replace with actual icons)
export const FacebookIcon = ({ width, height }) => (
  <View style={[styles.iconPlaceholder, { width, height, backgroundColor: '#1877F2' }]} />
);

export const TwitterIcon = ({ width, height }) => (
  <View style={[styles.iconPlaceholder, { width, height, backgroundColor: '#1DA1F2' }]} />
);

export const GoogleIcon = ({ width, height }) => (
  <View style={[styles.iconPlaceholder, { width, height, backgroundColor: '#4285F4' }]} />
);

export const AppleIcon = ({ width, height }) => (
  <View style={[styles.iconPlaceholder, { width, height, backgroundColor: '#000000' }]} />
);

const styles = StyleSheet.create({
  container: {
    width: 56,
    height: 56,
    borderRadius: borderRadius.md,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.sm,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconPlaceholder: {
    borderRadius: borderRadius.sm,
  },
});

export default SocialLoginButton;

