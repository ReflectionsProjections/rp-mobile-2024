import React, {useEffect, useState} from "react";
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";
import { format } from "date-fns";
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
import {
  Kufam_400Regular, Kufam_700Bold, Kufam_700Bold_Italic
} from "@expo-google-fonts/kufam";

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

import OngoingEvent from "../assets/SVGs/home/ongoing_event.svg"
import Background from "../assets/SVGs/home/home_bg.svg"
import Bar from "../assets/SVGs/home/bar_6.svg"
import Token from "../assets/SVGs/home/token.svg"

import { getCurrentOrNext } from "../api/getCurrentNextEvent";
import { getEvents } from "../api/getEvents";



const {width, height} = Dimensions.get("window")
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home: React.FC = ({}) => {
  let [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
    Kufam_700Bold
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
  }, [token]);

  return (
    <SafeAreaView style = {{flex: 1, position: 'relative'}}>
      <Background width={width} height={height} style={{position: 'absolute'}}/>
      <View style={{position: 'relative', width:'100%', height:'80%'}}>
        <OngoingEvent width={0.9 * width} height={0.5 * height} style={{position: 'absolute', left: '5%'}} />
        {currNextEvent && token ? (
          <View style={styles.eventDataContainer}>
            <View style={styles.tabValue}>
              <Text style = {styles.tabText}>ONGOING</Text>
            </View>
            <View style={styles.header}>
              <Text style={styles.title}>{currNextEvent.name}</Text>
            </View>
            <View style={styles.info}>
              <View style={styles.infoItem}>
                <EvilIcons name="location" size={26} color={Colors.WHITE} />
                <Text style={styles.infoText}>{currNextEvent.location}</Text>
              </View>
              <View style={styles.infoItem}>
                <EvilIcons name="clock" size={26} color={Colors.WHITE} />
                <Text style={styles.infoText}>
                  {format(new Date(currNextEvent.startTime), 'MMM d, yyyy h:mm a')}
                </Text>
              </View>
              <View style={styles.infoItem}>
                <Token width={20} height={30} style={{marginRight: 5}}/>
                <Text style={styles.badgeText}>x{50}</Text>
              </View>
            </View>
          </View>
        ): (
          <Text>loading...</Text>
        )}
        <Bar width={0.8 * width} height={height} style={{position:'absolute', left:'10%'}}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  eventDataContainer: {
    position: 'absolute',
    top: '23%',
    left: '5%', // Adjust according to the layout of the SVG
  },
  tabValue: {
    marginTop: 7,
    marginLeft: 27
  },
  tabText: {
    fontSize: 13,
    color: Colors.DARK_BLUE,
    fontFamily: "PressStart2P_400Regular"
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    marginTop: 37,
    marginLeft: 20,
    fontFamily: "Kufam_700Bold_Italic",
    fontSize: 15
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
    marginRight: 35,
  },
  infoText: {
    marginLeft: 4,
    color: Colors.WHITE,
    fontSize: 14,
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
