import React from "react";
import Main from "../Main";
import Articles from "../Articles";
import { Article } from "../Articles/Article";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: "Main" }}
        />
        <Stack.Screen
          name="Articles"
          component={Articles}
          options={{ title: "Articles" }}
        />
        <Stack.Screen
          name="Article"
          component={Article}
          options={{ title: "Article" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
