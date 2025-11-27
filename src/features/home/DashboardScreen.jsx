/**
 * Dashboard Screen
 * Employee dashboard with attendance status, quick actions, and weekly chart
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  colors,
  spacing,
  typography,
  borderRadius,
  shadows,
} from '../../constants/theme';

function DashboardScreen({ navigation }) {
  const userName = 'Alex';
  const currentDate = new Date();
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const today = `${currentDate.getDate()} ${monthNames[currentDate.getMonth()]}`;

  const getGreeting = () => {
    const hour = currentDate.getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  const quickActions = [
    {
      id: 'attendance',
      icon: 'fingerprint',
      label: 'Mark Attendance',
      onPress: () => navigation.navigate('Attendance'),
    },
    {
      id: 'leave',
      icon: 'calendar',
      label: 'Leave',
      onPress: () => navigation.navigate('Leave'),
    },
    {
      id: 'tasks',
      icon: 'format-list-checks',
      label: 'Tasks',
      onPress: () => navigation.navigate('Tasks'),
    },
    {
      id: 'salary',
      icon: 'receipt',
      label: 'Salary Slip',
      onPress: () => console.log('Salary Slip'),
    },
    {
      id: 'holidays',
      icon: 'beach',
      label: 'Holidays',
      onPress: () => console.log('Holidays'),
    },
    {
      id: 'reports',
      icon: 'chart-bar',
      label: 'Reports',
      onPress: () => console.log('Reports'),
    },
  ];

  // Sample weekly attendance data
  const weeklyData = [
    { day: 'Mon', hours: 8 },
    { day: 'Tue', hours: 0 },
    { day: 'Wed', hours: 8 },
    { day: 'Thu', hours: 0 },
    { day: 'Fri', hours: 8 },
  ];
  const maxHours = Math.max(...weeklyData.map(d => d.hours), 1);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.profileImage}>
              <Text style={styles.profileInitial}>
                {userName.charAt(0).toUpperCase()}
              </Text>
            </View>
            <View style={styles.greetingContainer}>
              <Text style={styles.greeting}>{getGreeting()},</Text>
              <Text style={styles.userName}>{userName}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.notificationButton}
            onPress={() => console.log('Notifications')}>
            <Icon name="bell" size={24} color={colors.text} />
          </TouchableOpacity>
        </View>

        {/* Attendance Status Card */}
        <View style={styles.attendanceCard}>
          <View style={styles.attendanceGradient}>
            <View style={[styles.gradientLayer, { backgroundColor: colors.info }]} />
            <View style={[styles.gradientLayer, { backgroundColor: colors.secondary, opacity: 0.7 }]} />
          </View>
          <View style={styles.attendanceContent}>
            <Text style={styles.attendanceLabel}>ATTENDANCE STATUS</Text>
            <Text style={styles.attendanceStatus}>Checked In</Text>
            <Text style={styles.attendanceDate}>Today, {today}</Text>
            <View style={styles.attendanceTimes}>
              <Text style={styles.timeText}>Check in: 09:02 AM</Text>
              <Text style={styles.timeSeparator}> | </Text>
              <Text style={styles.timeText}>Check out: --:--</Text>
            </View>
          </View>
        </View>

        {/* Quick Actions Grid */}
        <View style={styles.quickActionsContainer}>
          {quickActions.map(action => (
            <TouchableOpacity
              key={action.id}
              style={styles.quickActionButton}
              onPress={action.onPress}
              activeOpacity={0.7}>
              <View style={styles.quickActionIcon}>
                <Icon name={action.icon} size={32} color={colors.primary} />
              </View>
              <Text style={styles.quickActionLabel}>{action.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Weekly Attendance Chart */}
        <View style={styles.chartContainer}>
          <View style={styles.chartHeader}>
            <Text style={styles.chartTitle}>Weekly Attendance</Text>
            <Text style={styles.chartSubtitle}>Your hours for this week</Text>
          </View>
          <View style={styles.chartContent}>
            <View style={styles.barsContainer}>
              {weeklyData.map((data, index) => (
                <View key={index} style={styles.barWrapper}>
                  {data.hours > 0 && (
                    <View
                      style={[
                        styles.bar,
                        {
                          height: (data.hours / maxHours) * 80,
                          backgroundColor: colors.primary,
                        },
                      ]}
                    />
                  )}
                </View>
              ))}
            </View>
            <View style={styles.daysContainer}>
              {weeklyData.map((data, index) => (
                <Text
                  key={index}
                  style={[
                    styles.dayLabel,
                    data.hours > 0 && styles.dayLabelActive,
                  ]}>
                  {data.day}
                </Text>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[100],
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: spacing.xl,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.lg,
    backgroundColor: colors.white,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  profileInitial: {
    ...typography.h3,
    color: colors.white,
    fontSize: 20,
  },
  greetingContainer: {
    flex: 1,
  },
  greeting: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    fontSize: 14,
  },
  userName: {
    ...typography.h4,
    color: colors.text,
    fontSize: 18,
    fontWeight: '600',
  },
  notificationButton: {
    padding: spacing.xs,
  },
  attendanceCard: {
    marginHorizontal: spacing.lg,
    marginBottom: spacing.lg,
    borderRadius: borderRadius.xl,
    backgroundColor: colors.white,
    overflow: 'hidden',
    ...shadows.md,
  },
  attendanceGradient: {
    height: 120,
    position: 'relative',
    overflow: 'hidden',
  },
  gradientLayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  attendanceContent: {
    padding: spacing.lg,
    paddingTop: spacing.md,
  },
  attendanceLabel: {
    ...typography.caption,
    color: colors.textSecondary,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1,
    marginBottom: spacing.xs,
  },
  attendanceStatus: {
    ...typography.h2,
    color: colors.text,
    fontSize: 28,
    fontWeight: '700',
    marginBottom: spacing.xs,
  },
  attendanceDate: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },
  attendanceTimes: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    ...typography.bodySmall,
    color: colors.text,
    fontSize: 13,
  },
  timeSeparator: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  quickActionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.lg,
    gap: spacing.md,
  },
  quickActionButton: {
    width: '47%',
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.sm,
  },
  quickActionIcon: {
    marginBottom: spacing.sm,
  },
  quickActionLabel: {
    ...typography.bodySmall,
    color: colors.text,
    textAlign: 'center',
    fontWeight: '500',
  },
  chartContainer: {
    marginHorizontal: spacing.lg,
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    ...shadows.sm,
  },
  chartHeader: {
    marginBottom: spacing.lg,
  },
  chartTitle: {
    ...typography.h4,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  chartSubtitle: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  chartContent: {
    alignItems: 'center',
  },
  barsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 100,
    marginBottom: spacing.md,
    gap: spacing.md,
  },
  barWrapper: {
    flex: 1,
    height: 80,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bar: {
    width: '100%',
    minHeight: 4,
    borderRadius: borderRadius.sm,
  },
  daysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  dayLabel: {
    ...typography.caption,
    color: colors.textSecondary,
    fontSize: 11,
  },
  dayLabelActive: {
    color: colors.primary,
    fontWeight: '600',
  },
});

export default DashboardScreen;

