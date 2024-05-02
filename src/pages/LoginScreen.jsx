import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {

  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('WebView'); 
  };

  return (
      <View style={styles.container}>
         <ImageBackground source={require('../../assets/bglogin.png')} style={styles.background}/>
        <Text style={styles.title}>Log in</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
        >
          <Image source={require('../../assets/google.png')} style={styles.icon}/> 
          <Text style={styles.buttonText}>Log in with Google</Text>
        </TouchableOpacity>

        <Text style={styles.formText}>
          &sdot; &sdot; &sdot; &sdot; &sdot; &sdot; &sdot; &sdot; &sdot; &sdot; &sdot; &sdot; &sdot; &sdot; &sdot; &sdot; &sdot; &sdot; &sdot;
          Or log in with Email
          &sdot; &sdot; &sdot; &sdot; &sdot; &sdot; &sdot; &sdot; &sdot; &sdot; &sdot; &sdot; &sdot; &sdot; &sdot; &sdot; &sdot; &sdot; &sdot; 
          </Text>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Username or Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your username or email"
            placeholderTextColor="#FFFFFF"
          />
          <View style={styles.passwordInputContainer}>
            <Text style={styles.label}>Password</Text>
            <TouchableOpacity onPress={() => console.log('Forgot password')}>
              <Text style={styles.forgotText}>Forgot?</Text>
            </TouchableOpacity>
          </View>
       
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="#FFFFFF"
              secureTextEntry={true}
            />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Sign in</Text>
        </TouchableOpacity>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don’t have an account?</Text>
          <Text style={[styles.signupText, { color: '#1ED6E4' }]}>Sign up</Text>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  background: {
    position: 'absolute', 
    width: '100%',
    height: '100%',
    bottom: -10,
  },
  container: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'start',
    backgroundColor: '#030720',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    paddingTop: 80,
  },
  formText: {
    fontSize: 13,
    fontWeight: 'bold',
    padding:20,
    textAlign: 'center',
    marginBottom:20,
    color: '#E4E5E8'
  },
  button: {
    backgroundColor: '#1ED6E4',
    flexDirection:'row',
    height: 51,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    marginBottom: 10,
    marginHorizontal:40,
  },
  icon: {
    width: 24, 
    height: 24,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  formContainer: {
    width: '100%',
    paddingVertical:10,
    paddingHorizontal:40,
  },
  label: {
    color: '#E4E5E8',
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 10,
    marginLeft:5,

  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    color: '#000000',
    fontSize: 16,
    padding: 8,
    paddingHorizontal:20,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  forgotText: {
    color: '#E4E5E8',
    fontSize: 14,
    fontWeight: '300',
    marginRight:5,
  },
  loginButton: {
    backgroundColor: '#1ED6E4',
    height: 56,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin:30,
    marginTop: 20,
    marginHorizontal:40,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    marginLeft: 120,
  },
  signupText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
