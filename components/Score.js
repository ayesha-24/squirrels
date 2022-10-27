import { Text, View, StyleSheet } from "react-native";

export const Score = () => (
  <View style={styles.bottomNav}>
    <Text style={styles.nutText}>🥜 Nuts: 0/10</Text>
    <Text style={styles.seedText}>🫘 Seeds: 0/50</Text>
  </View>
);

const styles = StyleSheet.create({
  bottomNav: {
    backgroundColor: "#e6d9cb",
    color: "#264653",
    fontSize: 20,
    padding: 20,
    marginBottom: 10,
    width: "90%",
    justifyContent: "space-evenly",
    flexDirection: "row",
    borderRadius: 10,
  },

  //   nutText: {
  //     textAlign: "left",
  //   },

  //   seedText: {
  //     textAlign: "right",
  //   },
});
