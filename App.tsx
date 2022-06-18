import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./App/Router/AppNavigator";
import NavigationTheme from "./App/Router/Theme";
import { Provider } from "react-redux";
import { persistor, store } from "./App/Store/index_store";
import { useFonts } from "expo-font";
import { PersistGate } from "redux-persist/es/integration/react";

export default function App() {
  const [loaded] = useFonts({
    SFProRegular: require("./assets/fonts/SourceSerifPro-Regular.ttf"),
    SFProBold: require("./assets/fonts/SourceSerifPro-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer theme={NavigationTheme}>
          <AppNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
