import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import EventCard from "../Components/EventCard";
import GPTCard from "../Components/GPTCard";

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
    alignItems: "center",
    backgroundColor: '#111129', // Dark Blue Background
  },
  scrollView: {
    width: "100%",
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: '#111129', // Dark Blue Background
  },
});

export default DayEvent;
