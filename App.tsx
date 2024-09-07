import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme
import { NavigationContainer, useNavigation, useNavigationContainerRef } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation/Navigation";
import Home from "./screens/Home";
import * as Linking from "expo-linking";
import Login from "./screens/Login";
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import store, { RootState } from "./redux/store";
import { Provider, useDispatch } from 'react-redux';
import { setToken, clearTokens, AuthActionTypes, setRoles } from './redux/actions';
import { Dispatch } from "@reduxjs/toolkit";
import { decodeToken } from "./api/decodeToken";
import { useAppSelector } from "./redux/hooks";
import { State } from "react-native-gesture-handler";
import Toast, { ErrorToast } from "react-native-toast-message";

const prefix = Linking.createURL("/");
console.log(prefix);

type RootStackParamList = {
  Login: undefined,
  Main: undefined
}

const Stack = createStackNavigator<RootStackParamList>();
const { width, height } = Dimensions.get("window");

const App = (props) => {
  const [deepLinkHandled, setDeepLinkHandled] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const dispatch = useDispatch<Dispatch<AuthActionTypes>>();
  const navigationRef = useNavigationContainerRef<RootStackParamList>();
  const linking = {
    prefixes:[prefix],
    config:{
      screens: {
        Login: "Login",
        Main: "Main",
        Home: "home",
        Camera: "camera",
        Events: "events",
        Profile: "profile",
        Shop: "shop"
      }
    }
  }
  const toastConfig = {
    error: (props) => (
      <ErrorToast {...props}
        text1Style ={{
          fontSize: 20
        }}
        text2Style={{
          fontSize: 15
        }}
      />
    )
  }
    
  useEffect(() => {
    const handleDeepLink = (event: { url: string; }) => {
      console.log("handling deep link:", event.url);
      const searchParams = new URL(event.url).searchParams;
      const token = searchParams.get('token');
      if (token) {
        dispatch(setToken(token))
        const decoded = decodeToken(token);
        console.log(decoded.roles);
        
        if(!decoded.roles.includes('USER')) {
          Toast.show({
            type: 'error',
            text1: 'No user found!',
            text2: 'Please register on the R|P website!',
            topOffset: 30
          })
          setDeepLinkHandled(false);
        } else {
          console.log('dispatched')
          dispatch(setRoles(decoded.roles));
          setDeepLinkHandled(true);
        }
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

  useEffect(() => {
    if(isReady && deepLinkHandled) {
      console.log('navigating');
      navigationRef.navigate('Main');
    }
  }, [isReady, deepLinkHandled])

  return (
    <>
      <GluestackUIProvider config={config}>
        <SafeAreaProvider>
          <NavigationContainer 
            linking={linking}
            ref={navigationRef}
            onReady={() => setIsReady(true)}
          >
            <Stack.Navigator screenOptions={{ headerShown: false}} initialRouteName="Login">
              <Stack.Screen name="Login" component={Login}/>
              <Stack.Screen name="Main" component={Navigation}/>
            </Stack.Navigator>
          </NavigationContainer> 
        </SafeAreaProvider>
      </GluestackUIProvider>
      <Toast config={toastConfig}/>
    </>
  );
}

export default function AppWrapper() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
}
