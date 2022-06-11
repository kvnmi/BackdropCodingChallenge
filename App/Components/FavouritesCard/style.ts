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
  footerCtn: ViewStyle;
}
const { width, fontScale } = Dimensions.get("window");
export const styles = StyleSheet.create<Styles>({
  container: {
    paddingVertical: normalize(5),
    alignItems: "center",
    width: width / 2,
  },
  text: {
    fontSize: 23 * fontScale,
  },
  image: {
    height: 150,
    width: 150,
  },
  imgContainer: {
    borderRadius: normalize(15),
    overflow: "hidden",
  },
  footerCtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "75%",
    paddingHorizontal: normalize(5),
  },
});
