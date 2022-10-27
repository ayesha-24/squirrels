import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Nav } from "./components/Nav";
import { Grid } from "./components/Grid";
import { Score } from "./components/Score";

export default function App() {
  return (
    <View style={styles.container}>
      <Nav />
      <Grid />
      <Score />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 70,
  },
});
