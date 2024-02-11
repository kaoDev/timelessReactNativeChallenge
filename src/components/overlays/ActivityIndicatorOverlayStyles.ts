import { StyleSheet } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../../assets/createTimelessTheme';
import Responsive from '../../utils/Responsive';

const theme = useTheme<Theme>();

export default StyleSheet.create({
  transparent: {
    backgroundColor: theme.colors?.transparent,
  },
  container: {
    backgroundColor: theme.colors?.activityBackDrop,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: theme.spacing?.m,
    backgroundColor: theme.colors?.surface,
    borderRadius: theme.borderRadii?.s,
  },
  label: {
    marginTop: theme.spacing?.xxs,
    color: theme.colors?.lightGray,
    fontSize: Responsive.font(18),
  },
} as const);
