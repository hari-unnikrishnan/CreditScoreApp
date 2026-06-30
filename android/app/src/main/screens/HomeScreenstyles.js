import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC', // Light blue-ish gray tint background
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100, // Padding for bottom navigation bar space
  },
  /* Header Section */
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000000',
  },
  subGreetingText: {
    fontSize: 15,
    color: '#7F8C8D',
    marginTop: 4,
  },
  notificationButton: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EAF0F6',
  },
  /* Credit Score Card (Gauge Dashboard) */
  gaugeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#A3B4C6',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 4,
  },
  gaugeContainer: {
    width: 240,
    height: 130,
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'relative',
    overflow: 'hidden',
  },
  gaugeSvg: {
    position: 'absolute',
    top: 0,
  },
  scoreInsideContainer: {
    alignItems: 'center',
    bottom: 5,
  },
  statusText: {
    fontSize: 15,
    color: '#7F8C8D',
    fontWeight: '500',
  },
  scoreText: {
    fontSize: 46,
    fontWeight: 'bold',
    color: '#1E293B',
    lineHeight: 50,
  },
  pointsChangeText: {
    fontSize: 14,
    color: '#2ECC71',
    fontWeight: '600',
    marginTop: 2,
  },
  gaugeLimitsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 24,
    marginTop: 12,
  },
  limitText: {
    fontSize: 14,
    color: '#333333',
    fontWeight: '500',
  },
  updateDateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendarIcon: {
    marginRight: 6,
  },
  updateDateText: {
    fontSize: 13,
    color: '#94A3B8',
  },
  /* Quick Actions Quick Grid */
  actionsGrid: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
    shadowColor: '#A3B4C6',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 2,
  },
  actionItem: {
    alignItems: 'center',
    width: width / 5,
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionLabel: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 16,
  },
  /* Chart History Card */
  historySectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 16,
  },
  chartCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    position: 'relative',
    shadowColor: '#A3B4C6',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 2,
  },
  chartYAxisContainer: {
    height: 160,
    justifyContent: 'space-between',
    position: 'absolute',
    left: 20,
    top: 20,
    zIndex: 1,
  },
  yAxisLabel: {
    fontSize: 11,
    color: '#94A3B8',
  },
  graphContainer: {
    height: 160,
    marginLeft: 30,
    justifyContent: 'flex-end',
  },
  chartXAxisContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 35,
    marginTop: 12,
  },
  xAxisLabel: {
    fontSize: 12,
    color: '#94A3B8',
  },
  /* Floating Action Button */
  fabButton: {
    position: 'absolute',
    right: 16,
    bottom: 24,
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#4D7EFA',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#4D7EFA',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  /* Bottom Navigation Bar Styles */
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 75,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 10,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navLabelActive: {
    fontSize: 11,
    color: '#4D7EFA',
    fontWeight: '600',
    marginTop: 4,
  },
  avatarNav: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#E2E8F0',
  },
});

