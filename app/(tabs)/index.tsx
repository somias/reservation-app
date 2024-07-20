import React, { useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from "react-native";

import { Link } from "expo-router";

import { firestore } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const reservations = [
  {
    id: "1",
    name: "John Doe",
    time: "6:00 PM",
    partySize: 4,
    contact: "john@example.com",
    specialRequests: "Window seat",
    table: 70,
  },
  {
    id: "2",
    name: "Jane Smith",
    time: "7:00 PM",
    partySize: 2,
    contact: "jane@example.com",
    specialRequests: "",
    table: 92,
  },
  // Add more reservations as needed
];

const ReservationCard = ({ reservation }) => (
  <View style={styles.card}>
    <Text style={styles.name}>{reservation.name}</Text>
    <Text style={styles.details}>Time: {reservation.time}</Text>
    <Text style={styles.details}>Party Size: {reservation.partySize}</Text>
    <Text style={styles.details}>Table: {reservation.table}</Text>
    {reservation.contact ? (
      <Text style={styles.details}>Contact: {reservation.contact}</Text>
    ) : null}
    {reservation.specialRequests ? (
      <Text style={styles.details}>
        Requests: {reservation.specialRequests}
      </Text>
    ) : null}
  </View>
);

const ReservationsScreen = () => {
  useEffect(() => {
    const getFirestoreData = async () => {
      const querySnapshot = await getDocs(
        collection(firestore, "reservations")
      );
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
      });
    };

    getFirestoreData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.date}>July 20, 2024</Text>
        <Text style={styles.title}>Today's Reservations</Text>
      </View>
      <FlatList
        data={reservations}
        renderItem={({ item }) => <ReservationCard reservation={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      <View style={styles.footer}>
        <Link href="/add-reservation" asChild>
          <Button
            title="Add Reservation"
            onPress={() => console.log("Add Reservation")}
          />
        </Link>
        <Button
          title="View All Reservations"
          onPress={() => console.log("View All Reservations")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  header: {
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  date: {
    fontSize: 16,
    color: "#888",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  list: {
    padding: 10,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  details: {
    fontSize: 14,
    color: "#555",
  },
  footer: {
    padding: 20,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default ReservationsScreen;
