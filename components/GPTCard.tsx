import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const GPTCard = ({ name, time, location, person, graphic, description }) => {
    return (
        <ImageBackground source={require('../assets/border.png')} style={styles.background} imageStyle={styles.imageStyle}>
          <View style={styles.card}>
            <View style={styles.header}>
              <Text style={styles.title}>{name}</Text>
              {/* <FontAwesome name="star" size={24} color="navy" /> */}
            </View>
            <View style={styles.info}>
              <View style={styles.infoItem}>
                <FontAwesome name="map-marker" size={16} color="navy" />
                <Text style={styles.infoText}>{location}</Text>
              </View>
              <View style={styles.infoItem}>
                <FontAwesome name="clock-o" size={16} color="navy" />
                <Text style={styles.infoText}>{time}</Text>
              </View>
              <View style={styles.points}>
                <Text style={styles.pointsText}>{10} pts</Text>
              </View>
            </View>
            <Text style={styles.description}>{description}</Text>
          </View>
        </ImageBackground>
      );
    };
    
    const styles = StyleSheet.create({
      background: {
        margin: 8,
        overflow: 'hidden',
        width: "90%"
      },
      imageStyle: {
        resizeMode: 'stretch',
      },
      card: {
        padding: 16,
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'navy',
      },
      info: {
        flexDirection: 'row',
        marginTop: 8,
      },
      infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 16,
      },
      infoText: {
        marginLeft: 4,
        color: 'navy',
      },
      points: {
        backgroundColor: '#FF6347',
        borderRadius: 4,
        paddingHorizontal: 8,
        justifyContent: 'center',
      },
      pointsText: {
        color: 'white',
        fontWeight: 'bold',
      },
      description: {
        marginTop: 8,
        color: 'navy',
      },
    });

export default GPTCard;
