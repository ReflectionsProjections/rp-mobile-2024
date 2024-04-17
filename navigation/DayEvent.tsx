import React from "react";
import { Text, View, ScrollView } from "react-native";
import EventCard from "../components/EventCard";

const DayEvent = ({ day, events }) => (
  <View style={{ flex: 1, alignItems: "center" }}>
    <Text style={{ fontSize: 24, marginVertical: 10 }}>{day}'s Events</Text>
    <ScrollView
      style={{ width: "100%" }}
      contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
    >
      {events.map((event) => (
        <EventCard
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

export default DayEvent;
