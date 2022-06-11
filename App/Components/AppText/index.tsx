import React, { FC } from "react";
import { Text, TextStyle, TextProps } from "react-native";
import { styles } from "./style";

interface textProps {
  style?: TextStyle;
  type: "regular" | "bold";
}

const AppText: FC<textProps & TextProps> = ({
  children,
  type,
  style,
  ...otherProps
}) => {
  return (
    <Text
      style={[
        styles.text,
        style,
        { fontFamily: type === "regular" ? "SFProRegular" : "SFProBold" },
      ]}
      {...otherProps}
    >
      {children}
    </Text>
  );
};

export default AppText;
