import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import EventCard from "../Components/EventCard";
import GPTCard from "../Components/GPTCard";
import Colors from "../constants/Colors";

const DayEvent = ({ day, events }) => (
  <View style={styles.container}>
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
    >
      {events.map((event) => (
        <GPTCard
          key={event.id}
          name={event.name}
          time={event.time}
          location={event.location}
          description={event.description}
          points={event.points}
        />
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center", // Center the content vertically
    backgroundColor: Colors.DARK_BLUE,
  },
  scrollView: {
    width: "100%",
  },
  contentContainer: {
    alignItems: "center", // Center the content horizontally
    paddingVertical: 10, // Add some vertical padding
  },
});

export default DayEvent;
