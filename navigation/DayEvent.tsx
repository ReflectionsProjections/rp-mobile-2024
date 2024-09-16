import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import EventCard from "../Components/EventCard";
import Colors from "../constants/Colors";
import { StyledText } from "../Components/Text";

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

export const formatLocation = (location) => {
  if (location.includes("Atrium")) {
    const locationWords = location.split(' ');
    return `${locationWords[1]} ${locationWords[2]}`
  }
  return location
}

const DayEvent = ({ day, events }) => {
  return (
    <View style={styles.container}>
      {events ? (
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}
        >
        {events.map((event) => (
          <EventCard
            key={event.id}
            name={event.name}
            time={formatTime(event.startTime)}
            location={formatLocation(event.location)}
            description={event.description}
            points={event.points}
          />
        ))}
        <StyledText variant="footerText" color={Colors.WHITE} fontSize={16}>No more events for the day!</StyledText>
      </ScrollView>
      ) : (
        <StyledText variant="profileText" color={Colors.WHITE} fontSize={30} marginTop={30}>No events on this day</StyledText>
      )}
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
