import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import constants from '../../../common/constants';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../../../common/components/utils/Spacer';
import { AuthContext } from '../AuthContext';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {
    state: { signInErrors, loading },
    signIn,
    clearSignIn,
  } = useContext(AuthContext);

  useEffect(() => {
    const unSub = navigation.addListener('focus', () => {
      clearSignIn();
    });

    return unSub;
  }, []);

  const handleSignIn = () => {
    signIn({ email, password });
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Spacer>
            <Text h3>Sign in to Tracker</Text>
          </Spacer>
          <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
            errorMessage={signInErrors.email}
          />
          <Input
            label="Password"
            value={password}
            secureTextEntry
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
            errorMessage={signInErrors.password}
          />
          <Spacer>
            <Button title="Sign In" onPress={handleSignIn} disabled={loading} />
          </Spacer>
          <TouchableOpacity
            onPress={() =>
              navigation.replace(constants.screenNames.signUpScreen)
            }
          >
            <Spacer>
              <Text style={styles.link}>
                Don't have an account? Sign up instead{' '}
              </Text>
            </Spacer>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '15%',
  },
  link: {
    color: 'blue',
  },
});

export default SignInScreen;
