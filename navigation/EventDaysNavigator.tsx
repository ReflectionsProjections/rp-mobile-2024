import React, { useState, useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DayEvent from "./DayEvent";
import Colors from "../constants/Colors";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

const eventsURL = "https://api.reflectionsprojections.org/events/";

const WeekTab = createMaterialTopTabNavigator();

const ACTIVE_COLOR = "black";
const INACTIVE_COLOR = "gray";

const EventDaysNavigator = () => {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(eventsURL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setEventsData(data); // Update eventsData state with fetched data
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []); // Empty dependency array ensures useEffect runs only once

  const filterEventsByDay = (day) => {
    return eventsData.filter((event) => {
      // Extract the startTime from the event object
      const startTime = new Date(event.startTime);
      
      // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
      const eventDayOfWeek = startTime.getDay();

      // Determine the name of the day based on the day of the week
      const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const eventDayName = daysOfWeek[eventDayOfWeek];

      // Compare with the provided day parameter
      console.log(eventsData);
      return eventDayName === day;
    });
  };

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null; // Or some loading indicator
  }

  return (
    <WeekTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.YELLOW,
        tabBarInactiveTintColor: Colors.WHITE,
        tabBarStyle: {
          backgroundColor: Colors.DARK_BLUE, // Set the tab bar background color to red
        },
        tabBarIndicatorStyle: {
          backgroundColor: Colors.YELLOW, // Set the indicator color to match active color
        },
        tabBarLabelStyle: {
          fontSize: 16, // Change this to your desired font size
          fontFamily: "Inter_500Medium", // Change this to your desired font family
          fontWeight: "bold", // Change this to your desired font weight
        },
      }}
    >
      <WeekTab.Screen name="WED">
        {() => (
          <DayEvent day="Wednesday" events={filterEventsByDay("Monday")} />
        )}
      </WeekTab.Screen>
      <WeekTab.Screen name="THUR">
        {() => (
          <DayEvent day="Thursday" events={filterEventsByDay("Tuesday")} />
        )}
      </WeekTab.Screen>
      <WeekTab.Screen name="FRI">
        {() => <DayEvent day="Friday" events={filterEventsByDay("Friday")} />}
      </WeekTab.Screen>
      <WeekTab.Screen name="SAT">
        {() => (
          <DayEvent day="Saturday" events={filterEventsByDay("Saturday")} />
        )}
      </WeekTab.Screen>
      <WeekTab.Screen name="SUN">
        {() => <DayEvent day="Sunday" events={filterEventsByDay("Sunday")} />}
      </WeekTab.Screen>
    </WeekTab.Navigator>
  );
};

export default EventDaysNavigator;
