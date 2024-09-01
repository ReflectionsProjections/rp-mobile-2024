import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { GluestackUIProvider, Text, Box, View, Image } from "@gluestack-ui/themed";
// import { Button, ButtonText, ButtonIcon, AddIcon } from "@gluestack-ui/themed";
import { Heading, Center } from "@gluestack-ui/themed"
import { SafeAreaView } from "react-native-safe-area-context";
import { Images } from "../Components/Images";
import { StyledText } from "../Components/Text";
import { StyledBox } from "../Components/Box";
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getAttendee } from "../api/getAttendee";
import QRCode from "react-native-qrcode-svg";
import { RootState } from "../redux/store";
import { getQRCode } from "../api/getQRCode";
import Colors from "../constants/Colors";
import { useFonts, Kufam_400Regular, Kufam_700Bold, Kufam_700Bold_Italic } from "@expo-google-fonts/kufam";
import FoodWaveSVG from "../Components/FoodWaveSVG"
import { Dimensions } from "react-native";
import { logout } from "../redux/actions";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import QRFrame from '../assets/SVGs/qrcode/qr_frame.svg'
import Background from '../assets/SVGs/home/home_bg.svg'
import Logout from '../assets/SVGs/profile/logout.svg'

const {width, height} = Dimensions.get("window")
type RootStackParamList = {
  Profile: undefined;
  Login: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Profile'>;

const Profile: React.FC = () => {
  
  const dispatch = useAppDispatch();
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const token = useAppSelector((state: RootState) => state.token);
  const attendee = useAppSelector((state: RootState) => state.attendee);
  const qrcode = useAppSelector((state: RootState) => state.qrCodeURL);

  useEffect(() => {
    if (token && !attendee) {
      dispatch(getAttendee(token));
    }
    if (token && !qrcode) {
      dispatch(getQRCode(token));
    }
  }, [token, attendee, qrcode, dispatch]);

  useEffect(() => {
    const fetchQRCode = async() => {
      if (token) {
        await(dispatch(getQRCode(token)));
      }
    };
    fetchQRCode();
    const interval = setInterval(getQRCode, 20000);
    return () => clearInterval(interval);
  }, [token, dispatch]);

  const handleLogOut = () => {
    console.log("logging out")
    dispatch(logout());
    navigation.navigate('Login');
  }

  const qrCodeSize = 0.5 * width;
  
  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      width: width,
      height: height
    },
    background: {
      position: 'absolute',
      zIndex: -1,
    },
    logout: {
      position: 'absolute',
      top: '7%',
      right: '1%',
    },
    qrContainer: {
      justifyContent: 'space-between',
      alignItems: 'center',
      bottom: '15%',
    },
    qrFrameContainer: {
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
    },
    qrFrame: {
      height: qrCodeSize * 3,
    },
    qrCodeStyle: {
      position: 'absolute',
      width: qrCodeSize,
      height: qrCodeSize,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: -1,
    },
    profileText: {
      marginTop: '5%', // Responsive margin
    },
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <Background style={styles.background} height={height} width={width} preserveAspectRatio="none"/>
      <Logout style={styles.logout} width={'35%'} height={'5%'} preserveAspectRatio="none" onPress={handleLogOut}/>
      {attendee && qrcode &&
      <View style={styles.qrContainer}>
        <View style={styles.qrFrameContainer}>
          <QRFrame style={styles.qrFrame} height={qrCodeSize * 1.1} width={qrCodeSize * 1.4}/>
          <View style={styles.qrCodeStyle}>
            <QRCode
              value="Sample QR Code Value"
              size={qrCodeSize}
            />
          </View>
        </View>
        <StyledText variant="profileText" color={Colors.WHITE} style={styles.profileText}>{attendee.name}</StyledText>
        <FoodWaveSVG foodWave={attendee.foodWave} />
      </View>}
    </SafeAreaView>
  );
};
  
export default Profile;