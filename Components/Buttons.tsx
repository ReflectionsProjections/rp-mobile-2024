import React from "react";
import { Pressable } from "@gluestack-ui/themed";
import { Button } from "@gluestack-ui/themed";
import { styled } from "@gluestack-style/react";

const StyledButton = styled(Button, 
    {
        variants: {
            styleVariant: {
                login: {
                    height: 50,
                    width: 250, 
                    marginBottom: "$3",
                    bg: "$lightgray",
                }
            },
        },
    }, 
    {
        descendantStyle: ['_text']
    }
);

export { StyledButton };