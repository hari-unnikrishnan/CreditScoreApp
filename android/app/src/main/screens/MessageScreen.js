import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import {
  ChevronLeft,
  ChevronRight,
  Search,
  Home,
  MessageSquare,
  PieChart,
  Wallet,
} from 'lucide-react-native';
import { styles } from './MessageScreenstyles'; // Isolated design file mapping

export default function MessageScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  // Sample mock data matching the source image state context parameters
  const activeConversations = [
    {
      id: '1',
      sender: 'Premium Credit Solutions',
      avatar:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=120&auto=format&fit=crop',
      preview:
        'Payment confirmed! Your receipt will arrive in your email shortly.',
      timeLabel: '2hr ago',
      indicatorColor: '#2ECC71', // Green
    },
    {
      id: '2',
      sender: 'Standard Payment Services',
      avatar:
        'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=120&auto=format&fit=crop',
      preview:
        "We got your request. It's under review and you'll be notified once approved.",
      timeLabel: '2day ago',
      indicatorColor: '#E67E22', // Orange
    },
    {
      id: '3',
      sender: 'Basic Financial Support',
      avatar:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=120&auto=format&fit=crop',
      preview:
        'Payment recorded successfully. A confirmation email and SMS are on the way.',
      timeLabel: '2day ago',
      indicatorColor: '#95A5A6', // Gray
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Navigation Context Bar */}
        <View style={styles.headerRow}>
          <TouchableOpacity style={styles.headerButton} activeOpacity={0.7}>
            <ChevronLeft color="#1A1A1A" size={24} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Messages</Text>
          <TouchableOpacity style={styles.headerButton} activeOpacity={0.7}>
            <ChevronRight color="#1A1A1A" size={24} />
          </TouchableOpacity>
        </View>

        {/* Input Bar Layout Element */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Your messages"
            placeholderTextColor="#A9A9A9"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <Search color="#A9A9A9" size={20} style={styles.searchIcon} />
        </View>

        {/* Section Breakdown: Today Group */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionDateText}>Today</Text>
          <Text style={styles.sectionTimestampText}>12/10/24</Text>
        </View>

        {/* Messaging Cards Mapping Pipeline */}
        {activeConversations.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.messageCard}
            activeOpacity={0.8}
          >
            <Image source={{ uri: item.avatar }} style={styles.avatarImage} />
            <View style={styles.messageDetails}>
              <View style={styles.cardHeaderRow}>
                <Text style={styles.senderName} numberOfLines={1}>
                  {item.sender}
                </Text>
                <View
                  style={[
                    styles.statusIndicator,
                    { backgroundColor: item.indicatorColor },
                  ]}
                />
              </View>
              <Text style={styles.messagePreview} numberOfLines={2}>
                {item.preview}
              </Text>
              <Text style={styles.timeElapsedText}>{item.timeLabel}</Text>
            </View>
          </TouchableOpacity>
        ))}

        {/* Section Breakdown: Previous Group */}
        <Text style={styles.standaloneDateText}>12/10/24</Text>

        {/* Single Mock Card representation for the trailing baseline element */}
        <TouchableOpacity style={styles.messageCard} activeOpacity={0.8}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=120&auto=format&fit=crop',
            }}
            style={styles.avatarImage}
          />
          <View style={styles.messageDetails}>
            <View style={styles.cardHeaderRow}>
              <Text style={styles.senderName} numberOfLines={1}>
                Nova Finance Group
              </Text>
              <View style={[styles.statusIndicator, { backgroundColor: '#2ECC71' }]} />
            </View>
            <Text style={styles.messagePreview} numberOfLines={2}>
              Your payment went through! We've sent a detailed summary copy...
            </Text>
            <Text style={styles.timeElapsedText}>3day ago</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      {/* Primary Context Screen Overlay Core Action */}
      <View style={styles.ctaButtonContainer}>
        <TouchableOpacity style={styles.newChatButton} activeOpacity={0.9}>
          <Text style={styles.newChatButtonText}>Start a new chat</Text>
        </TouchableOpacity>
      </View>

      {/* Global Application Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Home color="#94A3B8" size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MessageSquare color="#4D7EFA" size={24} />
          <Text style={styles.navLabelActive}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <PieChart color="#94A3B8" size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Wallet color="#94A3B8" size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
            }}
            style={styles.avatarNav}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

