import { StyleSheet } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../../assets/createTimelessTheme';
const theme = useTheme<Theme>();

export default StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 600,
    width: 370,
    paddingHorizontal: theme.spacing.xl,
  },
  buttonContainer: {
    borderRadius: theme.borderRadii?.m,
    backgroundColor: theme.colors?.informationSecondary,
    padding: theme.spacing?.inputPadding,
    color: theme.colors?.surface,
  },
} as const);
