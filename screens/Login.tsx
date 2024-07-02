import React, { useEffect } from "react";
import { StyledProvider } from "@gluestack-style/react"
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider, Text, Box, View } from "@gluestack-ui/themed";
import { ButtonText } from "@gluestack-ui/themed";
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
            
            <Box width="100%" height="100%" justifyContent="space-between" alignItems="center" paddingVertical={100} flex={1}>
                <Images
                    variant="loginLogo" 
                    source={{uri: "https://i.pinimg.com/originals/2e/60/07/2e60079f1e36b5c7681f0996a79e8af4.jpg"}}
                    alt="RP Logo"
                />
                <StyledText variant='profileText' >Welcome to</StyledText>
                <StyledText variant='bigbold' marginTop={-30}>R|P 2024!</StyledText>
                <StyledText variant='basic' marginTop={100} marginBottom={-10}>Powered by SPONSOR!!!</StyledText>
                <StyledButton
                    styleVariant="login"
                    action="primary"
                    isDisabled={false}
                    isFocusVisible={false}
                    onPress={() => {
                        console.log("logged in!");
                        //navigation.navigate('Main');
                        //console.log({token});
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
                    <ButtonText color={"$black"}>LOGIN</ButtonText>
                </StyledButton>
            </Box>
        </StyledProvider>    
    )
}

export default Login;