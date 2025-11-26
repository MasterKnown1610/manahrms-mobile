/**
 * Sign Up Screen
 * Registration form with social login options
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WaveBackground from '../../shared/components/WaveBackground';
import Input from '../../shared/components/Input';
import Button from '../../shared/components/Button';
import Checkbox from '../../shared/components/Checkbox';
import SocialLoginButton, {
  FacebookIcon,
  TwitterIcon,
  GoogleIcon,
  AppleIcon,
} from '../../shared/components/SocialLoginButton';
import { colors, spacing, typography, borderRadius } from '../../constants/theme';
import { validation } from '../../utils/validation';

function SignUpScreen({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(true);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!validation.required(fullName)) {
      newErrors.fullName = 'Full name is required';
    }

    if (!validation.required(email)) {
      newErrors.email = 'Email is required';
    } else if (!validation.email(email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!validation.required(password)) {
      newErrors.password = 'Password is required';
    } else if (!validation.minLength(password, 6)) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!agreeToTerms) {
      newErrors.terms = 'You must agree to the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = async () => {
    if (!validateForm()) return;

    setLoading(true);
    // Simulate sign up delay
    setTimeout(() => {
      setLoading(false);
      navigation.replace('MainTabs');
    }, 1000);
  };

  const handleSocialLogin = (provider) => {
    console.log(`Sign up with ${provider}`);
    // TODO: Implement social login
  };

  return (
    <WaveBackground>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardView}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}>
              <Text style={styles.backText}>{'< Back'}</Text>
            </TouchableOpacity>
          </View>

          {/* Form Card - Positioned at bottom */}
          <View style={styles.cardContainer}>
            <ScrollView
              style={styles.scrollView}
              contentContainerStyle={styles.scrollContent}
              showsVerticalScrollIndicator={false}>
              <View style={styles.card}>
              <Text style={styles.cardTitle}>Get Started</Text>

              <Input
                label="Full Name"
                value={fullName}
                onChangeText={setFullName}
                placeholder="Enter Full Name"
                error={errors.fullName}
                autoCapitalize="words"
              />

              <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                placeholder="Enter Email"
                keyboardType="email-address"
                autoCapitalize="none"
                error={errors.email}
              />

              <Input
                label="Password"
                value={password}
                onChangeText={setPassword}
                placeholder="Enter Password"
                secureTextEntry
                error={errors.password}
              />

              <Checkbox
                label={
                  <Text style={styles.checkboxLabel}>
                    I agree to the processing of{' '}
                    <Text style={styles.checkboxLink}>Personal data</Text>
                  </Text>
                }
                checked={agreeToTerms}
                onPress={() => setAgreeToTerms(!agreeToTerms)}
              />

              {errors.terms && (
                <Text style={styles.errorText}>{errors.terms}</Text>
              )}

              <Button
                title="Sign up"
                onPress={handleSignUp}
                loading={loading}
                style={styles.signUpButton}
                size="large"
              />

              <Text style={styles.socialText}>Sign up with</Text>

              <View style={styles.socialContainer}>
                <SocialLoginButton
                  icon={FacebookIcon}
                  onPress={() => handleSocialLogin('facebook')}
                />
                <SocialLoginButton
                  icon={TwitterIcon}
                  onPress={() => handleSocialLogin('twitter')}
                />
                <SocialLoginButton
                  icon={GoogleIcon}
                  onPress={() => handleSocialLogin('google')}
                />
                <SocialLoginButton
                  icon={AppleIcon}
                  onPress={() => handleSocialLogin('apple')}
                />
              </View>

              <View style={styles.footer}>
                <Text style={styles.footerText}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                  <Text style={styles.footerLink}>Sign in</Text>
                </TouchableOpacity>
              </View>
            </View>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </WaveBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  backButton: {
    alignSelf: 'flex-start',
  },
  backText: {
    ...typography.body,
    color: colors.white,
    fontWeight: '500',
  },
  cardContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    maxHeight: '85%',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    paddingBottom: spacing.xl,
  },
  card: {
    backgroundColor: colors.white,
    borderTopLeftRadius: borderRadius.xl,
    borderTopRightRadius: borderRadius.xl,
    padding: spacing.xl,
    paddingBottom: spacing.xxl,
  },
  cardTitle: {
    ...typography.h2,
    color: colors.primary,
    marginBottom: spacing.xl,
  },
  checkboxLabel: {
    fontSize: 14,
    color: colors.text,
  },
  checkboxLink: {
    color: colors.primary,
    fontWeight: '600',
  },
  errorText: {
    ...typography.caption,
    color: colors.error,
    marginTop: spacing.xs,
  },
  signUpButton: {
    marginTop: spacing.md,
    marginBottom: spacing.lg,
  },
  socialText: {
    ...typography.caption,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing.md,
    marginBottom: spacing.xl,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  footerLink: {
    ...typography.caption,
    color: colors.primary,
    fontWeight: '600',
  },
});

export default SignUpScreen;

