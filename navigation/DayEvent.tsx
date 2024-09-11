import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import EventCard from "../Components/EventCard";
import Colors from "../constants/Colors";

export const formatTime = (timestamp) => {
  const date = new Date(timestamp);

  // Format the time for 'America/Chicago' (Central Time) using the Intl API
  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "America/Chicago",
  };

  const formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);

  return formattedTime;
};

const DayEvent = ({ day, events }) => {
  return (
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
};

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
