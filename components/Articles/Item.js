import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

export const Item = ({ item }) => {
  return (
    <View style={styles.main}>
      <Text>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#aac",
    margin: 10,
    alignItems: "center",
  },
});
