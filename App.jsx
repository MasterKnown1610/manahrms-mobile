/**
 * Main App Component
 * Root component with Context providers
 */

import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppProviders } from './src/context';
import AppNavigator from './src/navigation/AppNavigator';
import { colors } from './src/constants/theme';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <AppProviders>
      <SafeAreaProvider>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={colors.background}
        />
        <AppNavigator />
      </SafeAreaProvider>
    </AppProviders>
  );
}

export default App;
