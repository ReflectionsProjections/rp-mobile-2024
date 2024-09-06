import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Dimensions,
  Image,
} from "react-native";
import {
  useFonts,
  Kufam_400Regular,
  Kufam_700Bold,
  Kufam_700Bold_Italic,
} from "@expo-google-fonts/kufam";
import CustomModal from "./CustomModal"; // Import the custom modal

import AppLoading from "expo-app-loading";
import Colors from "../constants/Colors";

import EvilIcons from "@expo/vector-icons/EvilIcons";

import EventsCard from "../assets/eventsCard.svg";
// import Token from "../assets/token.svg"

const EventCard = ({ name, time, location, description, points }) => {
  const [showModal, setShowModal] = useState(false);

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
        <View style={styles.imageContainer}>
          <EventsCard></EventsCard>
          <View style={styles.eventDetails}>
            <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
              {name}{" "}
            </Text>
            <View style={styles.info}>
              <View style={styles.infoItem}>
                <EvilIcons name="location" size={26} color={Colors.DARK_BLUE} />
                <Text style={styles.infoText}>{location}</Text>
              </View>
              <View style={styles.infoItem}>
                <EvilIcons name="clock" size={26} color={Colors.DARK_BLUE} />
                <Text style={styles.infoText}>{time}</Text>
              </View>
              <View style={styles.infoItem}>
                <Image
                  source={require("../assets/pixel.png")}
                  style={styles.tokenImage}
                ></Image>
                <Text style={styles.infoText}> x{points}</Text>
              </View>
            </View>
            <Text
              style={styles.description}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {description}
            </Text>
          </View>
        </View>
      </Pressable>
      <CustomModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        title={name}
        location={location}
        time={time}
        points={points}
        description={description}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    marginBottom: 30,
  },
  pressable: {
    flex: 1,
    alignSelf: "center",
  },
  imageContainer: {
    width: "100%",
    height: 120,
  },
  eventDetails: {
    position: "absolute",
    marginLeft: 15,
    marginTop: 30,
    maxWidth: 320,
  },
  name: {
    fontSize: 20,
    color: "black",
    fontFamily: "Kufam_700Bold",
  },
  info: {
    flexDirection: "row",
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 8,
  },
  infoText: {
    color: Colors.DARK_BLUE,
    fontSize: 16,
    fontWeight: "bold",
  },
  tokenImage: {
    width: 20,
    height: 20,
  },
  description: {
    fontSize: 14,
    color: "black",
    fontFamily: "Kufam_400Regular",
    marginTop: 10,
    flexWrap: "wrap",
  },
});

export default EventCard;
