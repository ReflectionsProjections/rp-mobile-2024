import React from "react";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Linking from "expo-linking";
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import Login from "./screens/Login";
import Navigation from "./navigation/Navigation";

const prefix = Linking.createURL("/");

const Stack = createNativeStackNavigator();

export default function App() {
  const [data, setData] = useState(null);

  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        login: "login",
        Main: {
          screens: {
            Home: "home",
            // Add other screens in your Navigation.tsx here
          },
        },
      },
    },
  };

  const handleDeepLink = (event: LinkingEvent) => {
    let parsedData = Linking.parse(event.url);
    setData(parsedData);
    // console.log(data);
  };

  useEffect(() => {
    async function getInitialURL() {
      const initialURL = await Linking.getInitialURL();
      if (initialURL) setData(Linking.parse(initialURL));
    }

    const listener = Linking.addEventListener("url", handleDeepLink);
    if (!data) {
      getInitialURL();
    }
    return () => listener.remove();
  }, []);

  return (
    <GluestackUIProvider config={config}>
      <SafeAreaProvider>
        <NavigationContainer linking={linking}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="Main" component={Navigation} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GluestackUIProvider>
  );
}