import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput, Alert } from "react-native";
import { gStyle } from "../../styles/style";
import { API_KEY } from "../../constants/api_key";

const Main = ({ navigation }) => {
  const [text, setText] = useState("");

  const loadScene = async () => {
    if (text.length === 0) return;

    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${text}&from=${new Date().toLocaleDateString()}&sortBy=popularity&apiKey=${API_KEY}`
      );
      const data = await response.json();

      navigation.navigate("Articles", data.articles);
    } catch (err) {
      Alert.alert(err);
    }

    // Alert.alert("23");
  };

  return (
    <View style={style.main}>
      <Text style={gStyle.text}>
        Write down what you would like to read about
      </Text>
      <TextInput
        style={gStyle.input}
        value={text}
        onChangeText={(value) => setText(value)}
      />
      <Button title="Go on" onPress={loadScene} />
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100,
  },
});

export default Main;
