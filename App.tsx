import {GluestackUIProvider, Text, Box} from "@gluestack-ui/themed";
import {config} from "@gluestack-ui/config"; // Optional if you want to use default theme
import {NavigationContainer} from "@react-navigation/native";
import Home from "./screens/Home";
import {SafeAreaProvider} from "react-native-safe-area-context";
import Navigation from "./navigation/Navigation";
import store from "./redux/store";
import {Provider} from "react-redux";

export default function App() {
    return (
        <Provider store={store}>
            <GluestackUIProvider config={config}>
                <SafeAreaProvider>
                    <NavigationContainer>
                        {/* <Text>
					Hello!
				</Text> */}
                        <Navigation></Navigation>
                    </NavigationContainer>
                </SafeAreaProvider>
            </GluestackUIProvider>
        </Provider>
    );
}