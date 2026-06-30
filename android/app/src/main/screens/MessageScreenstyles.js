import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC', 
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 160, // Clear floating button and navigation spaces
  },
  /* Top Messages Header Profile */
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
  /* Input Search Wrapper */
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EAF0F6',
    borderRadius: 25,
    paddingHorizontal: 16,
    height: 50,
    marginBottom: 24,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#1A1A1A',
  },
  searchIcon: {
    marginLeft: 8,
  },
  /* Timeline Section Breaks */
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    marginTop: 8,
  },
  sectionDateText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  sectionTimestampText: {
    fontSize: 13,
    color: '#94A3B8',
  },
  standaloneDateText: {
    fontSize: 13,
    color: '#94A3B8',
    marginBottom: 12,
    marginTop: 16,
  },
  /* Messaging Card Layout Grid */
  messageCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  avatarImage: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#E2E8F0',
  },
  messageDetails: {
    flex: 1,
    marginLeft: 14,
    marginRight: 8,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  senderName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  statusIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  messagePreview: {
    fontSize: 13,
    color: '#A9A9A9',
    marginTop: 4,
    lineHeight: 18,
  },
  timeElapsedText: {
    fontSize: 12,
    color: '#94A3B8',
    textAlign: 'right',
    marginTop: 6,
  },
  /* Floating Bottom Dynamic Buttons */
  ctaButtonContainer: {
    position: 'absolute',
    bottom: 95, // Above the tab navigation bar layout boundary safely
    left: 20,
    right: 20,
    zIndex: 10,
  },
  newChatButton: {
    height: 54,
    backgroundColor: '#4D7EFA',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#4D7EFA',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 4,
  },
  newChatButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  /* Standard Application Bottom Navigation Bar */
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


