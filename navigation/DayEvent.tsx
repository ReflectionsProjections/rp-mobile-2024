import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import EventCard from "../components/EventCard";
import GPTCard from "../components/GPTCard";

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
          person={event.person}
          graphic={event.graphic}
          description={event.description}
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
