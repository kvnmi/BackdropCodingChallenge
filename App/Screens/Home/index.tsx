import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { FlatList, ActivityIndicator } from "react-native";

// API's
import { getPetListings, IGetListings } from "../../Api/petList";
import { IGetFavourite } from "../../Api/getFavourites";
import { IPetListings } from "../../Interfaces/ApiResponses";
import { addFavourite, IFavParam } from "../../Api/addFavourites";
import { useAppSelector, useAppDispatch } from "../../Hooks/rtxhooks";
import { loadFavorites } from "../../Store/favouritesReducer";
import { useApi } from "../../Hooks/useApi";

// Components
import AppText from "../../Components/AppText";
import DogListItem from "../../Components/DogListItem";
import Screen from "../../Components/Screen.tsx";
import FailureModal from "../../Components/Modals/AppFailureModal";

// Config
import { colors } from "../../utils/colors";
import { styles } from "./style";

const HomeScreen = () => {
  const { data, loading: getfavLoading } = useAppSelector(
    (state) => state.favouritesReducer
  );

  const { request: addNewFavourite, loading: postfavLoading } =
    useApi(addFavourite);
  const dispatch = useAppDispatch();

  const [number, setNumber] = useState<number>(0);
  const [dogs, setDogs] = useState<IPetListings[]>([]);
  const { loading, request } = useApi(getPetListings);
  const [faliure, setfaliure] = useState<boolean>(false);

  const status: string[] = [];
  data.forEach((i) => status.push(i.image_id));

  const getFavouritesParams: IGetFavourite = {
    limit: 20,
    page: 0,
  };
  const param: IGetListings = {
    limit: 15,
    page: number,
    order: "ASC",
  };

  // Gets dogs from the dog api
  async function getListings() {
    console.log("Getting Dogs");
    const response = await request(param);
    if (!response.ok) return setfaliure(true);
    console.log("Got Dogs");
    return setDogs([...dogs, ...response.data]);
  }
  // Loads the list of dogs lazily
  async function handeEnd() {
    setNumber(number + 1);
    await getListings();
  }

  // Adds a dog to favourite
  async function addToFavourites({ image_id, sub_id }: IFavParam) {
    const data: IFavParam = {
      image_id,
      sub_id,
    };

    console.log("adding to fav", data);
    const response = await addNewFavourite(data);
    if (!response.data) return setfaliure(true);

    await dispatch(loadFavorites(getFavouritesParams));
    console.log("added to fav");
  }

  useEffect(() => {
    getListings();
  }, []);

  return (
    <Screen style={styles.container}>
      {(getfavLoading || postfavLoading) && (
        <ActivityIndicator animating color={colors.primary} />
      )}
      <AppText style={styles.headerText} type="bold">
        All Dogs
      </AppText>
      <FlatList
        data={dogs}
        keyExtractor={(item) => `${item.id} ${Math.random()}`}
        renderItem={({ item }) => (
          <DogListItem
            name={item.breeds[0].name}
            image={item.url}
            onPress={() =>
              addToFavourites({
                image_id: item.id,
                sub_id: "Tomiwa- ",
              })
            }
            liked={status.includes(item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.1}
        onEndReached={handeEnd}
        ListFooterComponent={
          loading ? (
            <ActivityIndicator animating color={colors.primary} />
          ) : null
        }
      />
      <StatusBar style="auto" />
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

export default HomeScreen;
