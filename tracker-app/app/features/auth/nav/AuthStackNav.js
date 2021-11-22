import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';
import constants from '../../../common/constants';

const Stack = createNativeStackNavigator();

const AuthStackNav = () => {
  return (
    <Stack.Navigator initialRouteName={constants.screenNames.signUpScreen}>
      <Stack.Screen
        name={constants.screenNames.signUpScreen}
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={constants.screenNames.signInScreen}
        component={SignInScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNav;
