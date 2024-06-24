import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome } from "@expo/vector-icons";
import { View } from "react-native";
import Home from "../screens/Home";
import Events from "../screens/Events";
import CameraScanner from "../screens/CameraScanner";
import Shop from "../screens/Shop";
import Profile from "../screens/Profile";
import Colors from "../constants/Colors";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

import EventDaysNavigator from "./EventDaysNavigator"; // Adjust path as necessary
import AdminScanner from "../screens/AdminScanner";

const ACTIVE_COLOR = Colors.YELLOW;
const INACTIVE_COLOR = Colors.WHITE;

const AppNavigator: React.FC = () => {
  // const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const roles = useAppSelector((state: RootState) => state.roles);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: ACTIVE_COLOR,
        tabBarInactiveTintColor: INACTIVE_COLOR,
        tabBarStyle: {
          backgroundColor: Colors.DARK_BLUE,
        },
        tabBarIcon: ({ focused }) => {
          switch (route.name) {
            case "Home":
              return (
                <FontAwesome
                  name="home"
                  color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
                  size={35}
                  solid
                />
              );
            case "Events":
              return (
                <FontAwesome
                  name="calendar"
                  color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
                  size={35}
                  solid
                />
              );
            case "Camera":
              return (
                <FontAwesome
                  name="camera"
                  color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
                  size={35}
                  solid
                />
              );
            case "AdminScanner":
              return (
                <FontAwesome
                  name="camera"
                  color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
                  size={35}
                  solid
                />
              );
            case "Shop":
              return (
                <FontAwesome
                  name="shopping-cart"
                  color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
                  size={35}
                  solid
                />
              );
            case "Profile":
              return (
                <FontAwesome
                  name="user"
                  color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
                  size={35}
                  solid
                />
              );
            default:
              return <View />;
          }
        },
      })}
      initialRouteName={"Home"}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: () => null }}
      />
      <Tab.Screen
        name="Events"
        component={Events}
        options={{ tabBarLabel: () => null }}
      />
      {roles.includes('ADMIN') ? (
        <Tab.Screen
        name="AdminScanner"
        component={AdminScanner}
        options={{ tabBarLabel: () => null }}
      />
      ) : (
        <Tab.Screen
        name="Camera"
        component={CameraScanner}
        options={{ tabBarLabel: () => null }}
      />
      )}
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{ tabBarLabel: () => null }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ tabBarLabel: () => null }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
