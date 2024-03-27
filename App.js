import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme
import {
	Button,
	ButtonText,
	ButtonIcon,
	AddIcon,
} from "@gluestack-ui/themed";

export default function App() {
	return (
		<GluestackUIProvider config={config}>
			<Box width="100%" height="100%" justifyContent="center" alignItems="center">
				<Text>Open up App.js to start working on your app!</Text>
				<Button size="md" variant='solid' action="primary"
					isDisabled={false}
					isFocusVisible={false}
					onPress={() => console.log("pressed!")}
				>
					<ButtonText>Add </ButtonText>
					<ButtonIcon as={AddIcon} />
				</Button>
			</Box>
		</GluestackUIProvider>
	);
}