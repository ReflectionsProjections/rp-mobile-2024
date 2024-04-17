import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DayEvent from './DayEvent';
// import { eventsData } from "../data/events"; // Assuming you have a centralized place for events data

const eventsData = [
  {
    id: 1,
    name: "LLMs",
    time: "9:00am",
    day: "Wednesday",
    location: "Siebel 1404",
    person: "Prof Wade",
    graphic: "chatgpt.logo",
    description: "Wade talks about LLMs",
  },
  {
    id: 2,
    name: "AI Ethics",
    time: "11:00am",
    day: "Wednesday",
    location: "Beckman 1001",
    person: "Dr. Alice",
    graphic: "ethics.logo",
    description: "Discussion on ethics in AI",
  },
  {
    id: 3,
    name: "Robotics Workshop",
    time: "2:00pm",
    day: "Thursday",
    location: "Engineering Hall 2003",
    person: "Eng. Bob",
    graphic: "robotics.logo",
    description: "Hands-on robotics assembly",
  },
  {
    id: 4,
    name: "How to get SWE internship",
    time: "4:00pm",
    day: "Friday",
    location: "Engineering Hall 2003",
    person: "Eng. Bob",
    graphic: "robotics.logo",
    description: "Hands-on robotics assembly",
  },
];

const WeekTab = createMaterialTopTabNavigator();

const ACTIVE_COLOR = "black";
const INACTIVE_COLOR = "gray";

const filterEventsByDay = (day) => {
  return eventsData.filter(event => event.day === day);
};

const EventDaysNavigator = () => {
  return (
    <WeekTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: ACTIVE_COLOR,
        tabBarInactiveTintColor: INACTIVE_COLOR,
      }}
    >
<WeekTab.Screen name="WED" component={() => <DayEvent day="Wednesday" events={filterEventsByDay("Wednesday")} />} />
<WeekTab.Screen name="THUR" component={() => <DayEvent day="Thursday" events={filterEventsByDay("Thursday")} />} />
<WeekTab.Screen name="FRI" component={() => <DayEvent day="Friday" events={filterEventsByDay("Friday")} />} />
<WeekTab.Screen name="SAT" component={() => <DayEvent day="Saturday" events={filterEventsByDay("Saturday")} />} />
<WeekTab.Screen name="SUN" component={() => <DayEvent day="Sunday" events={filterEventsByDay("Sunday")} />} />
    </WeekTab.Navigator>
  );
};

export default EventDaysNavigator;