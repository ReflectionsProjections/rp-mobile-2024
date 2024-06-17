import React from "react";
import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import { StyledProvider } from "@gluestack-style/react";
import { config } from "@gluestack-ui/config";
import { Box, View } from "@gluestack-ui/themed";
import { Images } from "../Components/Images";
import { StyledButton } from "../Components/Buttons";
import { StyledText } from "../Components/Text";
import * as Linking from "expo-linking";

function Login() {
  const authUrl = "https://api.reflectionsprojections.org/auth/login/mobile";
  const handleBoxPress = () => {
    // Handle box press action here
    Linking.openURL(authUrl); // Example: open a URL
  };

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
            isDisabled={false}
            isFocusVisible={false} 
            onPress={() => {
              console.log("logged in!");
              Linking.openURL(authUrl).catch((err) => {
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