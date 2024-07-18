import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DayEvent from "./DayEvent";
import Colors from "../constants/Colors";
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';

const eventsData = [
  {
    id: 1,
    name: "Let's learn about LLMs",
    time: "9:00am",
    day: "Wednesday",
    location: "Siebel 1404",
    person: "Prof Wade",
    graphic: "chatgpt.logo",
    description: "Wade talks about LLMs",
    points: 10
  },
  {
    id: 2,
    name: "AI Ethics",
    time: "11:00am",
    day: "Wednesday",
    location: "CIF 1001",
    person: "Dr. Alice",
    graphic: "ethics.logo",
    description: "Discussion on ethics in AI",
    points: 10
  },
  {
    id: 3,
    name: "Robotics Workshop",
    time: "2:00pm",
    day: "Thursday",
    location: "CIF 2003",
    person: "Eng. Bob",
    graphic: "robotics.logo",
    description: "Hands-on robotics assembly",
    points: 10
  },
  {
    id: 4,
    name: "How to get SWE internship",
    time: "4:00pm",
    day: "Friday",
    location: "Siebel 2003",
    person: "Eng. Bob",
    graphic: "robotics.logo",
    description: "Hands-on robotics assembly",
    points: 10
  },
];

const WeekTab = createMaterialTopTabNavigator();

const ACTIVE_COLOR = "black";
const INACTIVE_COLOR = "gray";

const filterEventsByDay = (day) => {
  return eventsData.filter((event) => event.day === day);
};

const EventDaysNavigator = () => {

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
      <WeekTab.Screen
        name="WED"
        component={() => (
          <DayEvent day="Wednesday" events={filterEventsByDay("Wednesday")} />
        )}
      />
      <WeekTab.Screen
        name="THUR"
        component={() => (
          <DayEvent day="Thursday" events={filterEventsByDay("Thursday")} />
        )}
      />
      <WeekTab.Screen
        name="FRI"
        component={() => (
          <DayEvent day="Friday" events={filterEventsByDay("Friday")} />
        )}
      />
      <WeekTab.Screen
        name="SAT"
        component={() => (
          <DayEvent day="Saturday" events={filterEventsByDay("Saturday")} />
        )}
      />
      <WeekTab.Screen
        name="SUN"
        component={() => (
          <DayEvent day="Sunday" events={filterEventsByDay("Sunday")} />
        )}
      />
    </WeekTab.Navigator>
  );
};

export default EventDaysNavigator;
