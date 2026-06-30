import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function OnboardingScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/onboarding.png')}
          resizeMode="contain"
          style={styles.image}
        />
      </View>

      <View style={styles.bottom}>
        <Text style={styles.title}>
          Your Credit Score
        </Text>

        <Text style={styles.description}>
          We provide you with the tools to monitor,
          understand, and improve your credit score.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  imageContainer: {
    flex: 0.68,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },

  image: {
    width: width * 0.95,
    height: height * 0.55,
  },

  bottom: {
    flex: 0.32,
    paddingHorizontal: 25,
    justifyContent: 'space-between',
    paddingBottom: 45,
  },

  title: {
    fontSize: 44,
    fontWeight: '700',
    color: '#111',
  },

  description: {
    marginTop: 15,
    fontSize: 18,
    color: '#666',
    lineHeight: 30,
  },

  button: {
    alignSelf: 'flex-end',
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: '#3F6EF8',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#A9BEFF',
  },

  arrow: {
    fontSize: 48,
    color: '#fff',
    marginTop: -8,
  },

});

