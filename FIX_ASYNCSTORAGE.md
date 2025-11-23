# Fix AsyncStorage Native Module Error

## ✅ Pod Install Complete
iOS pods have been successfully installed. AsyncStorage (RNCAsyncStorage) is now linked.

## Next Steps - Rebuild the App

### For iOS:
1. **Stop the Metro bundler** (if running) - Press `Ctrl+C` in the terminal
2. **Clean build folder** (optional but recommended):
   ```bash
   cd ios
   xcodebuild clean -workspace manaHRMSMobile.xcworkspace -scheme manaHRMSMobile
   cd ..
   ```
3. **Reset Metro cache and rebuild**:
   ```bash
   npm start -- --reset-cache
   ```
   Then in a new terminal:
   ```bash
   npm run ios
   ```

### For Android:
1. **Clean build**:
   ```bash
   cd android
   ./gradlew clean
   cd ..
   ```
2. **Reset Metro cache and rebuild**:
   ```bash
   npm start -- --reset-cache
   ```
   Then in a new terminal:
   ```bash
   npm run android
   ```

## Quick Fix (All Platforms)

Run these commands in order:

```bash
# 1. Stop Metro bundler if running (Ctrl+C)

# 2. Reset cache and start Metro
npm start -- --reset-cache

# 3. In a NEW terminal, rebuild the app
# For iOS:
npm run ios

# OR for Android:
npm run android
```

## What Was Fixed

- ✅ AsyncStorage native module linked via CocoaPods
- ✅ All native dependencies properly configured
- ✅ Codegen completed successfully

The error should be resolved after rebuilding the app!

