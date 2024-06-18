import React from "react";
import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import { StyledProvider } from "@gluestack-style/react";

import { config } from "@gluestack-ui/config";
import { Box, View } from "@gluestack-ui/themed";
import { Images } from "../Components/Images";
import { StyledButton } from "../Components/Buttons";
import { StyledText } from "../Components/Text";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser"
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { RootState } from "../redux/store";

const authUrl = "https://api.reflectionsprojections.org/auth/login/mobile/";
const redirectURL = "reflectionsprojections://Main";
interface LoginProps {
    navigation: NavigationProp<ParamListBase>;
}
const Login: React.FC<LoginProps> = ({navigation}) => {
    /* const token = useAppSelector((state: RootState) => state.token);

    useEffect(() => {
        if (token) {
            console.log("using token");
            navigation.navigate('Main');
        }
    }, [token, navigation]); */

  return (
    <StyledProvider config={config}>
      <Box width="100%" height="100%">
        <ImageBackground
          source={require("../assets/loginScreen.png")}
          style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}
          resizeMode="cover"
        >
          <TouchableOpacity
            style={styles.redBox}
            disabled={false}
            // focusVisible={false} 
            onPress={() => {
              console.log("logged in!");
              WebBrowser.openAuthSessionAsync(`${authUrl}?redirect_uri=${redirectURL}`, redirectURL)
                            .then(result => {
                                if (result.type === 'success') {
                                    console.log(result.url);
                                    console.log("handling redirection globally...");
                                    Linking.openURL(result.url);
                                }
                            })
                            .catch(err => {
                                console.error("Failed to open URL:", err.message);
                                alert("Failed to open URL");
                            });
            }}
          >
            {/* Content inside the red box */}
          </TouchableOpacity>
        </ImageBackground>
      </Box>
    </StyledProvider>
  );
}

const styles = StyleSheet.create({
  redBox: {
    width: "40%", // Adjust width as a percentage of the parent container
    height: 65, // Adjust height as needed
    borderRadius: 8, // Optional: Adjust border radius for rounded corners
    marginBottom: 75, // Adjust margin from bottom as a percentage
    marginLeft: 40,
  },
});

export default Login;