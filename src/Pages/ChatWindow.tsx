import React, { useEffect, useRef } from 'react';
import { View, Text, ScrollView } from 'react-native';
import ChatWindowHeader from '../Components/Chat/Header';
import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
import ChatInput from '../Components/Chat/Input';
import Bubble from '../Components/Chat/Bubble';
import { Message } from '../types/Message';

import { useAppSelector, useAppDispatch } from '../ts/global/hooks';
import * as messageSlice from "../ts/global/slices/messages";


export default function ChatWindow({route, navigation}: {route: RouteProp<ParamListBase, "ChatWindow">, navigation: NavigationProp<any>}) {
    const params = route.params as ChatWindowParams;
    console.log(params);

    const dispatch = useAppDispatch();
    const { messages } = useAppSelector((state) => state.messages);

    const [localMessages, setLocalMessages] = React.useState<Message[]>([]);

    useEffect(() => {
        const chatMessages = messages.filter(msg => msg.chat.id === params.chatId);
        setLocalMessages(chatMessages);
        console.log("ChatWindow: ", chatMessages)
        console.log("ChatId: ", params.chatId)
    }, []);


    // Should only be called when a message is recieved from the backend
    function addMessage(message: Message)
    {
        dispatch(messageSlice.addMessage(message));
        // setLocalMessages(prev => [...prev, message]);
    }

    async function SendMessage(message: string) {
        if(message.trim() === "") return;
        addMessage(message);
    }


    function createMessage(text: string): Message
    {
        
    }

    return <View
    style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#252525",
    }}>
        <ChatWindowHeader lastSeen={new Date(params.lastSeen)} name={params.name} navigation={navigation} profilePicture={params.profilePicture} />
        <ChatWindowBody messages={localMessages} addMessage={addMessage} />
        <View 
        style={{
            position: "absolute",
            bottom: 0,
        }}>
            <ChatInput sendMessage={SendMessage} />
        </View>
    </View>
}


function ChatWindowBody({messages, addMessage}: {messages: Message[], addMessage: (message: Message) => void})
{
    const scrollViewRef = useRef<ScrollView>(null);

    useEffect(() => {
        return;
        scrollViewRef.current?.scrollToEnd({animated: false});

        (async () => {
            const res = await fetch("https://api.chucknorris.io/jokes/random");
            const json = await res.json();

            const otherMessage: Message = {
                message_id: 1,
                from: {
                    id: 2,
                    username: "chucknorris",
                    first_name: "Chuck",
                    last_name: "Norris",
                    is_bot: false,
                    language_code: "en"
                },
                chat: {
                    id: 2,
                    type: "private",
                    username: "chucknorris",
                    first_name: "Chuck",
                    last_name: "Norris",
                },
                date: new Date().getTime(),
                text: json.value,
                status: "sent",
            };

            const ownMessage: Message = {
                message_id: 2,
                from: {
                    id: 1,
                    username: "ven",
                    first_name: "Ven",
                    last_name: "Wolf",
                    is_bot: false,
                    language_code: "en"
                },
                chat: {
                    id: 2,
                    type: "private",
                    username: "chucknorris",
                    first_name: "Chuck",
                    last_name: "Norris",
                },
                date: new Date().getTime(),
                text: "Wtf, that's not funny",
                status: "sent",
            };

            addMessage(otherMessage);
            addMessage(ownMessage);
            
            // addMessage(json.value);
            // addMessage("Wtf, that's not funny");
        })();
    }, [])
    return (
        <ScrollView ref={scrollViewRef}>
            {messages.map((message, index) => <Bubble key={index} message={message} />
            )}
        </ScrollView>
    )
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