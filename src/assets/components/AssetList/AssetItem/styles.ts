import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import createTimelessTheme from "../../../../../assets/createTimelessTheme";
import colors from "../../../../../assets/colors";

interface Styles {
  container: (backgroundColor: string) => ViewStyle;
  emptyView: ViewStyle;
  imageBackground: ViewStyle;
  imageStyle: ViewStyle;
  header: ViewStyle;
  label: TextStyle;
  model: TextStyle;
  bellView: ViewStyle;
  bell: ImageStyle;
  banderol: ViewStyle;
  banderolText: TextStyle;
}

const theme = createTimelessTheme();

const styles = StyleSheet.create<Styles>({
  container: backgroundColor => ({
    backgroundColor,
    borderRadius: 10,
  }),
  emptyView: {
    height: 20,
  },
  imageBackground: {
    width: "100%",
    aspectRatio: 1,
    justifyContent: "flex-start",
  },
  imageStyle: {},
  header: {
    position: "absolute",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    alignSelf: "center",
    paddingVertical: theme.spacing.xs,
    ...theme.textVariants.titleMd,
  },
  model: {
    alignSelf: "center",
    paddingVertical: theme.spacing.xxs,
    paddingBottom: theme.spacing.l,
    ...theme.textVariants.titleMd,
    color: theme.colors.tlLightGray,
  },
  bellView: {
    marginTop: theme.spacing.s,
    marginEnd: theme.spacing.s,
    borderRadius: theme.iconSize.s,
    backgroundColor: colors.white,
    padding: 10,
  },
  bell: {
    width: theme.iconSize.s,
    height: theme.iconSize.s,
  },
  banderol: {
    marginTop: theme.spacing.s,
    backgroundColor: theme.colors.tlGray,
    paddingVertical: 5,
    paddingStart: 15,
    paddingEnd: 5,
    borderTopEndRadius: 5,
    borderBottomEndRadius: 5,
    height: 30,
  },
  banderolText: {
    ...theme.textVariants.label,
    color: colors.white,
  },
});

export default styles;
