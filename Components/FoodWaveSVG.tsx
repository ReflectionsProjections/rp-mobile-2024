import React from 'react';
import { View, Text } from 'react-native'
import { StyledText } from './Text';

import Foodwave1 from '../assets/SVGs/foodwave/food_wave.svg'
import Foodwave2 from '../assets/SVGs/foodwave/food_wave2.svg'
import Foodwave3 from '../assets/SVGs/foodwave/food_wave3.svg'
import Foodwave4 from '../assets/SVGs/foodwave/food_wave4.svg'


interface FoodWaveSVGProps {
    foodWave: Number;  // Ensure you define all props your component expects.
  }
  
const FoodWaveSVG: React.FC<FoodWaveSVGProps> = ({ foodWave }) => {
    const getSVG = () => {
        switch(foodWave) {
            case 1:
                return <Foodwave1/>;
            case 2:
                return <Foodwave2/>;
            case 3:
                return <Foodwave3/>;
            case 4:
                return <Foodwave4/>;
            default:
                return <Text>No SVG available</Text>
        }
    };

    return (
        <View style={{ 
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative', 
        }}>
          {getSVG()}
          <StyledText variant="medium" position='absolute' top={5}>
            {`Food Wave: ${foodWave}`}
          </StyledText>
        </View>
    );
};

export default FoodWaveSVG;