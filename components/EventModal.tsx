import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  ImageBackground,
  Pressable,
  Image,
} from "react-native";
import Colors from "../constants/Colors";
import EvilIcons from "@expo/vector-icons/EvilIcons";

import EventsModal from "../assets/eventsModal.svg";

const EventModal = ({ title, location, time, points, description }) => {
  return (
    <View style={styles.imageContainer}>
      <EventsModal></EventsModal>
      <View style={styles.eventDetails}>
        <Text style={styles.name}>{title}</Text>
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
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    height: 400,
    alignSelf: "center", // Center the card
  },
  imageContainer: {
    width: "100%",
  },
  eventDetails: {
    position: "absolute",
    marginLeft: 20,
    width: 300,
    marginTop: 50,
    // backgroundColor: 'green'
  },
  name: {
    fontSize: 20,
    // marginLeft: 20,
    // paddingRight: 25,
    color: "black",
    fontFamily: "Kufam_700Bold",
  },
  info: {
    flexDirection: "row",
    // backgroundColor: 'green',
    flexWrap: 'wrap'
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginRight: 8,
    // backgroundColor: 'red'
  },
  infoText: {
    color: Colors.DARK_BLUE,
    fontSize: 16,
    fontWeight: "bold",
  },
  tokenImage: {
    width: 20, // Adjust the width as needed
    height: 20, // Adjust the height as needed
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
  time: {
    fontSize: 14,
    color: "black",
    fontFamily: "Kufam_400Regular",
  },
  location: {
    color: "black",
    fontFamily: "Kufam_400Regular",
  },
  description: {
    fontSize: 14,
    color: "black",
    fontFamily: "Kufam_400Regular",
    marginTop: 10,
    paddingRight: 20,
  },
  points: {
    fontSize: 16,
    color: "black",
    fontFamily: "Kufam_700Bold",
  },
});

export default EventModal;
