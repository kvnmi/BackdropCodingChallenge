import React, { FC } from "react";
import { Image, Pressable, View } from "react-native";
import AppText from "../AppText";
import { styles } from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import normalize from "react-native-normalize";
import { colors } from "../../utils/colors";

interface Props {
  onPress: () => void;
}

const FavouritesListItem: FC<Props> = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={require("../../../assets/cat.jpg")}
          style={styles.image}
        />
      </View>
      <View style={styles.footerCtn}>
        <AppText style={styles.text} type="regular">
          Firstcat
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
