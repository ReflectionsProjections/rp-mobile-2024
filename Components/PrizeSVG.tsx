import React from "react";
import { View, Text } from "react-native";
import { StyledText } from "./Text";

import Question1 from "../assets/SVGs/myRP/blue-question.svg";
import Question2 from "../assets/SVGs/myRP/purple-question.svg";
import Question3 from "../assets/SVGs/myRP/pink-question.svg";
import Button from "../assets/SVGs/myRP/button.svg";
import ToteBag from "../assets/SVGs/myRP/tote-bag.svg";
import Cap from "../assets/SVGs/myRP/cap.svg";

interface PrizeSVGProps {
  prizeNum: number;
  attendeePoints: number;
  token: string;
}

const FoodWaveSVG: React.FC<PrizeSVGProps> = ({
  prizeNum,
  attendeePoints,
  token,
}) => {
  const size = 100;

  const getSVG = () => {
    if (token) {
      // Map SVGs based on prizeNum and attendeePoints
      const svgMap: { [key: number]: JSX.Element } = {
        1: <Button width={size} height={size}/>,
        2: attendeePoints >= 20 ? <ToteBag width={size} height={size}/> : <Question2 width={size} height={size}/>,
        3: attendeePoints >= 35 ? <Cap width={size} height={size}/> : <Question3 width={size} height={size}/>,
      };
      return svgMap[prizeNum] || <Text>No SVG available</Text>;
    } else {
      const svgMap: { [key: number]: JSX.Element } = {
        1: <Question1 width={size} height={size}/>,
        2: <Question2 width={size} height={size}/>,
        3: <Question3 width={size} height={size}/>,
      };
      return svgMap[prizeNum] || <Text>No SVG available</Text>;
    }
  };

  return getSVG();
};

export default FoodWaveSVG;
