/**
 * Reusable Checkbox Component
 */

import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { colors, spacing, borderRadius } from '../../constants/theme';

function Checkbox({ label, checked, onPress, style, textStyle }) {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.7}>
      <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
        {checked && <View style={styles.checkmark} />}
      </View>
      {label && (
        typeof label === 'string' ? (
          <Text style={[styles.label, textStyle]}>{label}</Text>
        ) : (
          <View style={styles.labelContainer}>{label}</View>
        )
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.sm,
    flexShrink: 1,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: colors.gray[300],
    borderRadius: borderRadius.sm,
    marginRight: spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  checkmark: {
    width: 6,
    height: 10,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: colors.white,
    transform: [{ rotate: '45deg' }],
    marginTop: -2,
  },
  label: {
    fontSize: 14,
    color: colors.text,
    flexShrink: 1,
  },
  labelContainer: {
    flexShrink: 1,
  },
});

export default Checkbox;

