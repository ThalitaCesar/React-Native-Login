import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen= () => {
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate('Login'); 
  };
  return (
      <View style={styles.container}>
         <ImageBackground source={require('../../assets/bg.png')} style={styles.background}/>
         <View style={styles.welcome}>
        <Text style={styles.title}>
          Welcome To
        </Text>
        <Text style={[styles.title, { color: '#1ED6E4' }]}>
          The Members
        </Text>
        <Text style={styles.subtitle}>
        The number one membership platform for digital products
        </Text>
        <Image source={require('../../assets/clouds.png')} style={styles.clouds}/>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSignIn}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  background: {
    position: 'absolute', 
    width: '100%',
    height: '100%',
    bottom: -100,
  },
  container: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'start',
    backgroundColor: '#030720',
  },
  welcome: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'start',
    paddingTop: 80,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingLeft: 30,
  },
  subtitle: {
    color: '#E4E5E8',
    fontSize: 16,
    marginBottom: 30,
    paddingHorizontal: 30,
  },
  clouds: {
    height: 295,
    marginTop: -20,
    width: '100%'
  },
  button: {
    backgroundColor: '#1ED6E4',
    height: 48,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:30,
    marginTop:7,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
