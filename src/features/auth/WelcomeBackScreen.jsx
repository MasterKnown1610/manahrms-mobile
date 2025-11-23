/**
 * Welcome Back Screen
 * Onboarding/Welcome screen with Sign in and Sign up options
 */

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WaveBackground from '../../shared/components/WaveBackground';
import {
  colors,
  spacing,
  typography,
  borderRadius,
} from '../../constants/theme';

function WelcomeBackScreen({ navigation }) {
  return (
    <WaveBackground>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Welcome Back!</Text>
          <Text style={styles.subtitle}>
            Enter personal details to you employee account
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => navigation.navigate('SignIn')}
            activeOpacity={0.8}
          >
            <Text style={styles.signInText}>Sign in</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() => navigation.navigate('SignUp')}
            activeOpacity={0.8}
          >
            <Text style={styles.signUpText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </WaveBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xxl,
  },
  title: {
    ...typography.h1,
    fontSize: 36,
    fontWeight: '700',
    color: colors.white,
    marginBottom: spacing.md,
  },
  subtitle: {
    ...typography.body,
    fontSize: 16,
    color: colors.white,
    opacity: 0.9,
    lineHeight: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
    gap: spacing.md,
  },
  signInButton: {
    flex: 1,
    backgroundColor: colors.authBlue,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.lg,
    borderTopLeftRadius: borderRadius.full,
    borderBottomLeftRadius: borderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInText: {
    ...typography.body,
    fontWeight: '600',
    color: colors.white,
  },
  signUpButton: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.lg,
    borderTopRightRadius: borderRadius.full,
    borderBottomRightRadius: borderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpText: {
    ...typography.body,
    fontWeight: '600',
    color: colors.primary,
  },
});

export default WelcomeBackScreen;
