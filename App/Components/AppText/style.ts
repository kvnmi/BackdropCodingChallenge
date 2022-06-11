import { StyleSheet, TextStyle } from "react-native";
import normalize from "react-native-normalize";

type textSytle = {
  text: TextStyle;
};

export const styles = StyleSheet.create<textSytle>({
  text: {
    fontSize: normalize(16),
  },
});
