import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";
import EventDaysNavigator from "../navigation/EventDaysNavigator";
import Colors from "../constants/Colors";
import { FontAwesome5 } from "@expo/vector-icons"; // assuming you're using expo icons

const Events: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.yellowLine}>
        <Image
          source={require("../assets/windowButtons.png")}
          style={styles.windowButtonsImage}
        />
      </View>
      <Image
        source={require("../assets/eventsBanner.png")} // Update the path to your image
        style={styles.bannerImage}
      />
      <EventDaysNavigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.DARK_BLUE,
  },
  yellowLine: {
    flexDirection: "row",
    justifyContent: "flex-end", // Aligns image to the right
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: Colors.YELLOW,
    height: 20
  },
  bannerImage: {
    alignSelf: "center",
    marginTop: 10,
  },
  windowButtonsImage: {
  }
});

export default Events;
