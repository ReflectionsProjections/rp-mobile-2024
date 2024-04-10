import React, {useEffect, useState} from "react";
import {Box, View, Text} from "@gluestack-ui/themed";
import {CameraView, useCameraPermissions} from "expo-camera/next";
import {Linking, StyleSheet, TouchableOpacity} from "react-native";
import { useIsFocused } from "@react-navigation/native";


// import { Button, ButtonText, ButtonIcon, AddIcon } from "@gluestack-ui/themed";

const Camera: React.FC = () => {
	const [permission, requestPermission] = useCameraPermissions();
	const [url, setUrl] = useState("");
	const isFocused = useIsFocused();


	useEffect(() => {
		requestPermission();
	});

	if (!permission?.granted) {
		Linking.openSettings();
		return <Text>Missing Camera Permissions</Text>;
	}

	const handleBarCodeScanned = ({ type, data }) => {
		if (data != url) {
			alert(`Bar code with type ${type} and data ${data} has been scanned!`);
			setUrl(data);
		}
	};

	return (
		<Box width="100%" height="100%" justifyContent="center" alignItems="center">
			{isFocused && <CameraView width="100%" height="100%" facing="back"
				onBarcodeScanned={handleBarCodeScanned}
				barcodeScannerSettings={{barcodeTypes: ["qr"]}}
			/>}
		</Box>
	);
};

export default Camera;