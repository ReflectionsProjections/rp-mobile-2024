import { GluestackUIProvider, Text, Box, View } from "@gluestack-ui/themed";
import React from "react";
import { StyleSheet } from 'react-native';
import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme
import {
	Button,
	ButtonText,
	ButtonIcon,
	AddIcon,
	Image
} from "@gluestack-ui/themed";


const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  justifyContent: 'space-between',
	  alignItems: 'center',
	  paddingVertical: 100,
	},
	logo: {
	  width: 350,
	  height: 350,
	  marginTop: 20
	},
	welcomeText: {
	  fontSize: 40,
	  fontWeight: 'bold',
	  textAlign: 'center',
	  margin: 0,
	},
	yearText: {
		fontSize: 48,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 20,
		color: 'darkmagenta'
	  },
	sponsorText: {
		fontSize: 16,
		fontWeight: 'normal',
		textAlign: 'center',
		marginBottom: 20,
	  },
	  loginButton: {
		marginBottom: 10,
		width: 250,
		height: 50
	  },
  });

const RPLogo = () => (
	<Image
	  source={{uri: "https://i.pinimg.com/originals/89/83/6f/89836f3b1e6a51355dcb2652afea9e49.png"}}
	  style={styles.logo}
	  borderRadius="$xl"
	  alt="RP Logo"
	/>
  );

export default function App() {
	return (
		<GluestackUIProvider config={config}>
			<Box style={styles.container}>
				<RPLogo />
				<View>
				<Text style={styles.welcomeText}>Welcome to</Text>
				<Text style={styles.yearText}>R|P 2024!</Text>
				<Text style={styles.sponsorText}>Powered by SPONSOR!!!</Text>
				</View>
				<Button size="md" variant='solid' action="primary"
					isDisabled={false}
					isFocusVisible={false}
					onPress={() => console.log("login pressed!")}
					style={styles.loginButton}
				>
					<ButtonText>Login</ButtonText>
				</Button>
			</Box>
		</GluestackUIProvider>
	);
}