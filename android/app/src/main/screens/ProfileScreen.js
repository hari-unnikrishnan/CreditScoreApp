import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  Switch,
} from 'react-native';
import {
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  Smile,
  Fingerprint,
  Home,
  MessageSquare,
  PieChart,
  Wallet,
} from 'lucide-react-native';

import { styles } from './ProfileScreenstyles';

export default function ProfileScreen() {
  const [faceIdEnabled, setFaceIdEnabled] = useState(false);
  const [fingerprintEnabled, setFingerprintEnabled] = useState(false);

  // Fallback production profile avatar string asset
  const avatarUrl =
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80';

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Navigation Header Context */}
        <View style={styles.headerRow}>
          <TouchableOpacity style={styles.headerButton} activeOpacity={0.7}>
            <ChevronLeft color="#1A1A1A" size={24} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity style={styles.headerButton} activeOpacity={0.7}>
            <ChevronRight color="#1A1A1A" size={24} />
          </TouchableOpacity>
        </View>

        {/* Profile Details Hero Card */}
        <View style={styles.profileAvatarContainer}>
          <View style={styles.avatarRing}>
            <Image source={{ uri: avatarUrl }} style={styles.mainAvatar} />
          </View>
          <Text style={styles.userNameText}>Sarah Joe</Text>
        </View>

        {/* Personal Details Information Section */}
        <View style={styles.settingRowItem}>
          <View style={styles.iconWrapper}>
            <Mail color="#4D7EFA" size={20} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.settingLabel}>Email</Text>
            <Text style={styles.settingValuePlaceholder}>
              Sample@example.com
            </Text>
          </View>
        </View>

        <View style={styles.settingRowItem}>
          <View style={styles.iconWrapper}>
            <Phone color="#4D7EFA" size={20} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.settingLabel}>Phone</Text>
            <Text style={styles.settingValuePlaceholder}>
              (988) 000- 8888
            </Text>
          </View>
        </View>

        <View style={styles.settingRowItem}>
          <View style={styles.iconWrapper}>
            <Mail color="#4D7EFA" size={20} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.settingLabel}>DOB</Text>
            <Text style={styles.settingValuePlaceholder}>01/01/1990</Text>
          </View>
        </View>

        {/* Security Settings Section Block */}
        <Text style={styles.sectionGroupTitle}>Security</Text>

        <View style={styles.settingRowItem}>
          <View style={styles.iconWrapper}>
            <Smile color="#4D7EFA" size={20} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.settingLabel}>Face ID</Text>
            <Text style={styles.settingValuePlaceholder}>
              Use Face ID to unlock the app
            </Text>
          </View>
          <Switch
            trackColor={{ false: '#E0E0E0', true: '#4D7EFA' }}
            thumbColor={'#FFFFFF'}
            ios_backgroundColor="#E0E0E0"
            onValueChange={setFaceIdEnabled}
            value={faceIdEnabled}
          />
        </View>

        <View style={styles.settingRowItem}>
          <View style={styles.iconWrapper}>
            <Fingerprint color="#4D7EFA" size={20} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.settingLabel}>Fingerprint</Text>
            <Text style={styles.settingValuePlaceholder}>
              Use Fingerprint to unlock the app
            </Text>
          </View>
          <Switch
            trackColor={{ false: '#E0E0E0', true: '#4D7EFA' }}
            thumbColor={'#FFFFFF'}
            ios_backgroundColor="#E0E0E0"
            onValueChange={setFingerprintEnabled}
            value={fingerprintEnabled}
          />
        </View>
      </ScrollView>

      {/* Global Bottom Tab Bar Navigation Component */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Home color="#94A3B8" size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MessageSquare color="#94A3B8" size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <PieChart color="#94A3B8" size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Wallet color="#94A3B8" size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.avatarNavWrapperActive}>
            <Image source={{ uri: avatarUrl }} style={styles.avatarNav} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

