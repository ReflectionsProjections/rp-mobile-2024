import React, { useEffect } from "react";
import { GluestackUIProvider, Text, Box, View } from "@gluestack-ui/themed";
// import { Button, ButtonText, ButtonIcon, AddIcon } from "@gluestack-ui/themed";
import { Heading, Center } from "@gluestack-ui/themed"
import { Images } from "../Components/Images";
import { StyledText } from "../Components/Text";
import { StyledBox } from "../Components/Box";

import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getAttendee } from "../api/getAttendee";
import { RootState } from "../redux/store";
import { getQRCode } from "../api/getQRCode";

const Profile: React.FC = () => {

  const dispatch = useAppDispatch();
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
  }, [token, attendee, qrcode, dispatch])

  return (
    <Box width="100%" height="100%" paddingVertical={50} flex={1}>
      <View justifyContent="space-between" alignItems="center">
        <Images
          variant="qrCode" //change to QRCode variant
          source={{uri: qrcode}}
          alt="QR Code"
        />
        <StyledText variant="bigText" marginTop={50}>{attendee.name}</StyledText>
        <StyledBox variant='foodWave' marginTop={15} justifyContent='center'>
          <StyledText variant="medium">
            Food Wave: 1
          </StyledText>
        </StyledBox>
      </View>  
    </Box>
  );
};
  
export default Profile;