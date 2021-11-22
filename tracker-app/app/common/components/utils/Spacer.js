import React from 'react';
import { StyleSheet, View } from 'react-native';

const Spacer = ({ margin, children }) => {
  return <View style={styles(margin).spacer}>{children}</View>;
};

const styles = (margin) =>
  StyleSheet.create({
    spacer: {
      margin: margin || 16,
    },
  });

export default Spacer;
