import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import Modal from "react-native-modal";
import EventModal from "./EventModal";

const CustomModal = ({ visible, onClose }) => {
  return (
    <Modal
    isVisible={visible}
    onBackdropPress={onClose}
    backdropTransitionOutTiming={0}
    backdropOpacity={0.8}
    style={styles.modal}
    animationIn="fadeIn"
    animationOut="fadeOut"
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <View style={styles.content}>
          <EventModal />
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomModal;
