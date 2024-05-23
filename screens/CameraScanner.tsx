import React, {useEffect, useState} from "react";
import {
	Box, Button, ButtonText, ButtonIcon, View, ExternalLinkIcon
} from "@gluestack-ui/themed";
import {CameraView, useCameraPermissions} from "expo-camera";
import {useIsFocused} from "@react-navigation/native";
import {Linking} from "react-native";


// import { Button, ButtonText, ButtonIcon, AddIcon } from "@gluestack-ui/themed";

const CameraScanner: React.FC = () => {
	const [status, requestPermission] = useCameraPermissions();
	const [hasPermission, setHasPermission] = useState(false);
	const [url, setUrl] = useState("");
	const isFocused = useIsFocused();

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
			{isFocused && hasPermission ? (<CameraView mute={true} width="100%" height="100%" facing={"back"}
				onBarcodeScanned={handleBarCodeScanned}
				barcodeScannerSettings={{barcodeTypes: ["qr"]}}/>) : (
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

export default CameraScanner;