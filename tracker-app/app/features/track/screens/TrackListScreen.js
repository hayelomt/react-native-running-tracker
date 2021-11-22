import React from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import constants from '../../../common/constants';

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
      <Button
        title="Go to track detail"
        onPress={() =>
          navigation.navigate(constants.screenNames.trackDetailScreen)
        }
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
