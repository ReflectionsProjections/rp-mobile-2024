import React, {useEffect, useState} from "react";
import {
	Box, Button, ButtonText, ButtonIcon, View, ExternalLinkIcon
} from "@gluestack-ui/themed";
import {CameraView, useCameraPermissions} from "expo-camera";
import {useIsFocused} from "@react-navigation/native";
import {Linking, StyleSheet} from "react-native";
import EventDropdown from "../Components/EventDropdown";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { postCheckIn } from "../api/postCheckIn";
import { StyledButton } from "../Components/Buttons";
import axios from "axios";
import Colors from "../constants/Colors";

// import { Button, ButtonText, ButtonIcon, AddIcon } from "@gluestack-ui/themed";

const AdminScanner: React.FC = () => {
	const [status, requestPermission] = useCameraPermissions();
	const [hasPermission, setHasPermission] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [scanned, setScanned] = useState(false);
	const isFocused = useIsFocused();
    const token = useAppSelector((state: RootState) => state.token);

	useEffect(() => {
		requestPermission().then((e) => {
			setHasPermission(e?.granted);
		});
	}, []);

	const handleBarCodeScanned = ({type, data}) => {
        setScanned(true);
		postCheckIn(token, selectedEvent, data)
	};

    const handleSelectedEvent = (event) => {
        setSelectedEvent(event);
    }
	// mute={true} is used to mute the camera so we dont need mic permissions
	// https://github.com/expo/expo/issues/27984 of course it is undocumented <333

	return (
		<Box width="100%" height="100%" justifyContent="center" alignItems="center">
			{isFocused && hasPermission ? (
                <View style = {styles.cameraContainer}>
                    {token && (
                        <View style = {styles.dropdownContainer}>
                            <EventDropdown token={token} onEventSelect={handleSelectedEvent}/>
                        </View>
                    )}
                    <CameraView 
                        mute={true} width="100%" height="100%" facing={"back"}
                        onBarcodeScanned={scanned ? undefined: handleBarCodeScanned}
                        barcodeScannerSettings={{barcodeTypes: ["qr"]}}
                    />
                    <View style={styles.buttonContainer}>
                        {(scanned) ? (
                             <StyledButton styleVariant="scan_green"
                                onPress={() => setScanned(false)}
                            >
                             <ButtonText color={Colors.WHITE}>Scanned!</ButtonText>
                            </StyledButton> 
                        ) : (
                            <StyledButton styleVariant="scan"
                            onPress={() => setScanned(true)}
                            >
                            <ButtonText color={Colors.WHITE}>Tap to Scan Again </ButtonText>
                            </StyledButton> 
                        ) 
                        }
                    </View>
                </View>
            ) : (
            <View>
                <Button
                    size="md"
                    variant="solid"
                    action="primary"
                    isDisabled={false}
                    isFocusVisible={false}
                    onPress={() => Linking.openSettings()}
                >
                    <ButtonText>Enable Camera Permission in settings </ButtonText>
                    <ButtonIcon as={ExternalLinkIcon}/>
                </Button>
            </View>)}
		</Box>
	);
};

const styles = StyleSheet.create({
    cameraContainer: {
      width: '100%',
      height: '100%',
      position: 'relative',
    },
    dropdownContainer: {
      position: 'absolute',
      top: 35,
      right: 20,
      zIndex: 1000
    },
    buttonContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        bottom: 20,
        zIndex: 1000,
        width: '75%'
    }
  });

export default AdminScanner;