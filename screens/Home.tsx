import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions, View, StyleSheet, ActivityIndicator } from "react-native";
import { useFonts, PressStart2P_400Regular } from "@expo-google-fonts/press-start-2p";
import { useAppSelector } from "../redux/hooks";
import PacmanBackground from "../assets/SVGs/home/PacmanBackground.svg";
import { getCurrentOrNext } from "../api/getCurrentNextEvent";
import { RootState } from "../redux/store";
import CurrentEventCard from "../Components/CurrentEventCard";
import Colors from "../constants/Colors";

const { width, height } = Dimensions.get("window");

const Home: React.FC = () => {
  let [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
  });
  const token = useAppSelector((state: RootState) => state.token);
  const [currNextEvent, setCurrNextEvent] = useState(null);
  const [loading, setLoading] = useState(true); // To track loading state

  useEffect(() => {
    const fetchCurrNext = async () => {
      try {
        const event = await getCurrentOrNext(token);
        setCurrNextEvent(event);
      } catch (error) {
        console.error("error fetching current/next event:", error);
      } finally {
        setLoading(false); // Stop loading once the fetch is complete
      }
    };

    fetchCurrNext();
  }, [token]);

  if (loading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color={Colors.WHITE} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <PacmanBackground
          width={width}
          height={height}
          style={styles.image}
          preserveAspectRatio="none"
        />
        {currNextEvent ? (
          <View style={styles.cardContainer}>
            <CurrentEventCard
              name={currNextEvent.name}
              startTime={currNextEvent.startTime}
              endTime={currNextEvent.endTime}
              location={currNextEvent.location}
              description={currNextEvent.description}
              points={currNextEvent.points}
            />
          </View>
        ) : (
          <View style={styles.noEventContainer}>
            <Text style={styles.noEventText}>No current or upcoming events</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.DARK_BLUE,
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "relative",
  },
  image: {
    position: "absolute",
  },
  cardContainer: {
    top: "22%",
    zIndex: 10,
  },
  noEventContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  noEventText: {
    color: Colors.WHITE,
    fontSize: 18,
  },
});

export default Home;
