import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type RootStackParamList = {
  home: undefined;
  favourites: undefined;
};

export type AppNavigatorScreenParams<Screen extends keyof RootStackParamList> =
  BottomTabScreenProps<RootStackParamList, Screen>;
