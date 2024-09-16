import React, { useState, useEffect, useRef, useCallback } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DayEvent from "./DayEvent";
import Colors from "../constants/Colors";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import { Kufam_400Regular, Kufam_700Bold, Kufam_700Bold_Italic, Kufam_600SemiBold } from "@expo-google-fonts/kufam";

import { useFocusEffect } from "@react-navigation/native";

const eventsURL = "https://api.reflectionsprojections.org/events/";

const WeekTab = createMaterialTopTabNavigator();

const EventDaysNavigator = () => {
  const [eventsData, setEventsData] = useState([]);
  const loaded = useRef(false)
  
  useFocusEffect(
    useCallback(() => {
      if (!loaded.current) {
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
            setEventsData([]);
          }
        };
        fetchEvents();
        loaded.current = true;
      }
      return () => {
        loaded.current = false;
      }
    }, [])
  ); // Empty dependency array ensures useEffect runs only once

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
      return eventDayName === day;
    });
  };

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Kufam_600SemiBold,
    Kufam_700Bold
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
          <DayEvent day="Wednesday" events={filterEventsByDay("Wednesday")} />
        )}
      </WeekTab.Screen>
      <WeekTab.Screen name="THUR">
        {() => (
          <DayEvent day="Thursday" events={filterEventsByDay("Thursday")} />
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
