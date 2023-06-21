import React, { useEffect } from "react"
import { Text, TouchableOpacity, View, Image, ScrollView, ActivityIndicator} from "react-native"
import Toast, {ToastConfig} from "react-native-toast-message"
import FirstNames from "../../Assets/first-names.json"
import LastNames from "../../Assets/last-names.json"


export default function ChatList()
{
    const [loading, setLoading] = React.useState(true);
    const [pics, setPics] = React.useState<string[]>([]);

    // Load the function getAllProfilePics() and set the state of pics to the result
    useEffect(() => {
        const fetchProfilePictures = async () => {
            const pics = await getAllProfilePics() as string[];
            setPics(pics);
            setLoading(false);
        }
        fetchProfilePictures();
    }, []);

    if(loading) return <LoadingScreen />

    return <View style={{
        backgroundColor: "#252525",
        display: "flex",
        flexDirection: "column"
    }}>
        <Text>ChatList</Text>
        <ScrollView>

            {(new Array(50)).fill(0).map((_, i) => <ChatListItem pics={pics} key={i} />)} 
        </ScrollView>
    </View>
}

function ChatListItem({pics}: {pics: string[]})
{
    const [pic, setPic] = React.useState(pics[Math.floor(Math.random() * pics.length)]);

    // Pick a number between 1 and 7
    const num = Math.floor(Math.random() * 7) + 1;
    const name = generateRandomName();
    const message = generateRandomMessages();
    const showToast = makeMessageToast({
        text: "Hello World",
        profilePicture: pic,
        name: "John Doe"
    });
    return <TouchableOpacity
    onPress={showToast}
    style={{
        display: "flex",
        flexDirection: "row",
        marginBottom: 10

    }}>
        <Image
        source={{
            uri: pic as string,
            width: 50,
            height: 50
        }} 
        style={{
            borderRadius: 50,
            flex: 0
        }} />
        
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
    const response = await fetch("http://192.168.178.3:3005/randomImage").catch(err => {
        if(err) console.trace(err);
    })
    const data = await response?.blob().then(blob => new Promise<string | ArrayBuffer>((resolve, reject) =>
        {
            const reader = new FileReader();
            reader.onload = function() { resolve(reader.result);}
            reader.readAsDataURL(blob);
        }));
    return data;
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