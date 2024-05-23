import React from "react";
import { styled, StyledProvider } from "@gluestack-style/react"
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider, Text, Box, View } from "@gluestack-ui/themed";
import { Button, ButtonText } from "@gluestack-ui/themed";
import { Logo } from "../Components/Images";


function Login({navigation}) {
    return (
        <GluestackUIProvider config={config}>
            <Box width="100%" height="100%" justifyContent="center" alignItems="center">
            {/* <Logo source="https://images.app.goo.gl/iMCNzt6VnCY5Arw49" alt="logo"/> */}
            <Text>Other stuff will go here...</Text>
            <Button
                size="md"
                variant="solid"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                onPress={() => {
                    console.log("logged in!");
                    navigation.navigate('Main');
                }}
            >
                <ButtonText>Login</ButtonText>
            </Button>
            </Box>
        </GluestackUIProvider>    
    )
}

export default Login;