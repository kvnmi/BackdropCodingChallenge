import {
  Dimensions,
  ImageStyle,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from "react-native";
import normalize from "react-native-normalize";

interface Styles {
  container: ViewStyle;
  image: ImageStyle;
  imgContainer: ViewStyle;
  text: TextStyle;
}
const { fontScale } = Dimensions.get("window");
export const styles = StyleSheet.create<Styles>({
  container: {
    alignItems: "center",
    flexDirection: "row",
    marginVertical: normalize(8),
    paddingVertical: normalize(5),
  },
  text: {
    flex: 1,
    fontSize: 23 * fontScale,
    paddingLeft: normalize(15),
  },
  image: {
    height: 40,
    width: 40,
  },
  imgContainer: {
    borderRadius: normalize(10),
    overflow: "hidden",
  },
});
