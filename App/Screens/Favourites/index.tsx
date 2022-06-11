import React from "react";
import { FlatList } from "react-native";
import AppText from "../../Components/AppText";
import FavouritesListItem from "../../Components/FavouritesCard";
import Screen from "../../Components/Screen.tsx";
import { styles } from "./style";

const FavouritesScreen = () => {
  const data = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
    { id: "9" },
    { id: "19" },
    { id: "11" },
    { id: "12" },
  ];
  return (
    <Screen style={styles.container}>
      <AppText style={styles.headerText} type="bold">
        Dogs I Like
      </AppText>
      <FlatList
        numColumns={2}
        data={data}
        keyExtractor={(id) => id.id}
        renderItem={() => <FavouritesListItem />}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
};

export default FavouritesScreen;
