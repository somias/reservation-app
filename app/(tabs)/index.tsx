import { Image, StyleSheet, Platform, View, Text } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Button } from "@/components/Button";

import { firestore } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";

export default function HomeScreen() {
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
    <View style={styles.container}>
      <ParallaxScrollView
        headerBackgroundColor={{
          light: "#A1CEDC",
          dark: "#1D3D47",
        }}
        headerImage={
          <Image
            source={require("@/assets/images/logo.png")}
            style={styles.reactLogo}
          />
        }
      >
        <View style={styles.contentWrapper}>
          <Text>Hello</Text>
        </View>
      </ParallaxScrollView>
      <View style={styles.buttonWrapper}>
        <Button title="Add" onPress={() => console.log("Add")} />
        <Button title="Remove" onPress={() => console.log("Remove")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
    resizeMode: "contain",
  },
  contentWrapper: {},
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 32,
    paddingBottom: 12,
    backgroundColor: "white",
  },
});
