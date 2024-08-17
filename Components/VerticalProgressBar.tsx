import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from "../constants/Colors";

const VerticalProgressBar = ({userPoints = 0}) => {
    const percentageFilled = userPoints / 50.0; // 50 is the total number of points to earn
    const totalBoxes = 10;
    const filledBoxes = Math.trunc(totalBoxes * percentageFilled)
    // Create an array representing the boxes
    const boxes = Array(totalBoxes).fill(false).map((_, index) => index < filledBoxes).reverse();

    return (
        <View style={styles.container}>
        {boxes.map((isFilled, index) => (
            <View
            key={index}
            style={[
                styles.box,
                isFilled ? styles.filledBox : styles.unfilledBox,
            ]}
            />
        ))}
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 50,
    padding: 5,
    backgroundColor: '#000', // Background similar to the image
    borderRadius: 4,
    borderColor: '#00ffff', // Border color matching the image
    borderWidth: 2,
  },
  box: {
    flex: 1,
    marginBottom: 4, // Space between boxes
  },
  filledBox: {
    backgroundColor: Colors.TEAL, // Filled box color
  },
  unfilledBox: {
    backgroundColor: 'transparent', // Unfilled box color
    borderColor: Colors.TEAL, // Border color to match the outline
    borderWidth: 2,
  },
});

export default VerticalProgressBar;
