import React from 'react';
import {View, StyleSheet} from 'react-native';
import spacing from '../../theme/spacing.ts';
import colors from '../../theme/colors.ts';

type DividerProps = {
  size: number;
  padding: number;
};
const Divider: React.FC<DividerProps> = ({size = 1, padding = spacing.xs}) => {
  return (
    <View style={{paddingVertical: padding}}>
      <View style={[styles.divider, {borderBottomWidth: size}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  divider: {
    borderBottomColor: colors.primary200,
  },
});

export default Divider;
