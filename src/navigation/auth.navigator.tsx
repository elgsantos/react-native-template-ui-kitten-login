import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../layouts/auth/login';
import SignIn2Screen from '../layouts/auth/sign-in-2';
import SignIn3Screen from '../layouts/auth/sign-in-3';
import SignUp2Screen from '../layouts/auth/sign-up-2';
import ForgotPasswordScreen from '../layouts/auth/forgot-password';

const Stack = createStackNavigator();

export const AuthNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Login' component={LoginScreen} />
    <Stack.Screen name='SignIn2' component={SignIn2Screen} />
    <Stack.Screen name='SignIn3' component={SignIn3Screen} />
    <Stack.Screen name='SignUp2' component={SignUp2Screen} />
    <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
  </Stack.Navigator>
);
