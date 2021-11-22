import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TrackCreateScreen from '../features/track/screens/TrackCreateScreen';
import AccountScreen from '../features/user/screens/AccountScreen';
import TrackListStackNav from '../features/track/nav/TrackListStackNav';
import constants from '../common/constants';

const Tab = createBottomTabNavigator();

const MainTabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={constants.screenNames.trackListStackScreen}
        component={TrackListStackNav}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={constants.screenNames.trackCreateScreen}
        component={TrackCreateScreen}
      />
      <Tab.Screen
        name={constants.screenNames.accountScreen}
        component={AccountScreen}
      />
    </Tab.Navigator>
  );
};

export default MainTabNav;
