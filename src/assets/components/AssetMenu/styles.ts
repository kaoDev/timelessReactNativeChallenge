import { StyleSheet, ViewStyle } from "react-native";
import createTimelessTheme from "../../../../assets/createTimelessTheme";
import colors from "../../../../assets/colors";

interface Styles {
  container: ViewStyle;
  borderBottom: (isActive: boolean) => any;
  text: (isActive: boolean) => any;
}

const theme = createTimelessTheme();

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: theme.spacing.s,
    backgroundColor: colors.white,
  },
  borderBottom: (isActive: boolean) => ({
    backgroundColor: isActive ? theme.colors.active : "transparent",
    height: isActive ? 2 : 0,
    width: isActive ? theme.iconSize.l : 0,
  }),
  text: (isActive: boolean) => ({
    ...theme.textVariants.titleTopNav,
    color: isActive ? theme.colors.active : theme.colors.tlLightGray,
  }),
});

export default styles;
