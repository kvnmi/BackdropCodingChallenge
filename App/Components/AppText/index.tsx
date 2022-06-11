import React, { FC } from "react";
import { Text, TextStyle, TextProps } from "react-native";
import { styles } from "./style";

interface textProps {
  style?: TextStyle;
}

const AppText: FC<textProps & TextProps> = ({
  children,
  style,
  ...otherProps
}) => {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;
