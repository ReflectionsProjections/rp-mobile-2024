import React from "react";
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";
import { Button, ButtonText, ButtonIcon, AddIcon } from "@gluestack-ui/themed";
import * as Linking from "expo-linking";

function Login() {
    const authUrl = "https://api.reflectionsprojections.org/auth/login/web"; //need to change this to ~/mobile
    return (
        <Box width="100%" height="100%" justifyContent="center" alignItems="center">
            <Text>Login to R|P!</Text>
            <Button
                size="md"
                variant="solid"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                onPress={() => {
                    console.log("pressed!");
                    Linking.openURL(authUrl)
                        .catch(err => {
                            console.error("Failed to open URL:", err.message);
                            alert("Failed to open URL")
                        })
                }}
            >
                <ButtonText>LOGIN </ButtonText>
            </Button>
        </Box>    
    )
}

export default Login;