import React from "react";
import { Image } from "@gluestack-ui/themed";
import { styled } from "@gluestack-style/react";

const Images = styled(Image, 
    {
        variants: {
            variant: {
                loginLogo: {
                    height: 300,
                    width: 300, 
                    borderRadius: "$xl",
                    marginTop: "$5",
                }
            }
        }
    }
);

export { Images };