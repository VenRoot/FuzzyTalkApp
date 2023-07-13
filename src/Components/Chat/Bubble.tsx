import { FlatList, Text, View } from "react-native"
import { StyleSheet } from "react-native"


export default function Bubble({text, self}: {text: string, self: boolean})
{
    return (
        <View style={self ? styles.chatBubbleRight : styles.chatBubble}>
            <Text>
                {text}
            </Text>
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
        width: '60%',
        alignSelf: 'flex-start'
    },

    chatBubbleRight: {
        backgroundColor: '#0b93f6',
        borderColor: "#bebebe",
        borderWidth: 1,
        borderRadius: 50,
        padding: 10,
        marginBottom: 5,
        marginTop: 5,
        marginRight: 10,
        marginLeft: 50,
        width: '60%',
        alignSelf: 'flex-end'
    }
});