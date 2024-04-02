import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme
import { NavigationContainer } from '@react-navigation/native';
import Home from "./screens/Home";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation/Navigation"

export default function App() {
	return (
		<GluestackUIProvider config={config}>
			<SafeAreaProvider>
				<NavigationContainer>
					<Navigation></Navigation>
				</NavigationContainer>
			</SafeAreaProvider>
		</GluestackUIProvider>
	);
}