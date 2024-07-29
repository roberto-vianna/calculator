import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Botao({ color, background, onPress, text }) {
  return (
    <TouchableOpacity
      style={[styles.botao, { backgroundColor: background }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: color }]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    height: 60,
    width: 62,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  text: {
    fontSize: 32,
  },
});
