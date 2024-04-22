import React, { useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import {
  Box,
  Modal,
  ButtonText,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  Heading,
  ModalCloseButton,
  Icon,
  ModalBody,
  ModalFooter,
  Button,
  Card,
  Text,
  HStack,
  Badge,
  BadgeText,
  BadgeIcon,
} from "@gluestack-ui/themed";
import { FontAwesome, Feather } from "@expo/vector-icons";

export type EventCardProps = {
  name: string;
  time: string;
  location: string;
  person: string;
  graphic: string;
  description: string;
};

const EventCard: React.FC<EventCardProps> = ({
  name,
  time,
  location,
  person,
  graphic,
  description,
}) => {
  const [showModal, setShowModal] = useState(false);
  const ref = React.useRef(null);
  return (
    <View style={styles.container}>
      <Pressable onPress={() => setShowModal(true)}>
        {/* <Box style={styles.card}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.timeLocationContainer}>
            <Text style={styles.time}>{time}</Text>
            <Text style={styles.location}>{location}</Text>
          </View>
          <Text style={styles.person}>{person}</Text>
          <Text style={styles.description}>{description}</Text>
        </Box> */}
        <Card size="md" variant="elevated" m="$3">
          <HStack space="lg">
            <Heading mb="$1" size="lg">
              {name}
            </Heading>
            <Badge size="sm" variant="solid" borderRadius="$full" action="info">
              <BadgeText>10 points</BadgeText>
            </Badge>
          </HStack>
          <HStack>
            <Text size="md">{location} @ </Text>
            <Text size="md">{time}</Text>
          </HStack>
          <Text size="sm">{description}</Text>
        </Card>
      </Pressable>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        finalFocusRef={ref}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="lg">{name}</Heading>
            <ModalCloseButton>
              <Feather name="x" size={24} color="black" />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <HStack>
              <Text size="md">{location} @ </Text>
              <Text size="md">{time}</Text>
            </HStack>
            <Text size="sm">{description}</Text>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              size="sm"
              action="secondary"
              mr="$3"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              size="sm"
              action="positive"
              borderWidth="$0"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>Explore</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  card: {
    backgroundColor: "#f0f0f0", // Light grey background
    borderColor: "black", // Black border color
    borderWidth: 1, // Border width
    borderRadius: 10, // Rounded corners
    padding: 10, // Padding inside the box
    marginBottom: 10, // Margin bottom for spacing between cards
    width: "90%", // Width of the card
    alignSelf: "center", // Center card within its parent container
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5, // Margin bottom for spacing below the name
  },
  timeLocationContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // Spread time and location to each side
    marginBottom: 5, // Margin bottom for spacing below the row
  },
  time: {
    fontSize: 16,
    color: "#555", // Darker grey for less emphasis
  },
  location: {
    fontSize: 16,
    color: "#555", // Darker grey for less emphasis
  },
  person: {
    fontSize: 16,
    marginBottom: 5, // Margin bottom for spacing below the person name
  },
  description: {
    fontSize: 14,
    color: "darkgrey", // Lighter text color for the description
  },
});

export default EventCard;
