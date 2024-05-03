import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../config/firebaseConfig';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); 
  const navigation = useNavigation();

  const handleSignUp = async () => {
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedConfirmPassword = confirmPassword.trim();
    if (!trimmedEmail || !trimmedPassword || !trimmedConfirmPassword) {
      alert('Error', 'Please fill all the required fields.');
      return;
    }
    if (trimmedPassword.length < 6) {
      alert('Error', 'Password must be at least 6 characters long.');
      return;
    }
    if (trimmedPassword !== trimmedConfirmPassword) {
      alert('Error', 'Password and Confirm Password do not match.');
      return;
    }
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(trimmedEmail, trimmedPassword);
      alert('Success', 'User signed up successfully!');
      navigation.navigate('Login'); 
    } catch (error) {
      console.log(error.message);
      alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/bglogin.png')} style={styles.background} />
      <Text style={styles.title}>Sign Up</Text>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#E4E5E8"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#E4E5E8"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm your password"
          placeholderTextColor="#E4E5E8"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleSignUp}>
        <Text style={styles.loginButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.signupText, { color: '#1ED6E4' }]}>Log in</Text>
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
    bottom: -10,
  },
  container: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
    backgroundColor: '#030720',
    paddingTop: 80,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  formContainer: {
    width: '80%',
  },
  label: {
    color: '#E4E5E8',
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 10,
    marginLeft: 5,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    color: '#000000',
    fontSize: 16,
    padding: 8,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#1ED6E4',
    height: 56,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  signupText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 5,
  },
});

export default SignUpScreen;
