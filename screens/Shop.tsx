import React, { useEffect, useState } from "react";
import { RootState } from "../redux/store";
import { useAppSelector } from "../redux/hooks";
import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import {
  useFonts,
  PressStart2P_400Regular,
} from "@expo-google-fonts/press-start-2p";
import AppLoading from "expo-app-loading";

import PrizeSVG from "../Components/PrizeSVG";

import VerticalProgressBar from "../Components/VerticalProgressBar";
import { getPoints } from "../api/getPoints";

const Shop: React.FC = () => {
  const [userPoints, setUserPoints] = useState(0); // Initialize points to 0
  const token = useAppSelector((state: RootState) => state.token);
  let [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
  });

  useEffect(() => {
    const fetchUserPoints = async () => {
      try {
        const points = await getPoints(token);
        setUserPoints(points.points);
      } catch (error) {
        console.error("error fetching points for user:", error);
      }
    };
    fetchUserPoints(); // Fetch points when component mounts
  }, [token]); // Empty dependency array means this effect runs once on mount

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  console.log(require("../assets/pixel.png"))

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.description}>
          Attend events to earn points and unlock prizes!
        </Text>
        <View style={styles.pointsContainer}>
          <Text style={styles.points}>Your Points:</Text>
          <Image
            source={require("../assets/pixel.png")}
            style={styles.tokenImage}
          />
          <Text style={styles.myPoints}>x{userPoints}</Text>
        </View>
        <View style={styles.photoContainer}>
          <View style={styles.leftSide}>
            <View style={styles.photoWithPoints}>
              <PrizeSVG
                prizeNum={3}
                attendeePoints={userPoints}
                token={token}
              />
              <Image
                source={require("../assets/pixel.png")}
                style={styles.tokenImage}
              />
              <Text style={styles.points}>x{50}</Text>
            </View>
            <View style={styles.photoWithPoints}>
              <PrizeSVG
                prizeNum={2}
                attendeePoints={userPoints}
                token={token}
              />
              <Image
                source={require("../assets/pixel.png")}
                style={styles.tokenImage}
              />
              <Text style={styles.points}>x{35}</Text>
            </View>
            <View style={styles.photoWithPoints}>
              <PrizeSVG
                prizeNum={1}
                attendeePoints={userPoints}
                token={token}
              />
              <Image
                source={require("../assets/pixel.png")}
                style={styles.tokenImage}
              />
              <Text style={styles.points}>x{25}</Text>
            </View>
          </View>
          <View style={styles.progressBarContainer}>
            <VerticalProgressBar userPoints={userPoints} />
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
    marginBottom: 20,
    fontFamily: "PressStart2P_400Regular",
    color: Colors.WHITE,
  },
  pointsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  points: {
    fontSize: 17,
    marginRight: 10,
    fontFamily: "PressStart2P_400Regular",
    color: Colors.WHITE,
  },
  myPoints: {
    fontSize: 30,
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
    // backgroundColor: 'green',
  },
  leftSide: {
    flex: 1, // Take up the remaining space
    justifyContent: "space-around",
    // marginLeft: 10,
    // backgroundColor: 'blue',
  },
  photoWithPoints: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    // backgroundColor: 'green'
  },
  smallPhoto: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  progressBarContainer: {
    width: 30, // Width matches the progress bar
    alignItems: "flex-end",
    justifyContent: "center",
    marginVertical: 50,
    marginRight: 20,
    // backgroundColor: 'red',
  },
  progressBar: {
    width: 30, // Set a fixed width for the progress bar
    flex: 1, // Allow it to take up the full height of its container
  },
});

export default Shop;
