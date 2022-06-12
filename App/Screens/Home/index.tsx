import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { FlatList, ActivityIndicator, Button } from "react-native";
import AppText from "../../Components/AppText";
import DogListItem from "../../Components/DogListItem";
import Screen from "../../Components/Screen.tsx";
import { styles } from "./style";
import { getPetListings, IParams } from "../../Api/petList";
import { IPetListings } from "../../Interfaces/ApiResponses";
import { colors } from "../../utils/colors";
import { useApi } from "../../Hooks/useApi";
import { addFavourite, IFavParam } from "../../Api/addFavourites";
import { useAppSelector, useAppDispatch } from "../../Hooks/rtxhooks";

const HomeScreen = () => {
  const [number, setNumber] = useState<number>(0);
  const [dogs, setDogs] = useState<IPetListings[]>([]);
  const { loading, request } = useApi(getPetListings);
  const { data } = useAppSelector((state) => state.favouritesReducer);
  const { request: addNewFavourite, loading: favLoading } =
    useApi(addFavourite);

  const status: string[] = [];
  data.forEach((i) => status.push(i.image_id));

  const param: IParams = {
    limit: 15,
    page: number,
    order: "ASC",
  };

  async function getListings() {
    console.log("Getting Dogs");
    const response = await request(param);
    if (!response.ok) return console.log(response.data.message);
    console.log("Got Dogs");
    return setDogs([...dogs, ...response.data]);
  }

  async function addToFavourites({ image_id, sub_id }: IFavParam) {
    const data: IFavParam = {
      image_id,
      sub_id,
    };

    console.log("adding to fav", data);
    const response = await addNewFavourite(data);
    if (!response.data) return console.log(response.data.message);
    console.log("added to fav");

    console.log(response.data);
  }

  async function handeEnd() {
    setNumber(number + 1);
    await getListings();
  }

  useEffect(() => {
    console.log(status);
    console.log(data);

    getListings();
  }, []);
  return (
    <Screen style={styles.container}>
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
      <Button title="" onPress={() => console.log(data)} />
      <StatusBar style="auto" />
    </Screen>
  );
};

export default HomeScreen;
