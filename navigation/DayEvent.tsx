import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import EventCard from "../Components/EventCard";
import Colors from "../constants/Colors";

const formatTime = (timestamp) => {
  const date = new Date(timestamp); // Create a Date object from the timestamp string
  let hours = date.getUTCHours();
  let minutes = date.getUTCMinutes();
  const ampm = hours >= 12 ? "PM" : "AM"; // Determine if it's AM or PM

  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight (0 hours)
  let minuteStr = minutes < 10 ? "0" + minutes : minutes; // Add leading zero for single digit minutes

  const formattedTime = hours + ":" + minuteStr + ampm; // Concatenate hours, minutes, and AM/PM
  return formattedTime;
};

const DayEvent = ({ day, events }) => (
  <View style={styles.container}>
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
    >
      {events.map((event) => (
        <EventCard
          key={event.id}
          name={event.name}
          time={formatTime(event.startTime)}
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
