import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function FirstScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>First Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Detail3")}
      >
        <Text style={styles.buttonText}>Go to Detail screen 3</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Detail4")}
      >
        <Text style={styles.buttonText}>Go to Detail screen 4</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0", // Colore dello sfondo
  },
  button: {
    backgroundColor: "#007AFF", // Colore del pulsante
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: "white", // Colore del testo del pulsante
    fontSize: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
