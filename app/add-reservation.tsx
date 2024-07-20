// import { View, Text, StyleSheet } from "react-native";

// export default function AddReservation() {

import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import DateTimePicker from '@react-native-community/datetimepicker';

export default function AddReservation() {
  const [name, setName] = useState("");
  const [time, setTime] = useState(new Date());
  const [partySize, setPartySize] = useState("");
  const [contact, setContact] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const navigation = useNavigation();

  const handleAddReservation = () => {
    console.log({
      name,
      time,
      partySize,
      contact,
      specialRequests,
    });
    // Add logic to save the reservation
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Guest Name"
        value={name}
        onChangeText={setName}
      />
      {/* <DateTimePicker
        value={time}
        mode="time"
        display="default"
        onChange={(event, selectedTime) => setTime(selectedTime || time)}
        style={styles.input}
      /> */}
      <TextInput
        style={styles.input}
        placeholder="Party Size"
        value={partySize}
        onChangeText={setPartySize}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Contact Information"
        value={contact}
        onChangeText={setContact}
      />
      <TextInput
        style={styles.input}
        placeholder="Special Requests"
        value={specialRequests}
        onChangeText={setSpecialRequests}
      />
      <Button title="Add Reservation" onPress={handleAddReservation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
});
