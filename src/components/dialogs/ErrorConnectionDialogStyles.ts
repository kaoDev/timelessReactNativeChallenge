import { StyleSheet } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../../assets/createTimelessTheme';
const theme = useTheme<Theme>();

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: theme.colors?.activityBackDrop,
  },
  modalContent: {
    backgroundColor: theme.colors?.surface,
    height: '65%',
    borderRadius: theme.borderRadii?.l,
    borderWidth: 1.7,
    borderColor: theme.colors?.overlay,
  },
  innerContainer: {
    marginLeft: theme.spacing?.xxl,
    justifyContent: 'center',
    alignItems: 'center',
  },
} as const);
