import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SecondScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Second Screen</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Detail5")}
        >
          <Text style={styles.buttonText}>Go to Detail screen 5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Detail6")}
        >
          <Text style={styles.buttonText}>Go to Detail screen 6</Text>
        </TouchableOpacity>
      </View>
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
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
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
});
