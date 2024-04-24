import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Login from "./screens/Login";
import Navigation from "./navigation/Navigation"
import React from "react";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<GluestackUIProvider config={config}>
			<SafeAreaProvider>
				<NavigationContainer>
					<Stack.Navigator screenOptions={{ headerShown: false}}>
						<Stack.Screen name="Login" component={Login}/>
						<Stack.Screen name="Main" component={Navigation}/>
					</Stack.Navigator>
				</NavigationContainer>
			</SafeAreaProvider>
		</GluestackUIProvider>
	);
}