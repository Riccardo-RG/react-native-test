import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Detail2() {
  const navigation = useNavigation();
  const goToDetail4 = () => {
    navigation.navigate("Detail4"); // Naviga alla pagina "Detail4"
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Detail2 Screen</Text>
      <TouchableOpacity onPress={goToDetail4}>
        <Text style={styles.button}>Go to Detail4</Text>
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
    color: "blue", // Cambia il colore del testo come desideri
    textDecorationLine: "underline", // Sottolinea il testo
  },
});
