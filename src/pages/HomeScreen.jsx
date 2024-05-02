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
          Welcome To {'\n'}
          Shh!
        </Text>
        <Text style={styles.subtitle}>
          A Hub Where Whispers Echo Loudest
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
    backgroundColor: '#8C5CB3',
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
    color: '#000000',
    fontSize: 16,
    marginBottom: 30,
    paddingLeft: 30,
  },
  clouds: {
    height: 300,
    width: '100%'
  },
  button: {
    backgroundColor: '#000000',
    width: 185,
    height: 61,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginTop: -40,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
