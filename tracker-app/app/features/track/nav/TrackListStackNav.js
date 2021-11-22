import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import constants from '../../../common/constants';
import TrackDetailScreen from '../screens/TrackDetailScreen';
import TrackListScreen from '../screens/TrackListScreen';

const Stack = createNativeStackNavigator();

const TrackListStackNav = () => {
  return (
    <Stack.Navigator initialRouteName={constants.screenNames.trackListScreen}>
      <Stack.Screen
        name={constants.screenNames.trackListScreen}
        component={TrackListScreen}
      />
      <Stack.Screen
        name={constants.screenNames.trackDetailScreen}
        component={TrackDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default TrackListStackNav;
