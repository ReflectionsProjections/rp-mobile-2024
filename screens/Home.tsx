import React, {useEffect, useState} from "react";
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";
import { Button, ButtonText, ButtonIcon, AddIcon } from "@gluestack-ui/themed";
import { useRoute } from "@react-navigation/native";
import { logout } from "../redux/actions";
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions, View, StyleSheet } from 'react-native'
import { RootState } from "../redux/store";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Colors from "../constants/Colors";
import {
  useFonts,
  PressStart2P_400Regular,
} from "@expo-google-fonts/press-start-2p";

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

import OngoingEvent from "../assets/SVGs/home/ongoing_event.svg"
import Background from "../assets/SVGs/home/home_bg.svg"
import Token from "../assets/SVGs/home/token.svg"

import { getCurrentOrNext } from "../api/getCurrentNextEvent";



const {width, height} = Dimensions.get("window")
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home: React.FC = ({}) => {
  let [fontsLoaded] = useFonts({
    PressStart2P_400Regular
  });
  const token = useAppSelector((state: RootState) => state.token);
  const [currNextEvent, setCurrNextEvent] = useState(null);

  useEffect(() => {
    const fetchCurrNext = async() => {
      try {
        const event = await getCurrentOrNext(token);
        setCurrNextEvent(event);
      } catch (error) {
        console.error('error fetching current/next event:', error);
      }
    };

    fetchCurrNext();
  }, []);

  return (
    <SafeAreaView style = {{flex: 1, position: 'relative'}}>
      <Background width={width} height={height} style={{position: 'absolute'}}/>
      <View style={{position: 'relative', width:'100%', height:'100%'}}>
        <OngoingEvent style={{position: 'absolute', top:'25%', left:'10%'}} />
        {1==1 ? (
          <View style={styles.eventDataContainer}>
            <View style={styles.tabValue}>
              <Text style = {styles.tabText}>ONGOING</Text>
            </View>
            <View style={styles.header}>
              <Text style={styles.title}>Event</Text>
            </View>
            <View style={styles.info}>
              <View style={styles.infoItem}>
                <EvilIcons name="location" size={26} color={Colors.WHITE} />
                <Text style={styles.infoText}>Location</Text>
              </View>
              <View style={styles.infoItem}>
                <EvilIcons name="clock" size={26} color={Colors.WHITE} />
                <Text style={styles.infoText}>Time</Text>
              </View>
              <View style={styles.infoItem}>
                <Token width={30} height={30} style={{marginRight: 5, marginLeft: 40}}/>
                <Text style={styles.badgeText}>x{50}</Text>
              </View>
            </View>
          </View>
        ): (
          <Text>loading...</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  eventDataContainer: {
    position: 'absolute',
    top: '25%', // Adjust according to the layout of the SVG
    left: '10%', // Adjust according to the layout of the SVG
  },
  tabValue: {
    marginTop: 10,
    marginLeft: 25
  },
  tabText: {
    fontSize: 12,
    color: Colors.DARK_BLUE,
    fontFamily: "PressStart2P_400Regular"
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    marginTop: 35,
    marginLeft: 20
  },
  title: {
    fontSize: 25,
    color: Colors.WHITE,
    fontFamily: "Kufam_700Bold_Italic",
  },
  info: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 15,
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  infoText: {
    marginLeft: 4,
    color: Colors.WHITE,
    fontSize: 16,
    fontWeight: "bold",
  },
  badge: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
  },
  tokenImage: {
    width: 2,
    height: 2,
    marginRight: 15
  },
  badgeText: {
    fontSize: 15,
    marginRight: 20,
    fontFamily: "PressStart2P_400Regular",
    color: Colors.YELLOW,
  },
})
export default Home;
