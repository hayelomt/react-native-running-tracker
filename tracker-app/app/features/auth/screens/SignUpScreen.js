import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import constants from '../../../common/constants';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../../../common/components/Spacer';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <View style={styles.container}>
        <Spacer>
          <Text h3>Sign up for Tracker</Text>
        </Spacer>
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Spacer />
        <Input
          label="Password"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Spacer>
          <Button title="Sign Up" onPress={() => {}} />
        </Spacer>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '25%',
  },
});

export default SignUpScreen;
