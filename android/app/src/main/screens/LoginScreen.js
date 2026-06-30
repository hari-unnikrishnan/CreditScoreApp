import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Switch,
} from 'react-native';
import { Fingerprint } from 'lucide-react-native';

export default function LoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Logo Section */}
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>KOJO</Text>
            {/* Custom Smile Shape mapping to the logo asset */}
            <View style={styles.smileIconContainer}>
              <View style={styles.smileArc} />
              <View style={[styles.dot, styles.leftDot]}>
                <Text style={styles.dotText}>$</Text>
              </View>
              <View style={[styles.dot, styles.rightDot]}>
                <Text style={styles.dotText}>$</Text>
              </View>
            </View>
            <Text style={styles.tagline}>Ally in Debt</Text>
          </View>

          {/* Form Fields */}
          <View style={styles.formContainer}>
            {/* Phone Number */}
            <Text style={styles.label}>
              Phone Number<Text style={styles.required}>*</Text>
            </Text>
            <View style={styles.phoneInputRow}>
              <TouchableOpacity style={styles.countryPicker}>
                <Text style={styles.flag}>🇺🇸</Text>
                <Text style={styles.dropdownArrow}>⌃</Text>
              </TouchableOpacity>
              <TextInput
                style={[styles.input, styles.phoneInput]}
                placeholder="Enter Your Phone Number"
                placeholderTextColor="#A9A9A9"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
            </View>

            {/* First Name */}
            <Text style={styles.label}>
              First Name<Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Email" // Matching placeholder bug from design mockup
              placeholderTextColor="#A9A9A9"
              value={firstName}
              onChangeText={setFirstName}
            />

            {/* Last Name */}
            <Text style={styles.label}>
              Last Name<Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Email" // Matching placeholder bug from design mockup
              placeholderTextColor="#A9A9A9"
              value={lastName}
              onChangeText={setLastName}
            />

            {/* Email Address */}
            <Text style={styles.label}>
              Email Address<Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Email"
              placeholderTextColor="#A9A9A9"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />

            {/* Biometric Login */}
            <TouchableOpacity style={styles.biometricButton} activeOpacity={0.7}>
              <Fingerprint
                color="#4D7EFA"
                size={24}
                style={styles.biometricIcon}
              />
              <Text style={styles.biometricText}>Use Biometric Login</Text>
            </TouchableOpacity>

            {/* Log In Button */}
            <TouchableOpacity style={styles.loginButton} activeOpacity={0.8}>
              <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>

            {/* Keep Me Logged In Toggle */}
            <View style={styles.toggleRow}>
              <Text style={styles.toggleLabel}>Keep me logged in</Text>
              <Switch
                trackColor={{ false: '#E0E0E0', true: '#4D7EFA' }}
                thumbColor={'#FFFFFF'}
                ios_backgroundColor="#E0E0E0"
                onValueChange={setKeepLoggedIn}
                value={keepLoggedIn}
              />
            </View>
          </View>

          {/* Footer Footer */}
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>
              Don’t have an account ?{' '}
              <Text style={styles.signUpText}>Sign Up</Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
    alignItems: 'center',
  },
  /* Logo styling matches original branding shapes */
  logoContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 24,
  },
  logoText: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#4D7EFA',
    letterSpacing: 1,
  },
  smileIconContainer: {
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -5,
    position: 'relative',
  },
  smileArc: {
    width: 80,
    height: 40,
    borderWidth: 5,
    borderColor: '#4D7EFA',
    borderRadius: 25,
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    position: 'absolute',
    top: -15,
  },
  dot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#1E63D4',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
  },
  leftDot: { left: 6 },
  rightDot: { right: 6 },
  dotText: {
    color: '#FFF',
    fontSize: 9,
    fontWeight: 'bold',
  },
  tagline: {
    fontSize: 22,
    color: '#4D7EFA',
    marginTop: 10,
  },
  /* Form Elements */
  formContainer: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    color: '#1A1A1A',
    fontWeight: '500',
    marginBottom: 8,
    marginTop: 16,
  },
  required: {
    color: '#DE350B',
  },
  input: {
    width: '100%',
    height: 52,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 14,
    paddingHorizontal: 16,
    fontSize: 15,
    color: '#1A1A1A',
    backgroundColor: '#FFF',
  },
  phoneInputRow: {
    flexDirection: 'row',
    width: '100%',
  },
  countryPicker: {
    width: 70,
    height: 52,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  flag: {
    fontSize: 20,
  },
  dropdownArrow: {
    fontSize: 10,
    color: '#4D7EFA',
    marginLeft: 4,
    transform: [{ rotate: '180deg' }],
  },
  phoneInput: {
    flex: 1,
  },
  biometricButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
  biometricIcon: {
    marginRight: 8,
  },
  biometricText: {
    fontSize: 14,
    color: '#7F8C8D',
  },
  loginButton: {
    width: '100%',
    height: 54,
    backgroundColor: '#4D7EFA',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#4D7EFA',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingRight: 4,
  },
  toggleLabel: {
    fontSize: 14,
    color: '#7F8C8D',
  },
  /* Footer Links */
  footerContainer: {
    marginTop: 45,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 15,
    color: '#333333',
  },
  signUpText: {
    color: '#4D7EFA',
    fontWeight: '600',
  },
});

