import React from "react";
import { Image } from "@gluestack-ui/themed";
import { styled } from "@gluestack-style/react";

const Images = styled(Image, 
    {
        variants: {
            variant: {
                qrCode: {
                    height: 300,
                    width: 300, 
                    borderRadius: "$lg",
                    marginTop: "$5",
                },
                loginLogo: {
                    height: 300,
                    width: 300, 
                    borderRadius: "$lg",
                    marginTop: "$5",
                }
            }
        }
    }
);

export { Images };