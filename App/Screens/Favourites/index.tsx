import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, RefreshControl } from "react-native";

// APis
import { useAppSelector, useAppDispatch } from "../../Hooks/rtxhooks";
import { IGetFavourite } from "../../Api/getFavourites";
import { loadFavorites } from "../../Store/favouritesReducer";
import { useApi } from "../../Hooks/useApi";
import { deleteFavourite } from "../../Api/deleteFavourite";

// Components
import AppText from "../../Components/AppText";
import FailureModal from "../../Components/Modals/AppFailureModal";
import FavouritesListItem from "../../Components/FavouritesCard";
import Screen from "../../Components/Screen.tsx";

// Config
import { AppNavigatorScreenParams } from "../../Router/types";
import { colors } from "../../utils/colors";
import { styles } from "./style";

const FavouritesScreen = ({
  navigation,
}: AppNavigatorScreenParams<"favourites">) => {
  const { data, loading } = useAppSelector((state) => state.favouritesReducer);
  const { request, loading: deleteLoading } = useApi(deleteFavourite);
  const dispatch = useAppDispatch();

  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [faliure, setfaliure] = useState<boolean>(false);

  const param: IGetFavourite = {
    limit: 20,
    page: 0,
  };

  // Deletes a favourite
  async function deleteAFavoutite(arg: string) {
    const response = await request(arg);

    if (!response.ok) return setfaliure(true);
    await dispatch(loadFavorites(param));
  }

  // Implements pull to refresh
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await dispatch(loadFavorites(param));
    setRefreshing(false);
  }, [loadFavorites]);

  useEffect(() => {
    const unSubscribe = navigation.addListener("focus", async () => {
      dispatch(loadFavorites(param));
    });
    return unSubscribe;
  }, [navigation]);

  return (
    <Screen style={styles.container}>
      {(loading || deleteLoading) && (
        <ActivityIndicator animating color={colors.lightGrey} />
      )}
      <AppText style={styles.headerText} type="bold">
        Dogs I Like
      </AppText>
      <FlatList
        numColumns={2}
        data={data}
        keyExtractor={(id) => id.id.toString() + Math.random()}
        renderItem={({ item }) => (
          <FavouritesListItem
            onPress={() => deleteAFavoutite(item.id.toString())}
            image={item.image.url}
            name={item.image_id}
          />
        )}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      {faliure && (
        <FailureModal
          isActive={faliure}
          onClose={() => setfaliure(false)}
          message="Something unexpected happened"
        />
      )}
    </Screen>
  );
};

export default FavouritesScreen;
