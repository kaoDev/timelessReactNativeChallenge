import { StyleSheet } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../../assets/createTimelessTheme';

const theme = useTheme<Theme>();

export default StyleSheet.create({
  card: {
    borderRadius: 12,
    marginBottom: theme.spacing?.s,
    flexDirection: 'column',
    shadowOpacity: 0.1,
  },
  iconContainer: {
    alignSelf: 'flex-end',
    marginTop:theme.spacing?.xs,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors?.surface,
    padding: theme.spacing?.xs,
    marginHorizontal:theme.spacing?.xs,
    borderRadius:theme.borderRadii?.iconBgRadius,
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
