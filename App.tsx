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
import store, { RootState } from "./redux/store";
import { Provider, useDispatch } from 'react-redux';
import { setToken, clearTokens, AuthActionTypes, setRoles } from './redux/actions';
import { Dispatch } from "@reduxjs/toolkit";
import { decodeToken } from "./api/decodeToken";
import { useAppSelector } from "./redux/hooks";
import { State } from "react-native-gesture-handler";

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
      const searchParams = new URL(event.url).searchParams;
      const token_old = searchParams.get('token');
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyMTAzOTM0NTQ5MTI3NDQ0OTQyNzU5Iiwicm9sZXMiOlsiQURNSU4iXSwiZGlzcGxheU5hbWUiOiJBcnlhbiBCYWhsIiwiaWF0IjoxNzIzMTc3MTE1LCJleHAiOjE3MjMyNjM1MTV9.HnF9mMJg_Qo6dJyw6759c1MAd8QVBPDRKxEgPsbkfgQ";
      if (token) {
        dispatch(setToken(token))
        const decoded = decodeToken(token);
        console.log(decoded.roles);
        dispatch(setRoles(decoded.roles));
      }
    }

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
