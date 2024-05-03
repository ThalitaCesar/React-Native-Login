import React from 'react';
import { NavigationContainer, DefaultTheme, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../pages/HomeScreen';
import LoginScreen from '../pages/LoginScreen';
import WebViewScreen from '../pages/WebViewScreen';
import SignUpScreen from '../pages/SignUpScreen';
import useAuth from '../hooks/useAuth';
import { Text, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const { user, logout } = useAuth();

  return (
    <NavigationContainer theme={DefaultTheme} initialRouteName='Home'>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen
          name="WebView"
          component={WebViewScreen}
          options={{
            headerShown: true,
            headerRight: () => (
                <LogoutButton onPress={logout} />
              ),
              headerStyle: {
                backgroundColor: '#030720', 
              },
              headerTitle: '', 
            }}
        />
          </>
        ) : (
          <>
             <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: true,
            headerLeft: () => (
              <BackButton />
            ),
            headerStyle: {
              backgroundColor: '#030720', 
            },
            headerTitle: '', 
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            headerShown: true,
            headerLeft: () => (
              <BackButton />
            ),
            headerStyle: {
              backgroundColor: '#030720', 
            },
            headerTitle: '', 
          }}
        />
           
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const BackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <FontAwesome name="chevron-left" size={20} color="#1ED6E4" style={{ marginLeft: 10 }} />
    </TouchableOpacity>
  );
};

const LogoutButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
     <FontAwesome name="sign-out" size={30} color="#1ED6E4" style={{ marginLeft: 10 }} />
    </TouchableOpacity>
  );
};
