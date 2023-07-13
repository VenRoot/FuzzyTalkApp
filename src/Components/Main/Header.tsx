import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "@react-native-material/core";
import { NavigationContainer, NavigationProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "@rneui/themed";
import LinearGradient from 'react-native-linear-gradient';

export default function _Header({navigation}: {navigation: NavigationProp<any>})
{
  return <Header
  style={{
    height: "40%",
    width: "100%",
    flexDirection: "row"
  }}
  leftComponent={
    <Text style={{
      flexShrink: 0,
      width: "300%",
      color: "#fff",
      fontSize: 30,
      fontWeight: "bold",
      fontFamily: "Arial",
      paddingLeft: 10,
    }}

    onLongPress={() => {
      navigation.navigate("ExampleTest");
    }}
      >
        FuzzyTalk
      </Text>
  }
  rightComponent={
    <Avatar />
  }
  ViewComponent={LinearGradient}
  linearGradientProps={{
    colors: ['#000000', '#444444'],
    start: { x: 0, y: 0.1 },
    end: { x: 1, y: 0.1 },
  }}
  />
}