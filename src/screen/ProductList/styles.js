import spacing from '../../../assets/spacing';

const { StyleSheet } = require('react-native');
const { default: colors } = require('../../../assets/colors');

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: spacing.m,
    paddingHorizontal: spacing.s,
  },
});
export { styles };
