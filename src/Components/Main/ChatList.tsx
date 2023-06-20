import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import Toast, {ToastConfig} from "react-native-toast-message"

export default function ChatList()
{
    return <View style={{
        backgroundColor: "#252525",
        display: "flex",
        flexDirection: "column"
    }}>
        <Text>ChatList</Text>
        {(new Array(10)).fill(0).map((_, i) => <ChatListItem key={i} />)}
    </View>
}

function ChatListItem()
{
    const showToast = makeMessageToast({
        text: "Hello World",
        profilePicture: "https://picsum.photos/200",
        name: "John Doe"
    });
    return <TouchableOpacity
    onPress={showToast}
    style={{
        display: "flex",
        flexDirection: "row",

    }}>
        <Text>ChatListItem</Text>
    </TouchableOpacity>
}

function makeMessageToast({text, profilePicture, name}: {text: string, profilePicture: string, name: string})
{
    return () => {
        Toast.show({
            type: 'message',
            text1: name,
            text2: text,
            visibilityTime: 4000,
            autoHide: true,
            topOffset: 60,
            bottomOffset: 40,
            onPress: () => {
                Toast.hide()
            },
            onHide: () => {
                console.log('onHide')
            },
            onShow: () => {
                console.log('onShow')
            }
        })
    }
}