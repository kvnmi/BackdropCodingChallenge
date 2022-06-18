import React, { FC } from "react";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { ViewStyle } from "react-native";

interface screenProp {
  style?: ViewStyle;
}

const Screen: FC<screenProp> = ({ children, style }) => {
  return (
    <SafeAreaView edges={["top"]} style={[styles.contatiner, style]}>
      {children}
    </SafeAreaView>
  );
};

export default Screen;
