import React from "react";
import { StyleSheet, View } from "react-native";
import { gStyle } from "./styles/style";
import { useFonts } from "expo-font";
import Navigation from "./components/Navigation";

// const fonts = () =>
//   Font.loadAsync({
//     "poppins-reg": require("./assets/Fonts/Poppins-Regular"),
//     "poppins-thin-italic": require("./assets/Fonts/Poppins-ThinItalic"),
//   });

export default function App() {
  const [loaded] = useFonts({
    "poppins-reg": require("./assets/Fonts/Poppins-Regular.ttf"),
    "poppins-thin-italic": require("./assets/Fonts/Poppins-ThinItalic.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={gStyle.main}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
