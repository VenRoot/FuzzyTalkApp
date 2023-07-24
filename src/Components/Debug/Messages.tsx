import { Alert } from "react-native";
import { useAppSelector } from "../../ts/global/hooks";
import { Chat } from "../../types/Chat";
import Message from "../../types/Message";

export default function ShowMessages(messages: Message[])
{
    try {
      const formattedMessages = messages.map((message) => {
        return `Message ID: ${message.message_id}, From: ${message.from.username}, To: ${(message.chat as Chat.PrivateChat).user.username}: ${message.text}`;
    }).join('\n\n');

    return Alert.alert("IDs", formattedMessages, [
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
          style: "destructive",
        }
      ]);
    }
    catch(err)
    {
        return Alert.alert("Error", (err as any).message, [
            {
            text: "OK",
            onPress: () => console.log("OK Pressed"),
            style: "destructive",
            }
        ]);
    }
}