import React, {useEffect} from "react";
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";
import { Button, ButtonText, ButtonIcon, AddIcon } from "@gluestack-ui/themed";
import { useRoute } from "@react-navigation/native";
import { logout } from "../redux/actions";
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleLogOut = () => {
    console.log("logging out")
    dispatch(logout());
    navigation.navigate('Login');
  }

  return (
    <Box width="100%" height="100%" justifyContent="center" alignItems="center">
      <Button
        size="md"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
        onPress={handleLogOut}
      >
        <ButtonText>Logout</ButtonText>
        <ButtonIcon as={AddIcon} />
      </Button>
    </Box>
  );
};

export default Home;
