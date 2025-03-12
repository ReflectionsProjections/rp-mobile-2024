import { styled } from "@gluestack-style/react";
import { Text } from "@gluestack-ui/themed";
import { useFonts, Kufam_400Regular, Kufam_700Bold, Kufam_700Bold_Italic, Kufam_600SemiBold } from "@expo-google-fonts/kufam";

const StyledText = styled(Text, 
    {
        variants: {
            variant: {
                bigbold: {
                    fontSize: 48,
                    fontWeight: "$bold",
                    textAlign: 'center'
                }, 
                profileText: {
                    fontSize: 40,
                    fontWeight: "$bold",
                    textAlign: 'center',
                    fontFamily: "Kufam_700Bold"
                },
                footerText: {
                    fontSize: 40,
                    fontWeight: '$bold',
                    textAlign: 'center',
                    fontFamily: "Kufam_600SemiBold"
                },
                basic: {
                    fontSize: "$md",
                    fontWeight: "$normal",
                    textAlign: 'center'
                },
                medium: {
                    fontSize: 30,
                    fontWeight: "$semibold",
                    textAlign: "center",
                    color: "$black",
                    fontFamily: "Kufam_700Bold"
                }
            },
        },
    }, 
    {
        descendantStyle: ['_text']
    }
);

export { StyledText };