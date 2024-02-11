import React from 'react';
import {ActivityIndicator, Modal} from 'react-native';
import styles from './ActivityIndicatorOverlayStyles';
import { useTheme } from '@shopify/restyle';
import { Box, Text } from '../index';
import {Theme} from '../../../assets/createTimelessTheme';

const theme = useTheme<Theme>();

export type ActivityIndicatorOverlayProps = {
  isVisible: boolean;
  label?: boolean | string;
  transparent?: boolean;
};

export const ActivityIndicatorOverlay: React.FC<
  ActivityIndicatorOverlayProps
> = ({label = '', isVisible = true, transparent = false}) => {

  return (
    <Modal transparent visible={isVisible}>
      <Box style={[styles.container, transparent && styles.transparent]}>
        <Box style={styles.content}>
          <ActivityIndicator
            size="large"
            color={theme.colors?.lightGray}
          />
          {label && <Text style={styles.label}>{label}</Text>}
        </Box>
      </Box>
    </Modal>
  );
};

export default ActivityIndicatorOverlay;
