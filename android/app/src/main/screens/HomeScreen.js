import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop, G } from 'react-native-svg';
import {
  Bell,
  Calendar,
  CreditCard,
  FileText,
  MessageSquare,
  BarChart2,
  Plus,
  Home,
  PieChart,
  Wallet,
} from 'lucide-react-native';

import { styles } from './HomeScreenstyles';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header Bar */}
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.greetingText}>Hi, Sarah</Text>
            <Text style={styles.subGreetingText}>Your credit in excellent shape!</Text>
          </View>
          <TouchableOpacity style={styles.notificationButton} activeOpacity={0.7}>
            <Bell color="#1A1A1A" size={22} />
          </TouchableOpacity>
        </View>

        {/* Credit Score Gauge Component */}
        <View style={styles.gaugeCard}>
          <View style={styles.gaugeContainer}>
            <Svg width="220" height="110" viewBox="0 0 100 50" style={styles.gaugeSvg}>
              <Defs>
                <LinearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <Stop offset="0%" stopColor="#FF5E36" />
                  <Stop offset="40%" stopColor="#FFAA00" />
                  <Stop offset="75%" stopColor="#AEEA00" />
                  <Stop offset="100%" stopColor="#E0E0E0" />
                </LinearGradient>
              </Defs>
              <Path
                d="M 10 50 A 40 40 0 0 1 90 50"
                fill="none"
                stroke="url(#gaugeGradient)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray="95 30"
              />
            </Svg>

            <View style={styles.scoreInsideContainer}>
              <Text style={styles.statusText}>Good</Text>
              <Text style={styles.scoreText}>704</Text>
              <Text style={styles.pointsChangeText}>+6pts</Text>
            </View>
          </View>

          <View style={styles.gaugeLimitsRow}>
            <Text style={styles.limitText}>400</Text>
            <View style={styles.updateDateRow}>
              <Calendar color="#94A3B8" size={14} />
              <Text style={styles.updateDateText}>update on 02 Oct 2024</Text>
            </View>
            <Text style={styles.limitText}>850</Text>
          </View>
        </View>

        {/* Action Feature Hub Strip */}
        <View style={styles.actionsGrid}>
          <TouchableOpacity style={styles.actionItem}>
            <View style={[styles.iconWrapper, { backgroundColor: '#EEF2FF' }]}>
              <CreditCard color="#4D7EFA" size={22} />
            </View>
            <Text style={styles.actionLabel}>{'Pay\n'}Money</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionItem}>
            <View style={[styles.iconWrapper, { backgroundColor: '#E8FBF4' }]}>
              <FileText color="#10B981" size={22} />
            </View>
            <Text style={styles.actionLabel}>{'Loan\n'}Request</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionItem}>
            <View style={[styles.iconWrapper, { backgroundColor: '#FFF7ED' }]}>
              <MessageSquare color="#F97316" size={22} />
            </View>
            <Text style={styles.actionLabel}>{'Chat\n'}Support</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionItem}>
            <View style={[styles.iconWrapper, { backgroundColor: '#F5F3FF' }]}>
              <BarChart2 color="#8B5CF6" size={22} />
            </View>
            <Text style={styles.actionLabel}>{'Finance\n'}Hub</Text>
          </TouchableOpacity>
        </View>

        {/* Credit History Graph Module */}
        <Text style={styles.historySectionTitle}>Credit Score History</Text>
        <View style={styles.chartCard}>
          <View style={styles.chartYAxisContainer}>
            <Text style={styles.yAxisLabel}>850</Text>
            <Text style={styles.yAxisLabel}>800</Text>
            <Text style={styles.yAxisLabel}>750</Text>
            <Text style={styles.yAxisLabel}>700</Text>
            <Text style={styles.yAxisLabel}>650</Text>
          </View>

          <View style={styles.graphContainer}>
            <Svg height="140" width="100%" viewBox="0 0 300 100" preserveAspectRatio="none">
              <Path
                d="M 0,85 C 20,70 30,45 50,45 C 70,45 80,55 100,50 C 120,45 130,15 150,40 C 170,65 180,30 200,25 C 220,22 240,40 260,10 C 270,-2 280,18 300,12"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </Svg>
          </View>

          <View style={styles.chartXAxisContainer}>
            <Text style={styles.xAxisLabel}>Jan</Text>
            <Text style={styles.xAxisLabel}>Feb</Text>
            <Text style={styles.xAxisLabel}>Mar</Text>
            <Text style={styles.xAxisLabel}>Apr</Text>
            <Text style={styles.xAxisLabel}>May</Text>
            <Text style={styles.xAxisLabel}>Jun</Text>
          </View>

          <TouchableOpacity style={styles.fabButton} activeOpacity={0.8}>
            <Plus color="#FFFFFF" size={24} />
          </TouchableOpacity>
        </View>

        {/* Spacer to avoid bottom nav overlap */}
        <View style={{ height: 92 }} />
      </ScrollView>

      {/* Global Application Sticky Footer Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Home color="#4D7EFA" size={24} />
          <Text style={styles.navLabelActive}>Home</Text>
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

