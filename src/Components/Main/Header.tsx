import React from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Avatar } from "@react-native-material/core";
import { NavigationContainer, NavigationProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "@rneui/themed";
import LinearGradient from 'react-native-linear-gradient';
import { sendHello } from "../../ts/ws";
import { useAppDispatch, useAppSelector } from "../../ts/global/hooks";
import { Message } from "../../types/Message";
import { Chat } from "../../types/Chat";
import RobustWebSocket from "../../ts/ModernWebSocket";
import DebugMenu from "../Debug/Menu";
import { User } from "../../types/User";
import * as userSlice from "../../ts/global/slices/user";
import { RenderAvatar } from "../Avatar/avatar";

export default function _Header({navigation}: {navigation: NavigationProp<any>})
{
  const { messages } = useAppSelector((state) => state.messages);
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [modalVisible, setModalVisible] = React.useState(false);

  try {
  const handleLongPress = () => {
    setModalVisible(true);
  }

  const handleUserChange = (userId: 1 | 2 | 3) => {
    dispatch(userSlice.setNewUser(userId));
    setModalVisible(false);
  };

  return <>
    <Header
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

      onLongPress={handleLongPress}

      // onLongPress={() => {
        // navigation.navigate("ExampleTest");
        // Show all messages with chat id and message id in an alert
        // Alert.alert("IDs", formattedMessages, [
        //   {
        //     text: "OK",
        //     onPress: () => console.log("OK Pressed"),
        //     style: "destructive",
        //   }
        // ]);
      // }}

      onPress={() => {
        // sendHello();
        new RobustWebSocket().sendMessageToServer({type: "hello", message: "Haiiiiii"}, Math.random().toString());
      }}
        >
          FuzzyTalk
        </Text>
    }
    rightComponent={
      <RenderAvatar name={user.first_name + " " + (user.last_name || "")} />
    }
    ViewComponent={LinearGradient}
    linearGradientProps={{
      colors: ['#000000', '#444444'],
      start: { x: 0, y: 0.1 },
      end: { x: 1, y: 0.1 },
    }}
    />
    <DebugMenu modalVisible={modalVisible} setModalVisible={setModalVisible} handleUserChange={handleUserChange} />
  </>

  }
  catch(err)
  {
    console.trace("Error: ", err);
    console.error(JSON.stringify(messages));
    throw new Error(JSON.stringify(messages));
  }

  
}