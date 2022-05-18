import { StyleSheet, ViewStyle } from "react-native";
import colors from "../../../../assets/colors";

interface Styles {
  loading: ViewStyle;
  flatList: ViewStyle;
  contentLoaderContainer: ViewStyle;
  separator: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  loading: {
    alignItems: "center",
  },
  flatList: {
    backgroundColor: colors.white,
  },
  contentLoaderContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  separator: {
    marginVertical: 4,
  },
});

export default styles;
