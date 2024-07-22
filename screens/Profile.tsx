import React, { useEffect, useLayoutEffect, useState } from "react";
import { GluestackUIProvider, Text, Box, View, Image } from "@gluestack-ui/themed";
// import { Button, ButtonText, ButtonIcon, AddIcon } from "@gluestack-ui/themed";
import { Heading, Center } from "@gluestack-ui/themed"
import { Images } from "../Components/Images";
import { StyledText } from "../Components/Text";
import { StyledBox } from "../Components/Box";
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getAttendee } from "../api/getAttendee";
import QRCode from "react-native-qrcode-svg";
import { RootState } from "../redux/store";
import { getQRCode } from "../api/getQRCode";
import axios from "axios";
import { Attendee } from "../redux/types";
import Colors from "../constants/Colors";
import { useFonts, Kufam_400Regular, Kufam_700Bold, Kufam_700Bold_Italic } from "@expo-google-fonts/kufam";
import FoodWaveSVG from "../Components/FoodWaveSVG"

import QRFrame from '../assets/SVGs/qrcode/qr_frame.svg'

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
    <Box width="100%" height="100%" paddingVertical={275} flex={1} backgroundColor={Colors.DARK_BLUE}>
      {attendee && qrcode &&
      <View justifyContent="space-between" alignItems="center">
        <View style ={{padding: 10, position: 'relative', alignItems: 'center', justifyContent: 'center'}}>
          <QRFrame width={320} height={320}/>
          <View style={{
            position: 'absolute',
            width: 300,  // Match the QR code size
            height: 300, // Match the QR code size
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <QRCode
              value={qrcode}
              size={290}
            />
          </View>
        </View>
        <StyledText variant="profileText" fontFamily={"Kufam_700Bold_Italic"} marginTop={50} color={Colors.WHITE}>{attendee.name}</StyledText>
        <FoodWaveSVG foodWave = {attendee.foodWave}/>
      </View>}
    </Box>
  );
};
  
export default Profile;