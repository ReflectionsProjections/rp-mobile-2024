import React, { useState } from "react";
import { View, StyleSheet, ImageBackground, Text, Pressable } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { useFonts, Kufam_400Regular, Kufam_700Bold, Kufam_700Bold_Italic } from "@expo-google-fonts/kufam";
import { FontAwesome, Feather } from "@expo/vector-icons";
import CustomModal from "./CustomModal"; // Import the custom modal

import AppLoading from "expo-app-loading";
import {
  Box,
  Modal,
  ButtonText,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  Heading,
  ModalCloseButton,
  Icon,
  ModalBody,
  ModalFooter,
  Button,
  Card,
  HStack,
  Badge,
  BadgeText,
  BadgeIcon,
} from "@gluestack-ui/themed";
import Colors from "../constants/Colors";

const GPTCard = ({ name, time, location, description }) => {
  const [showModal, setShowModal] = useState(false);
  const ref = React.useRef(null);

  let [fontsLoaded] = useFonts({
    Kufam_400Regular,
    Kufam_700Bold,
    Kufam_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.card}>
      <Pressable onPress={() => setShowModal(true)} style={styles.pressable}>
        <ImageBackground
          source={require("../assets/border.png")}
          style={styles.image}
          imageStyle={styles.imageStyle}
        >
          <View style={styles.overlay}>
            <View style={styles.header}>
              <Text style={styles.title}>{name}</Text>
            </View>
            <View style={styles.info}>
              <View style={styles.infoItem}>
                <EvilIcons name="location" size={26} color={Colors.DARK_BLUE} />
                <Text style={styles.infoText}>{location}</Text>
              </View>
              <View style={styles.infoItem}>
                <EvilIcons name="clock" size={26} color={Colors.DARK_BLUE} />
                <Text style={styles.infoText}>{time}</Text>
              </View>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>10 pts</Text>
              </View>
            </View>
            <Text style={styles.description}>{description}</Text>
          </View>
        </ImageBackground>
      </Pressable>
      <CustomModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        title={name}
      >
        <Text>Time: {time}</Text>
        <Text>Location: {location}</Text>
        <Text>{description}</Text>
      </CustomModal>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    height: 140, 
    marginTop: 20, 
    alignSelf: 'center', // Center the card
  },
  pressable: {
    flex: 1, // Ensure Pressable covers the entire card
    borderRadius: 15, // Match border radius with ImageBackground
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  imageStyle: {
    borderRadius: 15,
  },
  overlay: {
    padding: 15,
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  title: {
    fontSize: 20,
    color: Colors.DARK_BLUE,
    fontFamily: "Kufam_700Bold_Italic",
  },
  info: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  infoText: {
    marginLeft: 4,
    color: Colors.DARK_BLUE,
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    marginTop: 8,
    color: Colors.DARK_BLUE,
  },
  badge: {
    backgroundColor: "#F34429",
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default GPTCard;
