import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome } from "@expo/vector-icons";
import { View } from "react-native";
import Home from "../screens/Home";

const ACTIVE_COLOR = "black";
const INACTIVE_COLOR = "gray";

const AppNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: ACTIVE_COLOR,
        tabBarInactiveTintColor: INACTIVE_COLOR,
        tabBarIcon: ({ focused }) => {
          switch (route.name) {
            case "Home":
              return (
                <FontAwesome
                  name="home"
                  color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
                  size={20}
                  solid
                />
              );
            case "Activity":
              return (
                <FontAwesome
                  name="tasks"
                  color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
                  size={20}
                  solid
                />
              );
            case "Profile":
              return (
                <FontAwesome
                  name="user"
                  color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
                  size={20}
                  solid
                />
              );
            default:
              return <View />;
          }
        },
      })}
      // initialRouteName={ScreenNames.LOGIN}
    >
      <Tab.Screen name="Screen1" component={Home} />
        <Tab.Screen name="Screen2" component={Home} />
        <Tab.Screen name="Screen3" component={Home} />
        {/* <Tab.Screen name="Screen4" component={Screen4} />
        <Tab.Screen name="Screen5" component={Screen5} /> */}
    </Tab.Navigator>
  );
};

const RootStack = createStackNavigator();

const Navigation = () => {

  return (
    <RootStack.Navigator
      screenOptions={{
        animationEnabled: true,
        gestureEnabled: true,
        headerShown: false,
      }}
    >
      <RootStack.Screen name="App" component={AppNavigator} />
    </RootStack.Navigator>
  );
};

export default Navigation;
