import React from "react";
import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import {
  useFonts,
  PressStart2P_400Regular,
} from "@expo-google-fonts/press-start-2p";
import AppLoading from "expo-app-loading";

import ProgressBar from "../assets/progressBar.svg";

const Shop: React.FC = () => {
  let [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.description}>
          Attend events to earn points and unlock prizes!
        </Text>
        <View style={styles.pointsContainer}>
          <Text style={styles.points}>Your Points:</Text>
          <Image
            source={require("../assets/token.png")}
            style={styles.tokenImage}
          />
          <Text style={styles.points}>x{20}</Text>
        </View>
        <View style={styles.photoContainer}>
          <View style={styles.leftSide}>
            <View style={styles.photoWithPoints}>
              <Image
                source={{ uri: "https://via.placeholder.com/150" }}
                style={styles.smallPhoto}
              />
              <Image
                source={require("../assets/token.png")}
                style={styles.tokenImage}
              />
              <Text style={styles.points}>x{50}</Text>
            </View>
            <View style={styles.photoWithPoints}>
              <Image
                source={{ uri: "https://via.placeholder.com/150" }}
                style={styles.smallPhoto}
              />
              <Image
                source={require("../assets/token.png")}
                style={styles.tokenImage}
              />
              <Text style={styles.points}>x{35}</Text>
            </View>
            <View style={styles.photoWithPoints}>
              <Image
                source={{ uri: "https://via.placeholder.com/150" }}
                style={styles.smallPhoto}
              />
              <Image
                source={require("../assets/token.png")}
                style={styles.tokenImage}
              />
              <Text style={styles.points}>x{25}</Text>
            </View>
          </View>
          <View style={styles.progressBarContainer}>
            <ProgressBar
              style={styles.progressBar}
              preserveAspectRatio="none"
              height={450}
              width={100}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.DARK_BLUE,
  },
  container: {
    flex: 1,
    margin: 20,
  },
  description: {
    fontSize: 15,
    marginBottom: 10,
    fontFamily: "PressStart2P_400Regular",
    color: Colors.YELLOW,
  },
  pointsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  points: {
    fontSize: 15,
    marginRight: 10,
    fontFamily: "PressStart2P_400Regular",
    color: Colors.YELLOW,
  },
  tokenImage: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  photoContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftSide: {
    flex: 1,
    justifyContent: "space-between",
    marginLeft: 10
  },
  photoWithPoints: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  smallPhoto: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  progressBarContainer: {
    flex: 1,
    alignItems: 'flex-end',
    // paddingHorizontal: 10, // Add padding if needed
  },
  progressBar: {
    flex: 1,
    width: "100%",
  },
});

export default Shop;
