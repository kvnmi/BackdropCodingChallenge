import React, { useEffect } from "react";
import { Button, FlatList } from "react-native";
import AppText from "../../Components/AppText";
import FavouritesListItem from "../../Components/FavouritesCard";
import Screen from "../../Components/Screen.tsx";
import { styles } from "./style";
import { IGetFavourite } from "../../Api/getFavourites";
import { useAppSelector, useAppDispatch } from "../../Hooks/rtxhooks";
import { loadFavorites, loadMore } from "../../Store/favouritesReducer";
import { AppNavigatorScreenParams } from "../../Router/types";

const FavouritesScreen = ({
  navigation,
}: AppNavigatorScreenParams<"favourites">) => {
  const { data, error, loading, errorMessage } = useAppSelector(
    (state) => state.favouritesReducer
  );
  const dispatch = useAppDispatch();

  const param: IGetFavourite = {
    limit: 20,
    page: 0,
  };

  useEffect(() => {
    const unSubscribe = navigation.addListener("focus", async () => {
      dispatch(loadFavorites(param));
    });
    return unSubscribe;
  }, [navigation]);
  return (
    <Screen style={styles.container}>
      <AppText style={styles.headerText} type="bold">
        Dogs I Like
      </AppText>
      <FlatList
        numColumns={2}
        data={data}
        keyExtractor={(id) => id.id.toString() + Math.random()}
        renderItem={({ item }) => (
          <FavouritesListItem
            onPress={() => ""}
            image={item.image.url}
            name={item.image_id}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
};

export default FavouritesScreen;
