import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  ImageBackground,
  Pressable,
} from "react-native";
import Colors from "../constants/Colors";
import EvilIcons from "@expo/vector-icons/EvilIcons";

const EventModal = ({ visible, onClose, title, children }) => {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={require("../assets/eventModal.png")}
        style={styles.image}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.overlay}>
          <View style={styles.header}>
            <Text style={styles.title}>{"Learning about LLMs"}</Text>
          </View>
          <View style={styles.info}>
            <View style={styles.infoItem}>
              <EvilIcons name="location" size={26} color={Colors.DARK_BLUE} />
              <Text style={styles.infoText}>{"Siebel 1403"}</Text>
            </View>
            <View style={styles.infoItem}>
              <EvilIcons name="clock" size={26} color={Colors.DARK_BLUE} />
              <Text style={styles.infoText}>{"12:45 PM"}</Text>
            </View>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>10 pts</Text>
          </View>
          <Text style={styles.description} numberOfLines={12}>
            {
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    height: 400,
    alignSelf: "center", // Center the card
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  imageStyle: {
    // borderRadius: 15,
  },
  overlay: {
    paddingLeft: 20,
    paddingTop: 50,
    paddingRight: 35,
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginTop: 30,
  },
  title: {
    fontSize: 20,
    color: Colors.DARK_BLUE,
    fontFamily: "Kufam_700Bold_Italic",
  },
  info: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  infoText: {
    marginLeft: 4,
    color: Colors.DARK_BLUE,
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    marginTop: 8,
    color: Colors.DARK_BLUE,
    fontSize: 16,
  },
  badge: {
    backgroundColor: "#F34429",
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  badgeText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default EventModal;
