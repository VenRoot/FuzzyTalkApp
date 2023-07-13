// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatList from '../Components/Main/ChatList';
import { Wrap } from '@react-native-material/core';
import OwnHeader from '../Components/Main/Header';

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

function App({ navigation }: { navigation: NavigationProp<any>}) {
  console.log(navigation);
  return (
    <>
    <Wrap style={{ height: "100%", width: "100%"}}>
      <OwnHeader navigation={navigation} />
    <ChatList navigation={navigation} />
    </Wrap>
    </>
  );
}

export default App;