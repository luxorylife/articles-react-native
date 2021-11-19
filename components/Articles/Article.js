import React from "react";
import { View, Text, Linking } from "react-native";

export const Article = ({ route }) => {
  return (
    <View style={{ backgroundColor: "#ccc", margin: 10, padding: 5 }}>
      <Text style={{ fontSize: 30, color: "black", marginBottom: 20 }}>
        {route.params.title}
      </Text>
      <Text>{route.params.content}</Text>
      <Text
        style={{ fontStyle: "italic", marginTop: 20 }}
        onPress={() => Linking.openURL(route.params.url)}
      >{`Source: ${route.params.url}`}</Text>
    </View>
  );
};
