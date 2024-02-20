import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Error: React.FC = () => {
  return (
    <View style={styles.center}>
      <Text>Something went wrong! Please try later.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Error;
