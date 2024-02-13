import React from 'react';
import { ImageSourcePropType, ImageBackground, TouchableOpacity, StyleProp, ViewStyle, } from 'react-native';
import styles from './MessageDialogStyles';
import { Box, Text } from '../index';

export type MessageDialogProps = {
  image: ImageSourcePropType;
  title: string;
  description: string;
  buttonText?: string;
  buttonClick?: void | (() => void);
  style?: StyleProp<ViewStyle>;
};

const MessageDialog: React.FC<MessageDialogProps> = ({
  image,
  style,
  description,
  title,
  buttonText = '',
  buttonClick = () => null,
}) => {
  return (
    <Box style={styles.container}>
      <ImageBackground resizeMode="contain" source={image} style={styles.image}>
        <Box style={[styles.wrapper, style]}>
          <Text variant={'h6'}>{title}</Text>
          <Text marginVertical={'s'} variant={'captions1'} >{description}</Text>
          {!!buttonText && (
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => buttonClick()}>
              <Text>{buttonText}</Text>
            </TouchableOpacity>
          )}
        </Box>
      </ImageBackground>
    </Box>
  );
};

export default MessageDialog;
