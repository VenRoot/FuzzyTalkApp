import React, {useEffect, useRef } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import ChatWindowHeader from '../Components/Chat/Header';
import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
import ChatInput from '../Components/Chat/Input';
import Bubble from '../Components/Chat/Bubble';
import { Message, TemporaryMessage } from '../types/Message';

import { useAppSelector, useAppDispatch } from '../ts/global/hooks';
import * as messageSlice from "../ts/global/slices/messages";
import { useSendMessage } from '../Hooks/useSendMessage';


export default function ChatWindow({route, navigation}: {route: RouteProp<ParamListBase, "ChatWindow">, navigation: NavigationProp<any>}) {
    const params = route.params as ChatWindowParams;

    const dispatch = useAppDispatch();
    const { messages } = useAppSelector((state) => state.messages);
    const tempMessages = useAppSelector((state) => state.tempMessages);
    const chat = useAppSelector((state) => state.chats).chats.find(chat => chat.id === params.chatId);
    const user = useAppSelector((state) => state.user);
    if(!chat) throw new Error("Chat not found");

    const [localMessages, setLocalMessages] = React.useState<Message[]>([]);
    const sendMessage = useSendMessage(params.chatId, user, chat, addMessage, addLocalMessage);

    useEffect(() => {
        const chatMessages = messages.filter(msg => msg.chat.id === params.chatId);
        const __tempChatMessages = tempMessages.tempMessages.filter(msg => msg.chat.id === params.chatId);
        setLocalMessages([...chatMessages, ...__tempChatMessages]);
        console.log("ChatWindow: ", chatMessages)
        console.log("ChatId: ", params.chatId)
    }, []);

    function addLocalMessage(message: Message, requestId: string)
    {
        // Remove the message with the requestId from the local state and add the new message
        setLocalMessages(prev => prev.filter((msg: any) => msg.requestId !== requestId).concat(message));
    }


    // Should only be called when a message is recieved from the backend
    function addMessage(message: Message)
    {
        dispatch(messageSlice.addMessage(message));
        setLocalMessages(prev => [...prev, message]);
    }

    function updateMessage(old_message_id: number, message: Message)
    {
        // setLocalMessages(prev => prev.map(msg => msg.message_id === old_message_id ? message : msg));


        const _message = localMessages.findIndex(message => message.message_id === old_message_id);
        if(!message) return;

        // Update the index of the message array and set the state
        localMessages[_message] = message;
        setLocalMessages(prev => [...prev]);

    }

    const msgIdAlert = () => 
    Alert.alert("IDs", localMessages.map(i => i.message_id).join(", "), [
        {
            text: "OK",
            onPress: () => console.log("OK Pressed"),
            style: "destructive",
        }
    ]);

    return <View
    style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#252525",
    }}>
        <ChatWindowHeader onPress={msgIdAlert} lastSeen={new Date(params.lastSeen)} name={params.name} navigation={navigation} profilePicture={params.profilePicture} />
        <ChatWindowBody messages={localMessages} />
        <View 
        style={{
            position: "absolute",
            bottom: 0,
        }}>
            <ChatInput sendMessage={sendMessage} />
        </View>
    </View>
}


function ChatWindowBody({messages}: {messages: Message[]})
{
    const scrollViewRef = useRef<ScrollView>(null);
    try
    {
        return (
            <ScrollView ref={scrollViewRef} style={{
                height: "100%",
                width: "100%",
                bottom: "0%",
                maxHeight: "80%",
            }}>
                {messages.sort((a, b) => a.message_id - b.message_id ).map((message, index) => <Bubble key={index} message={message} />
                )}
            </ScrollView>
        )
    }
    catch(err)
    {
        console.error(err);
        console.error(JSON.stringify(messages));
    }
    
}


export interface ChatWindowParams {
    name: string;
    profilePicture?: string;
    lastSeen: string;
    chatId: number;
}


// @deprecated use ChatWindowParams instead
export interface ChatWindowProps {
    props: {
        name: string;
        profilePicture?: string;
        lastSeen: Date;
        
    }
    navigationProps: {
        route: RouteProp<ParamListBase, "ChatWindow">;
        navigation: NavigationProp<any>;
    };
};


