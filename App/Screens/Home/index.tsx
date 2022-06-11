import { StatusBar } from "expo-status-bar";
import React from "react";
import AppText from "../../Components/AppText";
import CatListItem from "../../Components/CatListItem";
import FavouritesListItem from "../../Components/FavouritesCard";
import Screen from "../../Components/Screen.tsx";
import { styles } from "./style";

const HomeScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppText style={styles.headerText}>All Cats</AppText>
      <CatListItem></CatListItem>
      <CatListItem></CatListItem>
      <FavouritesListItem />
      <StatusBar style="auto" />
    </Screen>
  );
};

export default HomeScreen;
