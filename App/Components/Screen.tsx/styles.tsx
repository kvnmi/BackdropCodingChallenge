import { StyleSheet, ViewStyle } from "react-native";
import normalize from "react-native-normalize";

type Style = { contatiner: ViewStyle };

export const styles = StyleSheet.create<Style>({
  contatiner: {
    flex: 1,
    paddingHorizontal: normalize(20),
  },
});
