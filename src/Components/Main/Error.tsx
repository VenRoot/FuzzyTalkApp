import { Action, Dispatch } from "@reduxjs/toolkit";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import chatListReducer, { initialChatListState } from "../../ts/reducers/ChatList"

export default function Error() {
    const [state, dispatch] = React.useReducer(chatListReducer, initialChatListState);
    return <View>
    <Text style={{
    color: "black"
}}>
    There was an error fetching the data. Please try again later.
</Text>
<TouchableOpacity
onPress={() => dispatch({type: "SET_RETRY", payload: true})}
style={{
    backgroundColor: "#0b93f6",
    padding: 10,
    borderRadius: 10,
    marginTop: 10
}}>
    <Text style={{
        color: "white"
    }}>Retry</Text>
</TouchableOpacity>
</View>
}