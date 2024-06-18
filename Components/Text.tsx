import { styled } from "@gluestack-style/react";
import { Text } from "@gluestack-ui/themed";


const StyledText = styled(Text, 
    {
        variants: {
            variant: {
                bigbold: {
                    fontSize: 48,
                    fontWeight: "$bold",
                    textAlign: 'center'
                }, 
                bigText: {
                    fontSize: 60,
                    fontWeight: "$bold",
                    textAlign: 'center',
                    fontFamily: "Kufam_700Bold_Italic"
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
                    fontFamily: "Kufam_700Bold_Italic"
                }
            },
        },
    }, 
    {
        descendantStyle: ['_text']
    }
);

export { StyledText };