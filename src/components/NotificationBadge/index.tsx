import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import bell from '../../assets/icons/bell.png';
import bellFilled from '../../assets/icons/bell_filled.png';

const NotificationBadge = () => {
  const [hasNotification, setSasNotification] = React.useState(false);
  return (
    <TouchableOpacity onPress={() => setSasNotification(!hasNotification)}>
      <View style={[styles.container]}>
        <Image
          source={hasNotification ? bell : bellFilled}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 30,
    justifyContent: 'center',
  },
  image: {
    width: 25,
    height: 25,
  },
});

export default NotificationBadge;
