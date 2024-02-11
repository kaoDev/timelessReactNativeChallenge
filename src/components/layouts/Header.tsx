import React, { ReactNode } from 'react';
import { StyleSheet, StyleProp, ViewStyle } from 'react-native';
import styles from './HeaderStyles';
import { useTheme } from '@shopify/restyle';
import { Box } from '../index';
import { Theme } from '../../../assets/createTimelessTheme';

const theme = useTheme<Theme>();

export type HeaderProps = {
  left?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
  borderless?: boolean;
  style?: StyleProp<ViewStyle>;
};

export const Header: React.FC<HeaderProps> = ({ borderless = false, left, right, center, style }) => {

  const contentStyle = () => {
    const borderBottomWidth = borderless ? undefined : StyleSheet.hairlineWidth;
    return [styles.content, { borderBottomWidth }];
  }

  return (
    <Box style={[styles.container, style]}>
      <Box style={contentStyle()}>
        <Box style={styles.left}>
          {left}
        </Box>
        <Box style={styles.center}>
          {center}
        </Box>
        <Box style={styles.right}>
          {right}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
