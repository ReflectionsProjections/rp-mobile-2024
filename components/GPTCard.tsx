import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Dimensions,
  Image,
} from "react-native";
import SvgUri from "react-native-svg-uri";
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

const GPTCard = ({ name, time, location, description, points }) => {
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
            <Text style={styles.name} numberOfLines={1}
              ellipsizeMode="tail">{name} </Text>
            <View style={styles.info}>
              <View style={styles.infoItem}>
                <EvilIcons name="location" size={26} color={Colors.DARK_BLUE} />
                <Text style={styles.infoText}>{location}</Text>
              </View>
              <View style={styles.infoItem}>
                <EvilIcons name="clock" size={26} color={Colors.DARK_BLUE} />
                <Text style={styles.infoText}>{time}</Text>
              </View>
              {/* <View style={styles.infoItem}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{points} pts</Text>
              </View>
            </View> */}
              <View style={styles.infoItem}>
                <Image
                  source={require("../assets/token.png")}
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
    // justifyContent: 'center',
    // alignItems: 'center',
    // position: 'relative',
  },
  eventDetails: {
    position: "absolute",
    marginLeft: 15,
    marginTop: 30,
    maxWidth: Dimensions.get("window").width * 0.8,
  },
  name: {
    fontSize: 20,
    color: "black",
    fontFamily: "Kufam_700Bold",
  },
  info: {
    flexDirection: "row",
    // justifyContent: "space-evenly",
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-evenly",
    marginHorizontal: 8,
  },
  infoText: {
    // marginLeft: 4,
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
    flexWrap: "wrap",
  },
  points: {
    fontSize: 16,
    color: "black",
    fontFamily: "Kufam_700Bold",
  },
});

export default GPTCard;
