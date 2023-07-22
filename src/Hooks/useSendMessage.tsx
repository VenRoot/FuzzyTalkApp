import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../ts/global/hooks";
import { Animation, Video, PhotoSize, TemporaryMessage } from "../types/Message";
import * as messageSlice from "../ts/global/slices/messages";
import * as tempMessageSlice from "../ts/global/slices/tempMessages";
import { User } from '../types/User';
import { Chat } from '../types/Chat';
import { Message } from "../types/Message";
import RobustWebSocket from "../ts/ModernWebSocket";


/**
 * This hook will take a chat, a sender and a reciever and return a function you can call to send a message to the server
 * @param chatId 
 * @param from 
 * @param chat 
 * @returns 
 */
export function useSendMessage(chatId: number, from: User, chat: Chat, addLocalMessage: Function, setLocalState: (message: Message, requestId: string) => void)
{
    const dispatch = useAppDispatch();
    const { messages } = useAppSelector((state) => state.messages);

    function generateLocalMessageId(chat: Chat)
    {
        
        const chatMessages = messages.filter(msg => msg.chat.id === chat.id);
        const lastMessage = chatMessages[chatMessages.length - 1];
        if(lastMessage) return lastMessage.message_id + 1;
        return -1;
    }

    const handleTempMessageToMessagesStore = (tempMessage: TemporaryMessage) => {
        const newMessage = {
            ...tempMessage,
            requestId: undefined,
            status: "sent"
        } as Message;

        // Dispatch the addMessage action to add the new message to the messages slice
        dispatch(messageSlice.addMessage(newMessage));

        // Then, dispatch to remove the message from the temporaryMessages slice
        dispatch(tempMessageSlice.removeMessage(tempMessage));

        console.log("Temp message: ", tempMessage);
        // Update the local state
        setLocalState(newMessage, tempMessage.requestId);
    }

    const sendMessage = useCallback(async (messageText?: string, animation?: Animation, video?: Video, photo?: PhotoSize[], caption?: string) => {
        if(!messageText && !animation && !video && !photo) return;
        
        if(messageText && messageText?.trim() === "") return;

        const newMessage: TemporaryMessage = {
            text: messageText,
            animation: animation,
            video: video,
            photo: photo,
            from: from,
            chat: chat,
            date: Math.floor(Date.now() / 1000),
            message_id: generateLocalMessageId(chat),
            status: "sending",
            caption: caption,
            requestId: generateRequestId()
        };

        // Add the message to the local state
        addLocalMessage(newMessage);

        // Add the message to the redux store
        dispatch(tempMessageSlice.addMessage(newMessage));

        // Send the message to the server
        const ws = new RobustWebSocket();
        const serverResponse = await ws.sendMessageToServer({message: newMessage, type: "newMessage"}, newMessage.requestId) as { type: "string", message: TemporaryMessage};

        // const serverResponse = await sendMessageToServer(newMessage) as TemporaryMessage;
        console.log("Server response: ", serverResponse.message);

        // updateMessage(newMessage.message_id, {
        //     ...newMessage,
        //     message_id: serverResponse.message_id,
        //     date: serverResponse.date,
        //     status: serverResponse.status
        // });

        handleTempMessageToMessagesStore(serverResponse.message);
        console.log("New message: ", newMessage);
        console.log("Server response: ", serverResponse.message);

        // updateLocalMessage(newMessage.message_id, {
        //     ...newMessage,
        //     message_id: serverResponse.message_id,
        //     date: serverResponse.date,
        //     status: serverResponse.status
        // });

    }, [dispatch, chatId, addLocalMessage])

    return sendMessage;
}

function generateRequestId(): string {
    return Math.random().toString(36).substring(2);
  }