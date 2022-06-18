import React, { FC } from "react";
import { Image, Pressable, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import normalize from "react-native-normalize";

import AppText from "../AppText";
import { colors } from "../../utils/colors";
import { styles } from "./style";

interface Props {
  image: string;
  name: string;
  onPress: () => void;
}

const FavouritesListItem: FC<Props> = ({ onPress, image, name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.footerCtn}>
        <AppText style={styles.text} type="regular">
          {name}
        </AppText>
        <Pressable onPress={onPress}>
          <MaterialCommunityIcons
            name="heart"
            size={normalize(20)}
            color={colors.likeIcon}
            onPress={onPress}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default FavouritesListItem;
