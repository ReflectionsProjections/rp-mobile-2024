import React from "react";
import { StyledProvider } from "@gluestack-style/react"
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider, Text, Box, View } from "@gluestack-ui/themed";
import { ButtonText } from "@gluestack-ui/themed";
import { Images } from "../Components/Images";
import { StyledButton } from "../Components/Buttons";
import { StyledText } from "../Components/Text";


function Login({navigation}) {
    return (
        <StyledProvider config={config}>
            
            <Box width="100%" height="100%" justifyContent="space-between" alignItems="center" paddingVertical={100} flex={1}>
                <Images
                    variant="loginLogo" 
                    source={{uri: "https://i.pinimg.com/originals/2e/60/07/2e60079f1e36b5c7681f0996a79e8af4.jpg"}}
                    alt="RP Logo"
                />
                <StyledText variant='bigText' >Welcome to</StyledText>
                <StyledText variant='bigbold' marginTop={-30}>R|P 2024!</StyledText>
                <StyledText variant='basic' marginTop={100} marginBottom={-10}>Powered by SPONSOR!!!</StyledText>
                <StyledButton
                    styleVariant="login"
                    action="primary"
                    isDisabled={false}
                    isFocusVisible={false}
                    onPress={() => {
                        console.log("logged in!");
                        navigation.navigate('Main');
                    }}
                >
                    <ButtonText color={"$black"}>LOGIN</ButtonText>
                </StyledButton>
            </Box>
        </StyledProvider>    
    )
}

export default Login;