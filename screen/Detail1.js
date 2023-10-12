import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Detail1({ navigation }) {
  const goToDetail3 = () => {
    navigation.navigate("Detail3"); // Naviga alla pagina "Detail4"
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detail 1 Screen</Text>
      <TouchableOpacity onPress={goToDetail3}>
        <Text style={styles.button}>Go to Detail3</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    fontSize: 16,
    color: "blue",
    textDecorationLine: "underline",
  },
});
