import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import Woodland from "../assets/woodland.jpeg";
import { Button } from "./Button";
import { useState } from "react";

export const Grid = () => (
  <View style={styles.container}>
    <Button />
    <Button />
    <Button />
    <Button />
    <Button />
    <Button />
    <Button />
    <Button />
    <Button />
    <Button />
    <Button />
    <Button />
    <Button />
    <Button />
    <Button />
    <Button />
    <Button />
    <Button />
    <Button />
    <Button />
    <Button />
    <Button />
    <Button />
    <Button />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginBottom: 10,
  },

  button: {
    backgroundColor: "#DABFA7",
    padding: 5,
    width: "80%",
    marginBottom: 20,
    borderRadius: 10,
  },

  image: {
    width: 70,
    height: 70,
    margin: 10,
  },
});
