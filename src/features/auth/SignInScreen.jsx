/**
 * Sign In Screen
 * Login form with social login options
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
import {
  colors,
  spacing,
  typography,
  borderRadius,
} from '../../constants/theme';
import { validation } from '../../utils/validation';
import { useAuth } from '../../shared/hooks/useAuth';

function SignInScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [errors, setErrors] = useState({});

  const { login, loading } = useAuth();

  const validateForm = () => {
    const newErrors = {};

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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignIn = async () => {
    if (!validateForm()) return;

    const result = await login(email, password);
    if (result.success) {
      navigation.replace('MainTabs');
    }
  };

  const handleSocialLogin = provider => {
    console.log(`Sign in with ${provider}`);
    // TODO: Implement social login
  };

  return (
    <WaveBackground>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardView}
        >
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}
            >
              <Text style={styles.backText}>{'< Back'}</Text>
            </TouchableOpacity>
          </View>

          {/* Form Card - Positioned at bottom */}
          <View style={styles.cardContainer}>
            <ScrollView
              style={styles.scrollView}
              contentContainerStyle={styles.scrollContent}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.card}>
                <Text style={styles.cardTitle}>Welcome back</Text>

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

                <View style={styles.optionsRow}>
                  <View style={styles.checkboxContainer}>
                    <Checkbox
                      label="Remember me"
                      checked={rememberMe}
                      onPress={() => setRememberMe(!rememberMe)}
                    />
                  </View>
                  <TouchableOpacity
                    onPress={() => console.log('Forgot password')}
                    style={styles.forgotPasswordContainer}
                  >
                    <Text style={styles.forgotPassword}>Forgot password?</Text>
                  </TouchableOpacity>
                </View>

                <Button
                  title="Sign in"
                  onPress={handleSignIn}
                  loading={loading}
                  style={styles.signInButton}
                  size="large"
                />

                <Text style={styles.socialText}>Sign in with</Text>

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
                  <Text style={styles.footerText}>Don't have an account? </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('SignUp')}
                  >
                    <Text style={styles.footerLink}>Sign up</Text>
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
    paddingTop: spacing.xl,
    // paddingBottom: spacing.xl,
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
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.lg,
    width: '100%',
  },
  checkboxContainer: {
    flex: 1,
    flexShrink: 1,
  },
  forgotPasswordContainer: {
    marginLeft: spacing.md,
  },
  forgotPassword: {
    ...typography.bodySmall,
    color: colors.primary,
    fontWeight: '500',
  },
  signInButton: {
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

export default SignInScreen;
