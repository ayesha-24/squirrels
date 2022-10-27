import { StyleSheet, View, Text } from "react-native";

export const Nav = () => (
  <View style={styles.header}>
    <Text style={styles.text}>🐿 Squirrelled away 🐿</Text>
  </View>
);

const styles = StyleSheet.create({
  text: {
    color: "#264653",
    fontSize: 20,
    textAlign: "center",
  },

  header: {
    backgroundColor: "#e6d9cb",
    padding: 20,
    marginBottom: 10,
    width: "90%",
    borderRadius: 10,
  },
});
