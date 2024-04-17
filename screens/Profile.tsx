import React from "react";
import { GluestackUIProvider, Text, Box, View } from "@gluestack-ui/themed";
// import { Button, ButtonText, ButtonIcon, AddIcon } from "@gluestack-ui/themed";
import { Heading, Center } from "@gluestack-ui/themed"
import { Images } from "../Components/Images";
import { StyledText } from "../Components/Text";
import { StyledBox } from "../Components/Box";

const Profile: React.FC = () => {
    return (
    <Box width="100%" height="100%" paddingVertical={50} flex={1}>
      <View justifyContent="space-between" alignItems="center">
        <Images
          variant="loginLogo" 
          source={{uri: "https://i.pinimg.com/originals/2e/60/07/2e60079f1e36b5c7681f0996a79e8af4.jpg"}}
          alt="QR Code"
        />
        <StyledText variant="bigText" marginTop={50}>FirstName LastName</StyledText>
        <StyledBox variant='foodWave' marginTop={15} justifyContent='center'>
          <StyledText variant="medium">170400
            Food Wave: #
          </StyledText>
        </StyledBox>
      </View>  
    </Box>
    );
  };
  
export default Profile;