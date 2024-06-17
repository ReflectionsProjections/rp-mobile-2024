import React from "react";
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";
// import { Button, ButtonText, ButtonIcon, AddIcon } from "@gluestack-ui/themed";
import { Heading, Center } from "@gluestack-ui/themed"
import GPTCard from "../components/GPTCard";
import EventModal from "../components/EventModal";


const Camera: React.FC = () => {
  return (
    <Box width="100%" height="100%" justifyContent="center" alignItems="center">
        <Heading>This is the Camera page.</Heading>
    </Box>
    );
  };
  
export default Camera;