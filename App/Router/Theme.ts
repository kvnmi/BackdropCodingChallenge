import { DefaultTheme } from "@react-navigation/native";
import { colors } from "../utils/colors";

const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: "white",
  },
};

export default NavigationTheme;
