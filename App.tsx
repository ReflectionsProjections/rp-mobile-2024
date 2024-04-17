import React, { useEffect, useState } from "react";
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation/Navigation";
import * as Linking from "expo-linking";
import { LinkingEvent } from "expo-linking"; // Import LinkingEvent

const prefix = Linking.createURL("/");

export default function App() {
  const [data, setData] = useState(null);

  const linking = {
	prefixes:[prefix],
	config:{
		screens: {
			Home: "home",
			Camera: "camera",
			Events: "events",
			Profile: "profile",
			Shop: "shop"
		}
	}
  }

  const handleDeepLink = (event: LinkingEvent) => {
    let parsedData = Linking.parse(event.url);
    setData(parsedData);
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
          <Navigation></Navigation>
        </NavigationContainer> 
      </SafeAreaProvider>
    </GluestackUIProvider>
  );
}