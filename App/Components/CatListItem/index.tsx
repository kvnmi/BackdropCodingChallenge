import React from "react";
import { Image, View } from "react-native";
import AppText from "../AppText";
import { styles } from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import normalize from "react-native-normalize";

const CatListItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={require("../../../assets/cat.jpg")}
          style={styles.image}
        />
      </View>
      <AppText style={styles.text}>Firstcat</AppText>
      <MaterialCommunityIcons
        name="heart"
        size={normalize(28)}
        color="magenta"
      />
    </View>
  );
};

export default CatListItem;
