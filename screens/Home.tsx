import React from "react";
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";
import { Button, ButtonText, ButtonIcon, AddIcon } from "@gluestack-ui/themed";
import { useRoute } from "@react-navigation/native";

const Home: React.FC = () => {
  const route = useRoute();
  const { params } = route;
  console.log(paramsg);

  return (
    <Box width="100%" height="100%" justifyContent="center" alignItems="center">
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        size="md"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
        onPress={() => console.log("pressed!")}
      >
        <ButtonText>Add </ButtonText>
        <ButtonIcon as={AddIcon} />
      </Button>
    </Box>
  );
};

export default Home;
