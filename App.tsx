import React, { useEffect, useState } from "react";
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation/Navigation";
import Home from "./screens/Home";
import * as Linking from "expo-linking";
import Login from "./screens/Login";
import { createStackNavigator } from "@react-navigation/stack";
import store from "./redux/store";
import { Provider, useDispatch } from 'react-redux';
import { setToken, clearTokens, AuthActionTypes } from './redux/actions';
import { Dispatch } from "@reduxjs/toolkit";

const prefix = Linking.createURL("/");
console.log(prefix);
const Stack = createStackNavigator();

const App = () => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch<Dispatch<AuthActionTypes>>();
  const linking = {
    prefixes:[prefix],
    config:{
      screens: {
        Main: "Main",
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
      console.log("handling deep link:", event.url);
      const { path, queryParams } = Linking.parse(event.url);
      const token = queryParams.token;

      if (typeof token === 'string') {
        dispatch(setToken(token));
      } else if (Array.isArray(token) && token.length > 0) {
        dispatch(setToken(token[0])); // Take the first element if token is an array
      } else {
        console.error('Invalid token format:', token);
      }

    };

    async function getInitialURL() {
      
      const initialURL = await Linking.getInitialURL();
      console.log("getting initial URL:", initialURL);
      if (initialURL) handleDeepLink({url: initialURL});
	  }

    getInitialURL();
    const listener = Linking.addEventListener("url", handleDeepLink);

    return () => listener.remove();
  }, [dispatch]);

  return (
      <GluestackUIProvider config={config}>
        <SafeAreaProvider>
          <NavigationContainer linking={linking}>
            <Stack.Navigator screenOptions={{ headerShown: false}} initialRouteName="Login">
              <Stack.Screen name="Login" component={Login}/>
              <Stack.Screen name="Main" component={Navigation}/>
              <Stack.Screen name = "Home" component={Home} />
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