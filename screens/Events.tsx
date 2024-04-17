import React from "react";
import { ScrollView } from "react-native";
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";
import { Button, ButtonText, ButtonIcon, AddIcon } from "@gluestack-ui/themed";
import { Heading, Center } from "@gluestack-ui/themed";
import { StyledButton } from "../components/Buttons";

const Events: React.FC = () => {
  return (
    <Box width="100%" height="100%" justifyContent="center" alignItems="center">
      <Heading>This is the Events page.</Heading>
      <StyledButton
        styleVariant="eventsButton"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText>LOGIN</ButtonText>
      </StyledButton>
    </Box>
  );
};

export default Events;
