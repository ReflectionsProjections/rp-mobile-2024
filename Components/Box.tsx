import { styled } from "@gluestack-style/react";
import { Box } from "@gluestack-ui/themed";

const StyledBox = styled(Box, 
    {
        variants: {
            variant: {
                foodWave: {
                    height: 50,
                    width: 300, 
                    bg: "$lightgray",
                    borderRadius: "$full"
                }
            }
        }
    }
);

export { StyledBox };