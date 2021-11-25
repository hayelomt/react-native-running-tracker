import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { AuthContext } from '../../auth/AuthContext';

const AccountScreen = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <>
      <Button title="Sign Out" onPress={signOut} />
    </>
  );
};

AccountScreen.screenName = 'AccountScreen';

const styles = StyleSheet.create({});

export default AccountScreen;
