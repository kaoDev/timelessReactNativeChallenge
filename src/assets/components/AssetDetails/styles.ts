import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import colors from "../../../../assets/colors";
import createTimelessTheme from "../../../../assets/createTimelessTheme";

interface Styles {
  container: ViewStyle;
  titleRow: ViewStyle;
  title: TextStyle;
  assetStatus: TextStyle;
  row: ViewStyle;
  nameValueContainer: ViewStyle;
  name: TextStyle;
  value: TextStyle;
  separator: ViewStyle;
}

const theme = createTimelessTheme();

const styles = StyleSheet.create<Styles>({
  container: {
    padding: theme.spacing.m,
    backgroundColor: colors.white,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: theme.spacing.xs,
  },
  title: {
    ...theme.textVariants.h3,
  },
  assetStatus: {
    ...theme.textVariants.titleMd,
    color: theme.colors.active,
  },
  row: {},
  nameValueContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: theme.spacing.xs,
  },
  name: {
    ...theme.textVariants.titleMd,
    color: theme.colors.typographyDisabled,
  },
  value: {
    ...theme.textVariants.titleMd,
    color: theme.colors.tlDarkGray,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#eeeeee",
  },
});

export default styles;
