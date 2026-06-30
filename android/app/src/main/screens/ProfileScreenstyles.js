import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
  /* Navigation Header */
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 24,
  },
  headerButton: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EAF0F6',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  /* Profile Section */
  profileAvatarContainer: {
    alignItems: 'center',
    marginBottom: 28,
  },
  avatarRing: {
    width: 154,
    height: 154,
    borderRadius: 77,
    borderWidth: 3,
    borderColor: '#4D7EFA',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  },
  mainAvatar: {
    width: 144,
    height: 144,
    borderRadius: 72,
    backgroundColor: '#E2E8F0',
  },
  userNameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginTop: 14,
  },
  /* Section Group Titles */
  sectionGroupTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginTop: 12,
    marginBottom: 16,
  },
  /* List Settings Row Items */
  settingRowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  iconWrapper: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
    paddingRight: 8,
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1A1A1A',
  },
  settingValuePlaceholder: {
    fontSize: 13,
    color: '#A9A9A9',
    marginTop: 3,
  },
  /* Navigation Bottom Tab Bar */
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
  avatarNavWrapperActive: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#4D7EFA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarNav: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E2E8F0',
  },
});


