import React from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Item } from "./Item";

const Articles = ({ navigation, route }) => {
  const shortid = require("shortid");

  return (
    <View style={style.main}>
      <FlatList
        data={route.params}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Article", item)}
          >
            <Item item={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => shortid.generate()}
      />
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Articles;
