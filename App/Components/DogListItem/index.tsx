import React, { FC } from "react";
import { Image, View } from "react-native";
import AppText from "../AppText";
import { styles } from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import normalize from "react-native-normalize";
import { colors } from "../../utils/colors";

interface Props {
  image: string;
  name: string;
  onPress: () => void;
  liked?: boolean;
}

const DogListItem: FC<Props> = ({ image, name, onPress, liked = false }) => {
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
        name={liked ? "heart" : "heart-outline"}
        size={normalize(25)}
        color={liked ? colors.likeIcon : colors.lightGrey}
        onPress={onPress}
      />
    </View>
  );
};

export default DogListItem;
