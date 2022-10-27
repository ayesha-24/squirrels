import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import Woodland from "../assets/woodland.jpeg";
import { useState } from "react";

export function Button() {
  const [chosenImage, setChosenImage] = useState(false);
  const [revealed, setRevealed] = useState("");
  // const [nutCount, setNutCount] = useState(0);

  //   function nutReveal() {
  //     const random = Math.floor(Math.random() * 2);
  //     if (random == 1) {
  //       setRevealed("🥜");
  //     } else {
  //       setRevealed("🥜");
  //     }
  //   }

  function handleImage() {
    setChosenImage(true);
    setRevealed("🥜");
  }

  return (
    <View>
      {!chosenImage && (
        <TouchableOpacity style={styles.button} onPress={handleImage}>
          <Image style={styles.image} source={Woodland} />
        </TouchableOpacity>
      )}
      {revealed === "🥜" && (
        <View style={styles.revealedContainer}>
          <View style={styles.under}>
            <Text>{revealed}</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    // backgroundColor: "#DABFA7",
    // padding: 5,
    width: "80%",
    marginBottom: 10,
    borderRadius: 10,
  },

  image: {
    width: 70,
    height: 70,
    margin: 5,
    borderRadius: 10,
  },

  revealedContainer: {
    // padding: 5,
    width: "80%",
    marginBottom: 20,
    borderRadius: 10,
  },

  under: {
    width: 70,
    height: 70,
    margin: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
