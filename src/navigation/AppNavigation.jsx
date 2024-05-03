import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../pages/HomeScreen';
import LoginScreen from '../pages/LoginScreen';
import WebViewScreen from '../pages/WebViewScreen';
import SignUpScreen from '../pages/SignUpScreen';
import useAuth from '../hooks/useAuth';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const { user } = useAuth();

  return (
    <NavigationContainer theme={DefaultTheme} initialRouteName='Home'>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen name="WebView" component={WebViewScreen} options={{ headerShown: false }} />
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
           
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}



