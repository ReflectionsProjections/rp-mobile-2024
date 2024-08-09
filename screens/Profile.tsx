import React, { useEffect, useLayoutEffect, useState } from "react";
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

import QRFrame from '../assets/SVGs/qrcode/qr_frame.svg'
import Background from '../assets/SVGs/profile/profile_bg.svg'

const {width, height} = Dimensions.get("window")

const Profile: React.FC = () => {
  
  const dispatch = useAppDispatch();
  const token = useAppSelector((state: RootState) => state.token);
  console.log("profile token:", token);
  const attendee = useAppSelector((state: RootState) => state.attendee);
  const qrcode = useAppSelector((state: RootState) => state.qrCodeURL);
  console.log("qrcode string:", qrcode);


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

  return (
    <SafeAreaView style = {{flex: 1, position: 'relative', justifyContent: 'center', alignItems: 'center'}}>
      <Background style={{position: 'absolute', width: width, height: height}}/>
      {attendee && qrcode &&
      <View justifyContent="space-between" alignItems="center" paddingVertical={200}>
        <View style ={{position: 'relative', alignItems: 'center', justifyContent: 'center'}}>
          <QRFrame width={250} height={300}/>
          <View style={{
            position: 'absolute',
            width: 200,  // Match the QR code size
            height: 200, // Match the QR code size
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <QRCode
              value={qrcode}
              size={0.5 * width}
            />
          </View>
        </View>
        <StyledText variant="profileText" color={Colors.WHITE} marginBottom={10}>{attendee.name}</StyledText>
        <FoodWaveSVG foodWave = {attendee.foodWave}/>
      </View>}
    </SafeAreaView>
  );
};
  
export default Profile;