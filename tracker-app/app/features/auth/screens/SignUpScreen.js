import React, { useContext, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import constants from '../../../common/constants';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../../../common/components/utils/Spacer';
import { AuthContext } from '../AuthContext';
import Loading from '../../../common/components/utils/Loading';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const {
    state: { signUpErrors, loading, checkingLocal },
    signUp,
    clearSignUp,
    tryLocalSignIn,
  } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignIn();
    const unSub = navigation.addListener('focus', () => {
      clearSignUp();
    });

    return unSub;
  }, []);

  const handleSignUp = () => {
    signUp({ name, email, password });
  };

  if (checkingLocal) return <Loading />;

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Spacer>
            <Text h3>Sign up for Tracker</Text>
          </Spacer>
          <Input
            label="Name"
            value={name}
            onChangeText={setName}
            autoCapitalize="none"
            autoCorrect={false}
            errorMessage={signUpErrors.name}
          />
          <Spacer />
          <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
            errorMessage={signUpErrors.email}
          />
          <Spacer />
          <Input
            label="Password"
            value={password}
            secureTextEntry
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
            errorMessage={signUpErrors.password}
          />
          <Spacer>
            <Button title="Sign Up" onPress={handleSignUp} disabled={loading} />
          </Spacer>
          <TouchableOpacity
            onPress={() =>
              navigation.replace(constants.screenNames.signInScreen)
            }
          >
            <Spacer>
              <Text style={styles.link}>
                Already have an account? Sign in instead{' '}
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
    marginTop: '20%',
  },
  link: {
    color: 'blue',
  },
});

export default SignUpScreen;
