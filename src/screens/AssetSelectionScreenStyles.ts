import {StyleSheet} from 'react-native';
import { useTheme } from '@shopify/restyle';
import {Theme} from '../../assets/createTimelessTheme';

const theme = useTheme<Theme>();

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors?.surface,
    alignItems: 'center',
  },
} as const);
