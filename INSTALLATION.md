# Installation Guide

## Required Dependencies

Install the following packages to use the complete architecture:

```bash
# Navigation
npm install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs
npm install react-native-screens react-native-safe-area-context

# State Management (Context API - built into React)
# Only need AsyncStorage for persistence
npm install @react-native-async-storage/async-storage

# API Client
npm install axios
```

## iOS Setup

After installing dependencies, run:

```bash
cd ios && pod install && cd ..
```

## Android Setup

No additional setup required for Android.

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Install navigation dependencies:
```bash
npm install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs react-native-screens
```

3. Install state persistence:
```bash
npm install @react-native-async-storage/async-storage
```

4. Install API client:
```bash
npm install axios
```

5. For iOS, install pods:
```bash
cd ios && pod install && cd ..
```

6. Run the app:
```bash
npm run ios
# or
npm run android
```

## Troubleshooting

### Metro bundler cache issues
```bash
npm start -- --reset-cache
```

### iOS pod issues
```bash
cd ios
rm -rf Pods Podfile.lock
pod install
cd ..
```

### Android build issues
```bash
cd android
./gradlew clean
cd ..
```

