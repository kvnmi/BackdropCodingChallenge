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
  footerCtn: ViewStyle;
  image: ImageStyle;
  imgContainer: ViewStyle;
  text: TextStyle;
}
const { height, fontScale } = Dimensions.get("window");

export const styles = StyleSheet.create<Styles>({
  container: {
    alignItems: "center",
    flex: 1,
    marginVertical: normalize(10),
  },
  text: {
    flex: 1,
    fontSize: 25 * fontScale,
  },
  image: {
    height: height / 5,
    width: height / 5,
  },
  imgContainer: {
    borderRadius: normalize(15),
    marginBottom: normalize(10),
    overflow: "hidden",
  },
  footerCtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: normalize(20),
  },
});
