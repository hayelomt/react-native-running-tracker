import React from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import constants from '../../../common/constants';

const SignInScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>SignInScreen</Text>
      <Button
        title="Go to SignUp"
        onPress={() => navigation.replace(constants.screenNames.signUpScreen)}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default SignInScreen;
