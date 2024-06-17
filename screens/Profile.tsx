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

const Profile: React.FC = () => {

  const [attendee, setAttendee] = useState<Attendee>(null);
  const [qrcode, setQRCode] = useState(null);
  const [token, _] = useState(useAppSelector((state: RootState) => state.token));

  useLayoutEffect(() => {
    console.log("in use effect", token);
    axios.get('https://api.reflectionsprojections.org/attendee/', {
      headers: {
        Authorization: token
      }
    }).then(attendeeData => {
      console.log(attendeeData.data);
      if (token) {
        setAttendee(attendeeData.data);
      }
    });
  }, []);

  useEffect(() => {
    console.log("in use effect", token);
    const getQRCode = async () => {
      const qrcode = await axios.get('https://api.reflectionsprojections.org/attendee/qr', {
        headers: {
          Authorization: token
        }
      });
      console.log(qrcode.data);
      if (token) {
        setQRCode(qrcode.data);
      }
    };
    
    getQRCode();
    const interval = setInterval(getQRCode, 20000);
    return () => clearInterval(interval);
  }, [token]);

  return (
    <Box width="100%" height="100%" paddingVertical={50} flex={1}>
      {attendee && qrcode &&
      <View justifyContent="space-between" alignItems="center">
        <QRCode
          value = {qrcode.data}
          size = {300}
        />
        <StyledText variant="bigText" marginTop={50}>{attendee.name}</StyledText>
        <StyledBox variant='foodWave' marginTop={15} justifyContent='center'>
          <StyledText variant="medium">
            Food Wave: {attendee.foodWave}
          </StyledText>
        </StyledBox>
      </View>}
    </Box>
  );
};
  
export default Profile;