import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { getEvents } from '../api/getEvents';
import Colors from '../constants/Colors';

interface Event {
  eventId: string;
  name: string;
}

interface EventDropdownProps {
  token: string;
}

const EventDropdown: React.FC<EventDropdownProps> = ({ token }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventData = await getEvents(token);
        setEvents(eventData);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, [token]);

  return (
    <View style={styles.container}>
      <RNPickerSelect
        onValueChange={(value) => setSelectedEvent(value)}
        items={events.map((event) => ({
          label: event.name,
          value: event.eventId,
        }))}
        style={pickerSelectStyles}
        placeholder={{ label: 'Select an event...', value: null}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    paddingRight: -10
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: Colors.WHITE
  },
  selectedEvent: {
    marginTop: 20,
    fontSize: 16,
    color: Colors.WHITE,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderWidth: 3,
    borderColor: Colors.YELLOW,
    backgroundColor: Colors.DARK_BLUE,
    borderRadius: 6,
    color: Colors.WHITE,
    fontFamily: "Inter_500Medium",
    paddingRight: 12, // to ensure the text is never behind the icon
    
  },
  inputAndroid: {
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: Colors.WHITE,
    paddingRight: 12, // to ensure the text is never behind the icon
  },
});

export default EventDropdown;