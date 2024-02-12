import * as React from 'react';
import {PropsWithChildren} from 'react';
import {Pressable, StyleSheet, Image} from 'react-native';
import {Box} from 'src/components/box/Box';
import {IButtonCircle} from 'src/types';

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

const ButtonCircle = ({
  children,
  selected,
  onButtonPress,
  ...rest
}: PropsWithChildren<IButtonCircle>) => {
  return (
    <Pressable
      {...rest}
      style={styles.button}
      onPress={onButtonPress}
      testID="button-circle">
      <Box flexDirection="row">
        <Image
          source={
            selected
              ? require('assets/icons/bell_filled.png')
              : require('assets/icons/bell.png')
          }
        />
        {children}
      </Box>
    </Pressable>
  );
};

export default ButtonCircle;
