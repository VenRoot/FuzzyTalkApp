import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native"
import { StyleSheet } from "react-native"
import Message from "../../types/Message";
import { useAppSelector } from "../../ts/global/hooks";
import { ActivityIndicator } from "@react-native-material/core";


export default function Bubble({ message }: { message: Message }) {

    const user = useAppSelector((state) => state.user);
    const msgIdAlert = () =>
        Alert.alert("IDs", JSON.stringify(message, undefined, 2), [
            {
                text: "OK",
                onPress: () => console.log("OK Pressed"),
                style: "destructive",
            }
        ]);

    const self = message.from.id === user.id;
    return (
        <>
            <View style={{ position: 'relative', width: "auto" }}>

                <View style={self ? styles.chatBubbleRight : styles.chatBubble}>
                    <TouchableOpacity onPress={msgIdAlert}>
                        <View style={styles.chatContentContainer}>
                            <Text style={styles.chatBubbleText}>
                                {message.text || "No message"}
                            </Text>
                            {self && message.status === "sending" &&
                                <ActivityIndicator style={{
                                    flexDirection: "row",
                                    justifyContent: "flex-start",
                                    left: "-100%",
                                }}
                                />}
                            {message.status === "sent" &&
                                <View style={self ? styles.timestampContainerRight : styles.timestampContainer}>
                                    <Text style={styles.chatBubbleTimestamp}>
                                        {new Date(message.date).toLocaleTimeString().split(":").slice(0, 2).join(":")}
                                    </Text>
                                </View>
                            }
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </>


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
    },

    chatBubbleTimestamp: {
        color: '#eeeeee',
        fontSize: 10,
        lineHeight: 24,
        fontFamily: "Arial",
    },

    chatContentContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: "5%",
    },

    timestampContainer: {
        alignSelf: 'flex-end',
        marginRight: 20
    },

    timestampContainerRight: {
        alignSelf: 'flex-end',
        marginRight: 10
    },
});