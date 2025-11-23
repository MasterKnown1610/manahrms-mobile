/**
 * Profile Screen
 * User profile screen
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAuth } from '../../shared/hooks/useAuth';
import { useUser } from '../../shared/hooks/useUser';
import { colors, spacing, typography } from '../../constants/theme';

function ProfileScreen() {
  const { user } = useAuth();
  const { profile } = useUser();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      {user && (
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{user.name || 'N/A'}</Text>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{user.email || 'N/A'}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.md,
    backgroundColor: colors.background,
  },
  title: {
    ...typography.h2,
    color: colors.text,
    marginBottom: spacing.lg,
  },
  infoContainer: {
    gap: spacing.md,
  },
  label: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    fontWeight: '600',
  },
  value: {
    ...typography.body,
    color: colors.text,
    marginBottom: spacing.sm,
  },
});

export default ProfileScreen;

