import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainTabNav from './MainTabNav';
import AuthStackNav from '../features/auth/nav/AuthStackNav';
import { AuthContext } from '../features/auth/AuthContext';

const AppNavigation = () => {
  const {
    state: { isSignedIn },
  } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isSignedIn ? <MainTabNav /> : <AuthStackNav />}
    </NavigationContainer>
  );
};

export default AppNavigation;
