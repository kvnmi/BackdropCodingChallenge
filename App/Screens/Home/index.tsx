import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { FlatList, ActivityIndicator } from "react-native";
import AppText from "../../Components/AppText";
import DogListItem from "../../Components/DogListItem";
import Screen from "../../Components/Screen.tsx";
import { styles } from "./style";
import { getPetListings, IParams } from "../../Api/petList";
import { IPetListings } from "../../Interfaces/ApiResponses";
import { colors } from "../../utils/colors";

const HomeScreen = () => {
  const [number, setNumber] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [dogs, setDogs] = useState<IPetListings[]>([]);
  const param: IParams = {
    limit: 15,
    page: number,
    order: "ASC",
  };
  async function getListings() {
    setLoading(true);
    console.log("Getting Dogs");
    const response = await getPetListings(param);
    if (!response.ok) return console.log(response.data.message);
    console.log("Got Dogs");
    setLoading(false);
    return setDogs([...dogs, ...response.data]);
  }

  async function handeEnd() {
    setNumber(number + 1);
    await getListings();
  }

  useEffect(() => {
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
            onPress={() => console.log(item)}
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
    </Screen>
  );
};

export default HomeScreen;
