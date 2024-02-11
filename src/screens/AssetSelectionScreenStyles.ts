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
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  list: {
    marginTop: theme.spacing?.xxl,
    paddingHorizontal: theme.spacing?.m,
    width: '100%',
  },
} as const);
