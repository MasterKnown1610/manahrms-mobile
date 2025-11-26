/**
 * Home Screen
 * Main dashboard/home screen
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../constants/theme';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to ManaHRMS</Text>
      <Text style={styles.subtitle}>Hello, User!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.md,
    backgroundColor: colors.background,
  },
  title: {
    ...typography.h1,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
  },
});

export default HomeScreen;

