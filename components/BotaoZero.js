import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function BotaoZero({ color, background, onPress, text }) {
  return (
    <TouchableOpacity
      style={[styles.botaoZero, { backgroundColor: background }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: color }]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botaoZero: {
    height: 60,
    width: 144,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  text: {
    fontSize: 32,
  },
});
