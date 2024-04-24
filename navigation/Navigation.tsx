import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome } from "@expo/vector-icons";
import { View } from "react-native";
import Home from "../screens/Home";
import Events from "../screens/Events";
import CameraScanner from "../screens/CameraScanner";
import Shop from "../screens/Shop";
import Profile from "../screens/Profile";

const ACTIVE_COLOR = "black";
const INACTIVE_COLOR = "gray";

const AppNavigator: React.FC = () => {
  // const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // headerShown: false,
        tabBarActiveTintColor: ACTIVE_COLOR,
        tabBarInactiveTintColor: INACTIVE_COLOR,
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
      <Tab.Screen
        name="Camera"
        component={CameraScanner}
        options={{ tabBarLabel: () => null }}
      />
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

// const RootStack = createStackNavigator();

// const Navigation = () => {
//   return (
//     <RootStack.Navigator
//       screenOptions={{
//         animationEnabled: true,
//         gestureEnabled: true,
//         headerShown: false,
//       }}
//     >
//       <RootStack.Screen name="App" component={AppNavigator} />
//     </RootStack.Navigator>
//   );
// };

export default AppNavigator;
