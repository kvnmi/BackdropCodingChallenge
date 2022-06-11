import { Dimensions, StyleSheet, TextStyle, ViewStyle } from "react-native";
import normalize from "react-native-normalize";

interface Styles {
  container: ViewStyle;
  headerText: TextStyle;
}
const { height, fontScale } = Dimensions.get("window");

export const styles = StyleSheet.create<Styles>({
  container: {
    paddingTop: height / 50,
  },
  headerText: {
    fontWeight: "500",
    fontSize: 23 * fontScale,
    marginBottom: normalize(15),
  },
});
