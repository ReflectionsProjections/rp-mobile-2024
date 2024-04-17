import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Box } from "@gluestack-ui/themed";

export type EventCardProps = {
  name: string;
  time: string;
  location: string;
  person: string;
  graphic: string;
  description: string;
};

const EventCard: React.FC<EventCardProps> = ({
  name,
  time,
  location,
  person,
  graphic,
  description
}) => {
  return (
    <Box style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.timeLocationContainer}>
        <Text style={styles.time}>{time}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
      <Text style={styles.person}>{person}</Text>
      <Text style={styles.description}>{description}</Text>
    </Box>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f0f0f0",  // Light grey background
    borderColor: "black",        // Black border color
    borderWidth: 1,              // Border width
    borderRadius: 10,            // Rounded corners
    padding: 10,                 // Padding inside the box
    marginBottom: 10,            // Margin bottom for spacing between cards
    width: "90%",                // Width of the card
    alignSelf: "center",         // Center card within its parent container
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,             // Margin bottom for spacing below the name
  },
  timeLocationContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // Spread time and location to each side
    marginBottom: 5,                 // Margin bottom for spacing below the row
  },
  time: {
    fontSize: 16,
    color: "#555",               // Darker grey for less emphasis
  },
  location: {
    fontSize: 16,
    color: "#555",               // Darker grey for less emphasis
  },
  person: {
    fontSize: 16,
    marginBottom: 5,             // Margin bottom for spacing below the person name
  },
  description: {
    fontSize: 14,
    color: "darkgrey",           // Lighter text color for the description
  }
});

export default EventCard;
