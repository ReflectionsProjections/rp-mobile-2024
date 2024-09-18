import React, { useEffect, useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Button, ButtonText } from '@gluestack-ui/themed';
import * as WebBrowser from "expo-web-browser";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import Colors from "../constants/Colors";
import * as Linking from "expo-linking"
import { StyledText } from "../Components/Text";
import { useFonts, Kufam_400Regular, Kufam_700Bold, Kufam_700Bold_Italic, Kufam_600SemiBold } from "@expo-google-fonts/kufam";

const authUrl = "https://api.reflectionsprojections.org/auth/login/mobile/";
const redirectURL = "reflectionsprojections://--/Main";

interface LoginProps {
  navigation: NavigationProp<ParamListBase>;
}

const GuestLogin: React.FC<LoginProps> = ({ navigation }) => {
  const token = useAppSelector((state: RootState) => state.token);
  const roles = useAppSelector((state: RootState) => state.roles);
  const [loggedIn, setLoggedIn] = useState(false);
  let [fontsLoaded] = useFonts({
    Kufam_600SemiBold,
    Kufam_700Bold
  });
  useEffect(() => {
    if (token && roles.includes('USER')) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [token, roles]);

  const handleLoginPress = () => {
    if(loggedIn) {
      navigation.navigate("Main");
    } else {
      WebBrowser.openAuthSessionAsync(
        `${authUrl}?redirect_uri=${redirectURL}`,
        redirectURL
      ).then((result) => {
        if (result.type === "success") {
          Linking.openURL(result.url);
          navigation.navigate("Main");
        }
      }).catch((err) => {
        console.error("Failed to open URL:", err.message);
        alert("Failed to open URL");
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginContainer}>
        <StyledText variant="footerText" color={Colors.WHITE} fontSize={32} marginBottom={-10}>Haven't registered?</StyledText>
        <Button 
          onPress={() => navigation.navigate("Main")}
          style={styles.button}
        >
            <ButtonText color={Colors.DARK_BLUE} fontWeight={"bold"} fontSize={20} fontFamily="Kufam_600SemiBold">Login as Guest</ButtonText>
        </Button>
        <StyledText variant="footerText" color={Colors.WHITE} fontSize={16}>OR</StyledText>
        <Button 
          onPress={() => WebBrowser.openBrowserAsync('https://reflectionsprojections.org')}
          style={styles.button}
        >
            <ButtonText color={Colors.DARK_BLUE} fontWeight={"bold"} fontSize={20} fontFamily="Kufam_600SemiBold">Register!</ButtonText>
        </Button>
        <View style={styles.spacing} />
        <StyledText variant="footerText" color={Colors.WHITE} fontSize={32} marginBottom={-10}>Already registered?</StyledText>
        <Button 
          onPress={handleLoginPress}
          style={styles.button}
        >
            <ButtonText color={Colors.DARK_BLUE} fontWeight={"bold"} fontSize={20} fontFamily="Kufam_600SemiBold">Login</ButtonText>
        </Button>
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
  loginContainer: {
    width: "80%",
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  button: {
    marginBottom: 20,
    width: '100%',
    marginTop: 20,
    backgroundColor: Colors.YELLOW
  },
  separator: {
    color: Colors.WHITE,
    fontSize: 16,
  },
  spacing: {
    height: 60, // Increased space before the already registered section
  }
});

export default GuestLogin;
