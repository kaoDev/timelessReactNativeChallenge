import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import bell from '../../assets/icons/bell.png';
import bellFilled from '../../assets/icons/bell_filled.png';
import {useNotificationSettings} from '../../contexts/NotificationSettingsContext';
import spacing from '../../theme/spacing.ts';
import colors from '../../theme/colors.ts';

const NotificationBadge = ({id}: {id: string}) => {
  const {notificationIds, addNotificationId, removeNotificationId} =
    useNotificationSettings();

  const onPress = () => {
    if (!notificationIds.has(id)) {
      addNotificationId(id);
    } else {
      removeNotificationId(id);
    }
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container]}>
        <Image
          source={notificationIds.has(id) ? bellFilled : bell}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: spacing.s,
    paddingHorizontal: spacing.s,
    height: 30,
    justifyContent: 'center',
  },
  image: {
    width: 25,
    height: 25,
  },
});

export default NotificationBadge;
