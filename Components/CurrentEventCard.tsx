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

// import AppLoading from "expo-app-loading";
import Colors from "../constants/Colors";

import {formatTime} from "../navigation/DayEvent";

import EvilIcons from "@expo/vector-icons/EvilIcons";

import OngoingEventCard from "../assets/currentEventCard.svg";
import NextEventCard from "../assets/nextEventCard.svg";

const CurrentEventCard = ({
  name,
  startTime,
  endTime,
  location,
  description,
  points,
}) => {
  const [showModal, setShowModal] = useState(false);

  let [fontsLoaded] = useFonts({
    Kufam_400Regular,
    Kufam_700Bold,
    Kufam_700Bold_Italic,
  });

  //   if (!fontsLoaded) {
  //     return <AppLoading />;
  //   }

  // Get the current time
  const currentTime = new Date();

  // Convert startTime and endTime to Date objects
  const start = new Date(startTime);
  const end = new Date(endTime);

//   console.log("CURRENT", currentTime);
//   console.log("START", start);
//   console.log("END", end);
  // Check if current time is within the event's duration
  const isOngoing = currentTime >= start && currentTime <= end;

  return (
    <View style={styles.card}>
      <Pressable onPress={() => setShowModal(true)} style={styles.pressable}>
        <View style={styles.imageContainer}>
          {isOngoing ? <OngoingEventCard /> : <NextEventCard />}
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
                <Text style={styles.infoText}>{formatTime(start)}</Text>
              </View>
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
        time={formatTime(start)}
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
    marginTop: 60,
    maxWidth: 320,
    // backgroundColor: 'red'
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

export default CurrentEventCard;
