/**
 * Wave Background Component
 * Creates wavy abstract background shapes
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../../constants/theme';

function WaveBackground({ children, style }) {
  return (
    <View style={[styles.container, style]}>
      {/* Gradient overlay effect */}
      <View style={styles.gradientOverlay} />
      {/* Abstract shapes */}
      <View style={styles.wave1} />
      <View style={styles.wave2} />
      <View style={styles.circle1} />
      <View style={styles.circle2} />
      <View style={styles.circle3} />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: colors.authBlue,
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.authBlueLight,
    opacity: 0.3,
  },
  wave1: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    top: -50,
    right: -50,
  },
  wave2: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    top: 100,
    left: -30,
  },
  circle1: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    top: 200,
    right: 50,
  },
  circle2: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    top: 300,
    left: 20,
  },
  circle3: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    top: 150,
    right: 100,
  },
});

export default WaveBackground;

