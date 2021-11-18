import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";

const Articles = ({ navigation, route }) => {
  return (
    <View style={style.main}>
      <FlatList
        data={route.params}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Article", item)}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
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
