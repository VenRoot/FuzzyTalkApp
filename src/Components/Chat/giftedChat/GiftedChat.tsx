import { useCallback, useEffect, useState } from "react";
import { GiftedChat } from "react-native-gifted-chat";


export default function ChatWindow() {
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        setMessages([
          {
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
              avatar: 'http://192.168.178.3:3005/randomImage/1',
            },
          },
        ])
      }, []);

      const onSend = useCallback((messages = [] as Message[]) => {
        setMessages(previousMessages =>
          GiftedChat.append(previousMessages, messages),
        )
      }, []);

      return (
        <GiftedChat
            locale="de"
            dateFormat="DD.MM.YYYY"
            showUserAvatar
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}
        />
      )
}

interface Message {
    _id: number | string;
    text: string;
    createdAt: Date | number;
    user: {
        _id: number | string;
        name?: string;
        avatar?: string | number | any;
    }
}