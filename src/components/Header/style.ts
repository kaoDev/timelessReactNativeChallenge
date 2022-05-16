import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import createTimelessTheme from "../../../assets/createTimelessTheme";
import colors from "../../../assets/colors";

interface Styles {
  container: ViewStyle;
  bellShareContainer: ViewStyle;
  iconView: ViewStyle;
  icon: TextStyle;
  title: TextStyle;
  model: TextStyle;
}

const theme = createTimelessTheme();

const styles = StyleSheet.create<Styles>({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing.s,
    backgroundColor: colors.white,
  },
  bellShareContainer: {
    flexDirection: "row",
    width: 70,
    justifyContent: "space-between",
  },
  iconView: {
    justifyContent: "center",
    alignItems: "center",
    width: theme.iconSize.l,
    height: "100%",
  },
  icon: {
    width: theme.iconSize.m,
    height: theme.iconSize.m,
  },
  title: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    ...theme.textVariants.h1,
    paddingTop: theme.spacing.s,
    paddingHorizontal: theme.spacing.s,
    backgroundColor: colors.white,
  },
  model: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    ...theme.textVariants.titleMd,
    color: theme.colors.tlGray,
    paddingHorizontal: theme.spacing.s,
    paddingVertical: theme.spacing.xs,
    paddingBottom: theme.spacing.m,
    backgroundColor: colors.white,
  },
});

export default styles;
