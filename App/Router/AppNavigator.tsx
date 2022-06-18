import { FavouritesScreen, HomeScreen } from "../Screens/index";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "./types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import normalize from "react-native-normalize";

const Tab = createBottomTabNavigator<RootStackParamList>();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarLabelStyle: {
        textTransform: "capitalize",
        fontSize: normalize(14),
      },
    }}
  >
    <Tab.Screen
      name="home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            size={normalize(size)}
            color={color}
            name="dog"
          />
        ),
        title: "All Dogs",
      }}
    />
    <Tab.Screen
      name="favourites"
      component={FavouritesScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            size={normalize(size)}
            color={color}
            name="heart"
          />
        ),
        title: "Dogs I Like",
      }}
    />
  </Tab.Navigator>
);

export default TabNavigator;
