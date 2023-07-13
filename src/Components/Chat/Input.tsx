import { IconButton } from "@react-native-material/core";
import { useState } from "react";
import { View, TextInput } from "react-native";
import { Icon } from "@rneui/themed";

export default function ChatInput(props: ChatInputProps)
{
    const [message, setMessage] = useState("");

    return (
        <View style={{
            width: "100%",
            maxHeight: 100,
            flexDirection: "row",
            backgroundColor: "#161616",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <TextInput
                style={{
                    width: "90%",
                    maxHeight: "100%",
                    height: "100%",
                    color: "#fff",
                    fontSize: 20,
                    fontWeight: "bold",
                    fontFamily: "Arial",
                    textAlign: "left",
                    alignSelf: "center",
                    
                }}
                placeholder="Type a message..."
                placeholderTextColor="#fff"
                multiline={true}
                onChangeText={(text) => setMessage(text)}
                value={message}
            />
            <IconButton
                cancelable
                onPress={() => {props.sendMessage(message); setMessage("");}}
                style={{
                    width: "10%",
                    height: "100%",
                }}
                icon={<Icon name="send" color="#ffffff" size={25} type="material" />}
            />
        </View>
    );
}

interface ChatInputProps
{
    sendMessage: (message: string) => void;
}