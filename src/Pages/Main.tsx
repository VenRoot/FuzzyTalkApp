// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatList from '../Components/Main/ChatList';

export function HomeScreen() {
  return (
    <View style={{ backgroundColor: "#252525", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{
        fontSize: 30,
        color: 'red',
      }}>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ChatList} />
      </Stack.Navigator>
  );
}

export default App;