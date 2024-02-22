import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const Loading: React.FC = () => {
  return (
    <View style={styles.center}>
      <ActivityIndicator
        testID="loadingIndicator"
        size="large"
        color={'blue'}
      />
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
export default Loading;
