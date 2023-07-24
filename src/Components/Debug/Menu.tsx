import React, { useState } from 'react';
import { View, Modal, Text, TouchableHighlight, TouchableOpacity, Alert } from 'react-native';
import Message from '../../types/Message';
import { User } from '../../types/User';
import { useAppDispatch, useAppSelector } from '../../ts/global/hooks';
import * as userSlice from '../../ts/global/slices/user';
import users from '../../Templates/Users/User01';
import { Chat } from '../../types/Chat';

const DebugMenu = () => {
    const user = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    const [modalVisible, setModalVisible] = useState(false);


    const handleLongPress = () => {
        setModalVisible(true);
    };

    const handleUserChange = (userId: 1 | 2 | 3) => {
        dispatch(userSlice.setNewUser(userId));
        setModalVisible(false);
    };

    return (
        <View style={{ marginTop: 22 }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={{ marginTop: 50, marginHorizontal: 20, backgroundColor: 'white', padding: 20 }}>
                    <Text style={{ marginBottom: 20 }}>Debug Menu</Text>

                    <TouchableHighlight
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <Text>Show All Messages</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        onPress={() => handleUserChange(1)}
                        style={{ marginTop: 20 }}
                    >
                        <Text>Change Current User to {users.find(u => u.id === 1)?.first_name} </Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        onPress={() => handleUserChange(2)}
                        style={{ marginTop: 20 }}
                    >
                        <Text>Change Current User to {users.find(u => u.id === 2)?.first_name}</Text>
                    </TouchableHighlight>
                </View>
            </Modal>

            <TouchableOpacity
                onLongPress={handleLongPress}
                style={{ padding: 10, backgroundColor: 'blue', marginTop: 20 }}
            >
                <Text style={{ color: 'white' }}>Long Press Me</Text>
            </TouchableOpacity>
        </View>
    );
};

const DebugMenu2 = ({ modalVisible, setModalVisible, handleUserChange }: { modalVisible: boolean, setModalVisible: (value: boolean) => void, handleUserChange: (id: 1 | 2 | 3) => void }) => {

    const { messages } = useAppSelector((state) => state.messages);

    const formattedMessages = messages.map((message) => {
        return `Message ID: ${message.message_id}, From: ${message.from.username}, To: ${(message.chat as Chat.PrivateChat).user.username} at: ${new Date(message.date).toISOString()}: ${message.text}`;
    }).join('\n\n');

    return <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            setModalVisible(!modalVisible);
        }}
    >
        <View style={{ marginTop: 50, marginHorizontal: 20, backgroundColor: 'white', padding: 20 }}>
            <Text style={{ marginBottom: 20 }}>Debug Menu</Text>

            <TouchableHighlight
                onPress={() => {
                    Alert.alert("IDs", formattedMessages, [
                        {
                            text: "OK",
                            onPress: () => console.log("OK Pressed"),
                            style: "destructive",
                        }
                    ]);
                    setModalVisible(!modalVisible);
                }}
            >
                <Text>Show All Messages</Text>
            </TouchableHighlight>

            <TouchableHighlight
                onPress={() => handleUserChange(1)}
                style={{ marginTop: 20 }}
            >
                <Text>Change Current User to {users.find(u => u.id === 1)?.first_name} </Text>
            </TouchableHighlight>

            <TouchableHighlight
                onPress={() => handleUserChange(2)}
                style={{ marginTop: 20 }}
            >
                <Text>Change Current User to {users.find(u => u.id === 2)?.first_name}</Text>
            </TouchableHighlight>
        </View>
    </Modal>
}

export default DebugMenu2;
