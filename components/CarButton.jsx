import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const Button = ({ type, text, onPress }) => {
  const backgroundColor = type == "primary" ? "#171A20CC" : "#FFFFFFA6";
  const color = type == "primary" ? "#FFFFFF" : "#171A20";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor, color }]}
        onPress={() => onPress()}
      >
        <Text style={style.title}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
  },
  button: {
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  title: {
    fontSize: 12,
    fontWeight: "500",
    textTransform: "capitalize",
  },
});

export default Button;
