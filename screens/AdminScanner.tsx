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

// import { Button, ButtonText, ButtonIcon, AddIcon } from "@gluestack-ui/themed";

const AdminScanner: React.FC = () => {
	const [status, requestPermission] = useCameraPermissions();
	const [hasPermission, setHasPermission] = useState(false);
	const [url, setUrl] = useState("");
	const isFocused = useIsFocused();
    const token = useAppSelector((state: RootState) => state.token);

	useEffect(() => {
		requestPermission().then((e) => {
			setHasPermission(e?.granted);
		});
	}, []);

	const handleBarCodeScanned = ({type, data}) => {
		if (data != url) {
			alert(`Bar code with type ${type} and data ${data} has been scanned!`);
			setUrl(data);
		}
	};

	// mute={true} is used to mute the camera so we dont need mic permissions
	// https://github.com/expo/expo/issues/27984 of course it is undocumented <333

	return (
		<Box width="100%" height="100%" justifyContent="center" alignItems="center">
			{isFocused && hasPermission ? (
                <View style = {styles.cameraContainer}>
                    {token && (
                        <View style = {styles.dropdownContainer}>
                            <EventDropdown token={token}/>
                        </View>
                    )}
                    <CameraView 
                        mute={true} width="100%" height="100%" facing={"back"}
                        onBarcodeScanned={handleBarCodeScanned}
                        barcodeScannerSettings={{barcodeTypes: ["qr"]}}
                    />
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
      top: 20,
      right: 20,
      zIndex: 1000
    },
  });

export default AdminScanner;