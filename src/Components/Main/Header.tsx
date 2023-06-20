import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "@react-native-material/core";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();


function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{
        fontSize: 30,
        color: 'red',
        fontStyle: 'italic',
      }}>Home Screen</Text>
    </View>
  );
}


export default function Navigation()
{
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home uwu" component={HomeScreen}
        options={{
          title: "My home",
        }} />
        </Stack.Navigator>
  );
}