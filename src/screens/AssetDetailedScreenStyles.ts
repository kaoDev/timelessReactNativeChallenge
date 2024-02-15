import { StyleSheet, Dimensions } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../assets/createTimelessTheme';

const { height } = Dimensions.get('window');
const theme = useTheme<Theme>();

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors?.surface,
  },
  iconContainer: {
    position: 'absolute',
    top: theme.spacing?.l,
    right: theme.spacing?.s,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors?.surface,
    padding: theme.spacing?.xs,
    marginLeft: theme.spacing?.xs,
    borderRadius: theme.borderRadii?.iconBgRadius,
  },
  backIcon: {
    position: 'absolute',
    top: theme.spacing?.l,
    left: theme.spacing?.s,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors?.surface,
    padding: theme.spacing?.xs,
    borderRadius: theme.borderRadii?.iconBgRadius,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  image: {
    height: height / 2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  assetImage: {
    height: '85%',
    width: '100%',
    marginTop: theme?.spacing?.xxl,
    alignSelf: 'center',
    resizeMode: 'cover',
  },
} as const);
