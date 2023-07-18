import { FlatList, Text, View } from "react-native"
import { StyleSheet } from "react-native"
import Message from "../../types/Message";


export default function Bubble({message}: {message: Message})
{
    const self = message.from.id === message.chat.id;
    return (
        <View style={self ? styles.chatBubbleRight : styles.chatBubble}>
            <View style={{padding: "5%"}}>
                <Text style={styles.chatBubbleText}>
                    {message.text || "No message"}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    chatBubble: {
        backgroundColor: '#252525',
        borderColor: "#bebebe",
        borderWidth: 1,
        borderRadius: 50,
        padding: 10,
        marginBottom: 5,
        marginTop: 5,
        marginRight: 50,
        marginLeft: 10,
        maxWidth: '60%',
        minWidth: "10%",
        alignSelf: 'flex-start'
    },

    chatBubbleRight: {
        backgroundColor: '#000000',
        borderColor: "#bebebe",
        borderWidth: 1,
        borderRadius: 50,
        padding: 10,
        marginBottom: 5,
        marginTop: 5,
        marginRight: 10,
        marginLeft: 50,
        maxWidth: '60%',
        minWidth: "10%",
        alignSelf: 'flex-end'
    },

    chatBubbleText: {
        color: '#eeeeee',
        fontSize: 15,
        lineHeight: 24,
        fontFamily: "Arial"
    }
});