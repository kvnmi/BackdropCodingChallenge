import React, { FC } from "react";
import { Image, View } from "react-native";
import AppText from "../AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import normalize from "react-native-normalize";

import { colors } from "../../utils/colors";
import { styles } from "./style";

interface Props {
  image: string;
  liked?: boolean;
  status?: boolean;
  name: string;
  onPress: () => void;
}

const DogListItem: FC<Props> = ({
  image,
  name,
  onPress,
  liked = false,
  status,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <AppText
        style={styles.text}
        type="regular"
        onPress={() => console.log(status)}
      >
        {name}
      </AppText>
      <MaterialCommunityIcons
        name={liked || status ? "heart" : "heart-outline"}
        size={normalize(25)}
        color={liked || status ? colors.likeIcon : colors.lightGrey}
        onPress={onPress}
      />
    </View>
  );
};

export default DogListItem;
