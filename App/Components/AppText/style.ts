import { StyleSheet, TextStyle, Dimensions } from "react-native";
import normalize from "react-native-normalize";
import { colors } from "../../utils/colors";

type textSytle = {
  text: TextStyle;
};

const { fontScale } = Dimensions.get("window");

export const styles = StyleSheet.create<textSytle>({
  text: {
    fontSize: 15 * fontScale,
    color: colors.primary,
  },
});
