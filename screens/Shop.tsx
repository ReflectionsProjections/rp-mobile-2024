import React from "react";
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";
// import { Button, ButtonText, ButtonIcon, AddIcon } from "@gluestack-ui/themed";
import { Heading, Center } from "@gluestack-ui/themed";

import EventModal from "../Components/EventModal";

const Shop: React.FC = () => {
  return (
    <Box width="100%" height="100%" justifyContent="center" alignItems="center">
      <Heading>This is the Shop page.</Heading>
      <EventModal
        title={"title"}
        location={"location"}
        time={"time"}
        points={"points"}
        description={"description"}
      />
    </Box>
  );
};

export default Shop;
