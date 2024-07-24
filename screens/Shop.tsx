import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native';
import Colors from "../constants/Colors";
import { useFonts, PressStart2P_400Regular } from '@expo-google-fonts/press-start-2p';
import AppLoading from 'expo-app-loading';

const Shop: React.FC = () => {

  let [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.description}>
          Attend events to earn points and unlock prizes!
        </Text>
        <View style={styles.pointsContainer}>
          <Text style={styles.points}>
            Your Points: 
          </Text>
          <Image
            source={require("../assets/token.png")}
            style={styles.tokenImage}
          ></Image>
          <Text style={styles.points}>x{20}</Text>
        </View>
        <View style={styles.photoContainer}>
          <View style={styles.leftSide}>
            <Image
              source={{ uri: 'https://via.placeholder.com/150' }}
              style={styles.smallPhoto}
            />
            <Image
              source={{ uri: 'https://via.placeholder.com/150' }}
              style={styles.smallPhoto}
            />
            <Image
              source={{ uri: 'https://via.placeholder.com/150' }}
              style={styles.smallPhoto}
            />
          </View>
          <Image
            source={{ uri: 'https://via.placeholder.com/450x450' }}
            style={styles.longPhoto}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.DARK_BLUE,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  description: {
    fontSize: 15,
    marginBottom: 10,
    fontFamily: 'PressStart2P_400Regular',
    color: Colors.YELLOW
  },
  pointsContainer: {
    // flex: 1,
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  points: {
    fontSize: 15,
    marginRight: 10,
    fontFamily: 'PressStart2P_400Regular',
    color: Colors.YELLOW
  },
  tokenImage: {
    width: 30, // Adjust the width as needed
    height: 30, // Adjust the height as needed
    marginRight: 5
  },
  photoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftSide: {
    flex: 1,
    justifyContent: 'space-between',
  },
  smallPhoto: {
    flex: 1,
    width: '100%',
    // height: undefined,
    // aspectRatio: 1,  // Assuming the aspect ratio is 1:1 for the small photos
    marginBottom: 10,
  },
  longPhoto: {
    flex: 1,
    width: '100%',
    // height: undefined,
    // aspectRatio: 3 / 1,  // Adjust the aspect ratio as needed
    marginLeft: 20,
    marginBottom: 10,
  },
});

export default Shop;
