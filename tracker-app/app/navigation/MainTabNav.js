import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TrackCreateScreen from '../features/track/screens/TrackCreateScreen';
import AccountScreen from '../features/user/screens/AccountScreen';
import TrackListStackNav from '../features/track/nav/TrackListStackNav';
import constants from '../common/constants';

const Tab = createBottomTabNavigator();

const MainTabNav = () => {
  return (
    <Tab.Navigator initialRouteName={constants.screenNames.trackCreateScreen}>
      <Tab.Screen
        name={constants.screenNames.trackListStackScreen}
        component={TrackListStackNav}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <MaterialCommunityIcons name="go-kart-track" size={32} />
          ),
          tabBarLabel: 'Tracks',
          tabBarLabelStyle: { fontSize: 14 },
        }}
      />
      <Tab.Screen
        name={constants.screenNames.trackCreateScreen}
        component={TrackCreateScreen}
        options={{ title: 'Create Track' }}
      />
      <Tab.Screen
        name={constants.screenNames.accountScreen}
        component={AccountScreen}
      />
    </Tab.Navigator>
  );
};

export default MainTabNav;
