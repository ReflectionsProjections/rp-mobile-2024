import React, { useEffect } from "react";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import Colors from "../constants/Colors";
import { useState } from "react";

import ScreenImage from "../assets/SVGs/login/LoginScreen.svg";

const authUrl = "https://api.reflectionsprojections.org/auth/login/mobile/";
const redirectURL = "reflectionsprojections://--/Main";

interface LoginProps {
  navigation: NavigationProp<ParamListBase>;
}

const { width, height } = Dimensions.get("window");

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const token = useAppSelector((state: RootState) => state.token);
  const roles = useAppSelector((state: RootState) => state.roles);
  const [loggedIn, setLoggedIn] = useState(false);
  
  useEffect(() => {
    if (token && roles.includes('USER')) {
      console.log("logging in again")
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  const handleLoginPress = () => {
    if(loggedIn) {
      navigation.navigate("Main");
    } else {
      navigation.navigate("Guest");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <ScreenImage
          width={width}
          height={height}
          style={styles.image}
          preserveAspectRatio="none"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleLoginPress}
        ></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.DARK_BLUE,
  },
  imageContainer: {
    width: "100%",
    height: "100%",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  button: {
    position: "absolute",
    width: "40%",
    height: 100,
    bottom: 0,
    right: 90,
  },
});

export default Login;
