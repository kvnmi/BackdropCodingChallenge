import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

import favouritesReducer from "./favouritesReducer";
const rootReducer = combineReducers({
  favouritesReducer: favouritesReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["favouritesReducer"],
  version: 1,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export { persistedReducer };
