import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import ChatWindowHeader from '../Components/Chat/Header';
import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
import ChatInput from '../Components/Chat/Input';
import Bubble from '../Components/Chat/Bubble';

export default function ChatWindow({route, navigation}: {route: RouteProp<ParamListBase, "ChatWindow">, navigation: NavigationProp<any>}) {
    if(route.params) console.log(route.params)
    const params = route.params as ChatWindowParams;
    return <View
    style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#252525",
    }}>
        <ChatWindowHeader lastSeen={params.lastSeen} name={params.name} navigation={navigation} profilePicture={params.profilePicture} />
        <ChatWindowBody />
        <View 
        style={{
            position: "absolute",
            bottom: 0,
        }}>
            <ChatInput sendMessage={SendMessage} />
        </View>
    </View>
}


function SendMessage(message: string) {
    CreateMessageBubble(message, "me", new Date());
}

function ChatWindowBody()
{
    return (
        <ScrollView>
            {Array.from({length: 100}, (_, i) => i).map((_, i) => (
                    <View key={i}>
                        <Bubble text="Hello World!" self={i % 2 === 1} />
                    </View>
            )
            )}
            
        </ScrollView>
    )
}

function CreateMessageBubble(message: string, sender: string, time: Date)
{
    
}


export interface ChatWindowParams {
    name: string;
    profilePicture?: string;
    lastSeen: Date;
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

