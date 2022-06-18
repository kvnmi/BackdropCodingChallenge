import React, { FC } from "react";
import { Image, View, StyleSheet } from "react-native";
import ReactNativeModal from "react-native-modal";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import normalize from "react-native-normalize";
import AppText from "../AppText";

interface Props {
  isActive: boolean;
  onClose: () => void;
  message: string;
}

const index: FC<Props> = ({ isActive, onClose, message }) => {
  return (
    <View style={{ flex: 1 }}>
      <ReactNativeModal
        isVisible={isActive}
        style={{ margin: 0, justifyContent: "flex-end" }}
        onSwipeComplete={onClose}
        swipeDirection={["down"]}
      >
        <View style={styles.screen}>
          <MaterialCommunityIcons
            name="close"
            style={styles.icon}
            size={normalize(20)}
            onPress={onClose}
          />
          <View>
            <Image
              source={require("../../../assets/failureIcon.png")}
              style={styles.image}
            />
          </View>
          <AppText style={styles.about} type={"regular"}>
            {message}
          </AppText>
        </View>
      </ReactNativeModal>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: normalize(20),
    borderTopRightRadius: normalize(25),
    borderTopLeftRadius: normalize(25),
    backgroundColor: "white",
  },
  image: {
    width: normalize(65, "width"),
    height: normalize(65, "height"),
    alignSelf: "center",
    resizeMode: "contain",
    marginBottom: normalize(10),
  },
  about: {
    fontSize: normalize(16, "height"),
    textAlign: "center",
  },
  icon: {
    alignSelf: "flex-end",
    padding: normalize(10),
    borderRadius: normalize(10),
    backgroundColor: "#E2E8FB",
  },
});

export default index;
