import React, { useEffect } from "react"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { Text, TouchableOpacity, View, Image, ScrollView, ActivityIndicator, Modal, GestureResponderEvent, StyleSheet, Pressable} from "react-native"
import Toast, {ToastConfig} from "react-native-toast-message"
import FirstNames from "../../Assets/first-names.json"
import LastNames from "../../Assets/last-names.json"
import { Navigations } from "../../types/Navigations"
import {Chat, PrivateChat} from "../../types/Chat";
import { useAppSelector, useAppDispatch } from "../../ts/global/hooks"
import * as messageSlice from "../../ts/global/slices/messages"
import * as chatSlice from "../../ts/global/slices/chats"
import chatListStatesReducer, { initialChatListState } from "../../ts/reducers/ChatList"
import ChatListError from "../../Components/Main/Error"
import { RenderAvatar } from "../Chat/Header"
import { Message } from "../../types/Message"

export function ChatList({navigation}: {navigation: NavigationProp<any>})
{
    const [retry, setRetry] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [pics, setPics] = React.useState<string[]>([]);
    const [error, setError] = React.useState(false);

    // Load the function getAllProfilePics() and set the state of pics to the result
    useEffect(() => {
        const fetchProfilePictures = async () => {
            setRetry(false);
            let pics;

            try {
                pics = await getAllProfilePics()
            }
            catch(err)  {
                console.error(err);
                setError(true);
                setLoading(false);
                return; // Verlässt die Funktion fetchProfilePictures, wenn ein Fehler auftritt
            }
            setError(false);
            setPics(pics as any);
            setLoading(false);
        }
        fetchProfilePictures();
    }, [retry]);

    if(loading) return <LoadingScreen />
    if(error) return <View>
            <Text style={{
            color: "black"
        }}>
            There was an error fetching the data. Please try again later.
        </Text>
        <TouchableOpacity
        onPress={() => setRetry(true)}
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
        
    return <View style={{
        backgroundColor: "#252525",
        display: "flex",
        flexDirection: "column",
        padding: 10,
        width: "100%",
    }}>
        <ScrollView>

            {(new Array(50)).fill(0).map((_, i) => <ChatListItem name={generateRandomName()} navigation={navigation} pic={pics[Math.floor(Math.random() * pics.length)]} key={i} />)} 
        </ScrollView>
    </View>
}



export default function NewChatList({navigation}: {navigation: NavigationProp<any>})
{
    const [state, dispatch] = React.useReducer(chatListStatesReducer, initialChatListState);

    const ChatListDispatch = useAppDispatch();
    const chats = useAppSelector((state) => state.chats);
    const { messages } = useAppSelector((state) => state.messages);

        // Load the function getAllProfilePics() and set the state of pics to the result
        useEffect(() => {
            const fetchProfilePictures = async () => {
                dispatch({type: "SET_RETRY", payload: false});
                let pics;
    
                try {
                    pics = await getAllProfilePics()
                }
                catch(err)  {
                    console.error(err);
                    dispatch({type: "SET_ERROR", payload: true});
                    dispatch({type: "SET_LOADING", payload: false});
                    return; // Verlässt die Funktion fetchProfilePictures, wenn ein Fehler auftritt
                }
                dispatch({type: "SET_ERROR", payload: false});
                dispatch({type: "SET_PICS", payload: pics as any});
                dispatch({type: "SET_LOADING", payload: false});
            }
            fetchProfilePictures();
        }, [state.retry]);

        if(state.loading) return <LoadingScreen />
        if(state.error) return <ChatListError />
        return <View style={{
            backgroundColor: "#252525",
            display: "flex",
            flexDirection: "column",
            padding: 10,
            width: "100%",
        }}>
            <ScrollView>
                {chats.messages.map((chat, i) => <NewChatListItem chat={chat} navigation={navigation} key={i} 
                latestMessage={getMessageWithHighestId(messages, chat.id) || undefined}/>)}
            </ScrollView>
        </View>

}

function NewChatListItem(props: {chat: Chat, navigation: NavigationProp<any>, latestMessage?: Message})
{
    const {chat, navigation, latestMessage} = props;
    const [modal, setModal] = React.useState<string>("");
    const showToast = makeMessageToast({
        text: "Hello World",
        profilePicture: (chat as Chat.PrivateChat).user.profilePicture,
        name: "John Doe"
    });

    const handlePress = () => {
        navigation.navigate<Navigations>("ChatWindow", {name: `${(chat as Chat.PrivateChat).first_name || ""} ${(chat as Chat.PrivateChat).last_name || ""}`, profilePicture: (chat as Chat.PrivateChat).user.profilePicture, lastSeen: new Date().toISOString(), chatId: chat.id });
    }

    const handleLongPress = (event: GestureResponderEvent) => {
        console.log(event.target);
        setModal("Hello World");
    }

    const fullName = `${(chat as Chat.PrivateChat).first_name || ""} ${(chat as Chat.PrivateChat).last_name || ""}`;

    let chatMessage = "";
    if(latestMessage?.photo) chatMessage = "Photo: ";
    else if(latestMessage?.animation) chatMessage = "GIF: ";
    else if(latestMessage?.video) chatMessage = "Video: ";
    else if(latestMessage?.audio) chatMessage = "Audio: ";

    if(latestMessage?.text) chatMessage += latestMessage.text;
    if(latestMessage?.voice) chatMessage = "Voice Message";

    return <View>
    <View style={styles.centeredView}>
        <Modal
            animationType="fade"
            transparent={true}
            visible={modal.length !== 0}
            onRequestClose={() => setModal("")}
            onDismiss={() => setModal("")}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <ModalOption setModal={setModal} name="Message" option={showToast} />
                </View>
            </View>
        </Modal>
    </View>
    <TouchableOpacity
    onPress={handlePress}
    onLongPress={handleLongPress}
    style={{
        display: "flex",
        flexDirection: "row",
        marginBottom: 10

    }}>
        {
            <RenderAvatar name={fullName} size={50} profilePicture={(chat as Chat.PrivateChat).user.profilePicture} /> 
        }

        <View style={{ flex: 1, paddingLeft: 10, backgroundColor: "#252525" }}>
            <Text style={{
                color: "white",
                fontSize: 20,
            }}>{fullName}</Text>
            <Text
            style={{
                color: "white",
            }}>{chatMessage}</Text>
        </View>
        
    </TouchableOpacity>
</View>;

    
}

function ChatListItem({name, pic, navigation}: {name: string, pic: string, navigation: NavigationProp<any>})
{
    // Pick a number between 1 and 7
    const num = Math.floor(Math.random() * 7) + 1;
    const message = generateRandomMessages();
    const [modal, setModal] = React.useState<string>("");
    const showToast = makeMessageToast({
        text: "Hello World",
        profilePicture: pic,
        name: "John Doe"
    });

    console.log(modal);

    const handlePress = () => {
        navigation.navigate<Navigations>("ChatWindow", {name: name, profilePicture: pic, lastSeen: new Date().toISOString() });
    }

    const handleLongPress = (event: GestureResponderEvent) => {
        console.log(event.target);
        setModal("Hello World");
    }

    return (
    <View>
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modal.length !== 0}
                onRequestClose={() => setModal("")}
                onDismiss={() => setModal("")}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <ModalOption setModal={setModal} name="Message" option={showToast} />
                    </View>
                </View>
            </Modal>
        </View>
        <TouchableOpacity
        onPress={handlePress}
        onLongPress={handleLongPress}
        style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: 10

        }}>
            {
                pic ? <Image
                source={{
                    uri: pic as string,
                    width: 50,
                    height: 50
                }} 
                style={{
                    borderRadius: 50,
                    flex: 0
                }} /> : <RenderAvatar name={name} size={50} />
            }
            

            <View style={{ flex: 1, paddingLeft: 10, }}>
                <Text style={{
                    color: "white",
                    fontSize: 20,
                }}>{name}</Text>
                <Text
                style={{
                    color: "white",
                }}>{message}</Text>
            </View>
            
        </TouchableOpacity>
    </View>
    );
}

function LoadingScreen()
{
    return <View style={{
        backgroundColor: "#252525",
        display: "flex",
        flexDirection: "column"
    }}>
        <ActivityIndicator size="large" />
    </View>
}

function makeMessageToast({text, profilePicture, name}: {text: string, profilePicture?: string, name: string})
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

async function getAllProfilePics()
{
    const allURIs = Array.from({length: 100}, (_, i) => "http://192.168.178.3:3005/randomImage/"+i);

    const Promises = allURIs.map((uri) => {
        return fetch(uri).then((response) => {
            return response.blob();
        }).then((blob) => {
            return new Promise<string | ArrayBuffer>((resolve, reject) =>
            {
                const reader = new FileReader();
                reader.onload = function() { resolve(reader.result);}
                reader.readAsDataURL(blob);
            });
        });
    })
    const pics = await Promise.all(Promises);
    return pics; 
}

function generateRandomName()
{
    const firstName = FirstNames[Math.floor(Math.random() * FirstNames.length)];
    const lastName = LastNames[Math.floor(Math.random() * LastNames.length)];
    return `${firstName} ${lastName}`;
}

function GetRandomProfilePicture()
{
    return <Image source={{
        uri: "http://localhost:3005/randomImage",
        width: 50,
        height: 50
    }}
    style={{
            borderRadius: 50,
            flex: 0
        }}></Image>
}

function generateRandomMessages()
{
    const messages = [
        "Hey, what's up?",
        "How's your day going?",
        "I'm so tired today.",
        "Guess what? I won the lottery!",
        "Have you tried that new restaurant downtown?",
        "I can't wait for summer vacation!",
        "Do you like to dance?",
        "Coffee or tea?",
        "I'm learning to play the guitar.",
        "What's your favorite color?",
        "I just adopted a puppy. It's so cute!",
        "Have you ever been skydiving?",
        "I love reading books in my spare time.",
        "Do you enjoy cooking?",
        "I wish I could travel the world.",
        "Let's go hiking this weekend.",
        "What's your favorite movie genre?",
        "I'm attending a music concert tonight.",
        "Have you ever tried bungee jumping?",
        "I love playing video games.",
        "Who is your favorite actor/actress?",
        "Let's meet up for lunch sometime.",
        "I'm excited for the upcoming festival.",
        "Do you have any pets?",
        "I enjoy painting and drawing.",
        "What's the last book you read?",
        "Let's plan a road trip together.",
        "I love watching sunsets by the beach.",
        "What's your favorite cuisine?",
        "I'm taking a yoga class tomorrow.",
        "Have you ever been scuba diving?",
        "Let's go to the amusement park this weekend.",
        "I enjoy playing sports in my free time.",
        "What's your dream destination?",
        "I'm trying to learn a new language.",
        "Movie night at my place tonight. Are you in?",
        "Let's go camping next month.",
        "I love solving puzzles and riddles.",
        "What's your favorite music genre?",
        "I'm attending a photography workshop next week.",
        "Let's try a new recipe for dinner tonight.",
        "I enjoy gardening and growing plants.",
        "What's your all-time favorite TV show?",
        "I'm planning to run a marathon next year.",
        "Let's have a picnic in the park.",
        "Have you ever been to a music festival?",
        "I'm going to visit an art exhibition this weekend.",
        "What's your favorite outdoor activity?",
        "Let's go stargazing tonight.",
        "I'm volunteering at a local charity event tomorrow."
      ]

        return messages[Math.floor(Math.random() * messages.length)];
      
}

function ModalOption({setModal, name, option}: {setModal: (modal: string) => void, name: string, option: Function})
{
    return <Pressable
    style={[styles.button, styles.buttonClose]}
    onPress={() => {
        option();
        setModal("")
    }}>
    <Text style={styles.textStyle}>{name}</Text>
  </Pressable>
}


const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      color: "black"
    },
  });



  function getMessageWithHighestId(messages: Message[], chatId: number): Message | null {
    let maxMessageId = -1;
    let maxMessage: Message | null = null;
  
    for (const message of messages) {
      if (message.chat.id === chatId) {
        if (message.message_id > maxMessageId) {
          maxMessageId = message.message_id;
          maxMessage = message;
        }
      }
    }
  
    return maxMessage;
  }