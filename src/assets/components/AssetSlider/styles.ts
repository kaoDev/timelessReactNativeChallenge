import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import createTimelessTheme from "../../../../assets/createTimelessTheme";
import colors from "../../../../assets/colors";

const theme = createTimelessTheme();

const HEIGHT = 400;

interface Styles {
  container: ViewStyle;
  image: ImageStyle;
  slide: ViewStyle;
  button: TextStyle;
  pagination: ViewStyle;
  dotStyle: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    width: "100%",
    height: HEIGHT,
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    height: HEIGHT,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: HEIGHT,
  },
  button: {
    color: colors.white,
    fontSize: 48,
  },
  pagination: {},
  dotStyle: {
    width: theme.spacing.xs,
    height: theme.spacing.xs,
    borderRadius: theme.spacing.xs,
  },
});

export default styles;
