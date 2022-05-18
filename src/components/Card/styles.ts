import { StyleSheet, ViewStyle } from "react-native";
import { colors, palette } from "../../res";

interface Styles {
  container(
    marginVertical: number | undefined,
    marginHorizontal: number | undefined
  ): ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: (marginVertical, marginHorizontal) => ({
    backgroundColor: colors.WHITE,
    borderRadius: 10,
    ...palette.shadow("card"),
    alignSelf: "center",
    marginVertical: marginVertical !== undefined ? marginVertical : 10,
    marginHorizontal: marginHorizontal !== undefined ? marginHorizontal : 20,
  }),
});

export default styles;
