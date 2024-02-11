import { StyleSheet } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../../assets/createTimelessTheme';

const theme = useTheme<Theme>();

export default StyleSheet.create({
  container: {
    backgroundColor: theme.colors?.surface,
    paddingHorizontal: theme.spacing?.m,
    paddingVertical: theme.spacing?.xs,
  },
  content: {
    borderColor: theme.colors?.grayBorder,
    flexDirection: 'row',
    paddingTop: theme.spacing?.xl,
  },
  left: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
} as const);
