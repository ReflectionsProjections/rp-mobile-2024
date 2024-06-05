import React, { useEffect, useState } from "react";
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation/Navigation";
import * as Linking from "expo-linking";
import Login from "./screens/Login";
import { createStackNavigator } from "@react-navigation/stack";
import store from "./redux/store";
import { Provider, useDispatch } from 'react-redux';
import { setToken } from "./redux/actions";

const prefix = Linking.createURL("/");
const Stack = createStackNavigator();

const App = () => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

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

  useEffect(() => {
    const handleDeepLink = (event: { url: string; }) => {
      const { path, queryParams } = Linking.parse(event.url);
      if (queryParams.token) {
        dispatch(setToken(queryParams.token));
        setData({ path, queryParams });
      } 
    };

    async function getInitialURL() {
      const initialURL = await Linking.getInitialURL();
      if (initialURL) handleDeepLink({url: initialURL});
	  }

    const listener = Linking.addEventListener("url", handleDeepLink);
    
    if (!data) {
      getInitialURL();
    }
    
    return () => listener.remove();
  }, [dispatch]);

  return (
      <GluestackUIProvider config={config}>
        <SafeAreaProvider>
          <NavigationContainer linking={linking}>
            <Stack.Navigator screenOptions={{ headerShown: false}}>
              <Stack.Screen name="Login" component={Login}/>
              <Stack.Screen name="Main" component={Navigation}/>
            </Stack.Navigator>
          </NavigationContainer> 
        </SafeAreaProvider>
      </GluestackUIProvider>
  );
}

export default function AppWrapper() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
}