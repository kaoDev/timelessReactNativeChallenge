import { StyleSheet } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../../assets/createTimelessTheme';

const theme = useTheme<Theme>();

export default StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 12,
    marginTop: theme.spacing?.s,
    flexDirection: 'column',
    shadowOpacity: 0.1,
  },
  image: {
    height: 220,
    width: '70%',
    resizeMode: 'stretch',
    alignSelf: 'center',
  },
  content: {
    flexDirection: 'column',
    padding: theme.spacing?.s,
    borderBottomStartRadius: 12,
    paddingTop: theme.spacing?.m,
    borderBottomEndRadius: 12,
  },
} as const);
