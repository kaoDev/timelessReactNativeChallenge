import { StyleSheet } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../assets/createTimelessTheme';

const theme = useTheme<Theme>();

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors?.surface,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  itemContainer: {
    marginHorizontal: theme.spacing?.xs,
    marginRight: theme.spacing?.s,
    marginBottom: theme.spacing?.s,
  },
  list: {
    borderBottomColor: theme.colors?.disabledDarkOutline,
    marginTop: theme.spacing?.xxl,
    paddingHorizontal: theme.spacing?.s,
    width: '100%',
    borderBottomWidth: 1,
  },
  itemList: {
    marginTop: theme.spacing?.s,
  },
  itemListContainer: {
    width: '100%',
    paddingHorizontal: theme.spacing?.m,
  },
} as const);
