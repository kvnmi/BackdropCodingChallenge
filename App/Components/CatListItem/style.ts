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
  text: TextStyle;
  image: ImageStyle;
  imgContainer: ViewStyle;
}
const { height, fontScale } = Dimensions.get("window");
export const styles = StyleSheet.create<Styles>({
  container: {
    marginVertical: normalize(8),
    flexDirection: "row",
    paddingVertical: normalize(5),
    alignItems: "center",
  },
  text: {
    fontSize: 23 * fontScale,
    flex: 1,
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
