import { Message } from "../../types/Message";
import { Chat, GroupChat, PrivateChat, SupergroupChat } from "../../types/Chat";
import Chats from "../Chats/Scenario01";

const messages: Message[] =
[
    {
        message_id: 1,
        chat: Chats[0],
        date: Date.now(),
        from: {
            first_name: (Chats[0] as PrivateChat).first_name,
            is_bot: false,
            id: (Chats[0]).id,
            username: (Chats[0] as PrivateChat).username,
            last_name: (Chats[0] as PrivateChat).last_name,
            language_code: "de",
        },
        status: "sent",
        text: "Hello World!",
    },
    {
        message_id: 2,
        chat: Chats[0],
        date: Date.now(),
        from: {
            first_name: (Chats[0] as PrivateChat).first_name,
            is_bot: false,
            id: (Chats[0]).id,
            username: (Chats[0] as PrivateChat).username,
            last_name: (Chats[0] as PrivateChat).last_name,
            language_code: "de",
        },
        status: "sent",
        text: "The quick brown fox jumps over the lazy dog.",
    },
    {
        message_id: 1,
        chat: Chats[1],
        date: Date.now(),
        from: {
            first_name: (Chats[1] as PrivateChat).first_name,
            is_bot: false,
            id: (Chats[1]).id,
            username: (Chats[1] as PrivateChat).username,
            last_name: (Chats[1] as PrivateChat).last_name,
            language_code: "de",
        },
        status: "sent",
        text: "Hello World from the second!",
    },
    {
        message_id: 2,
        chat: Chats[1],
        date: Date.now(),
        from: {
            first_name: (Chats[1] as PrivateChat).first_name,
            is_bot: false,
            id: (Chats[1]).id,
            username: (Chats[1] as PrivateChat).username,
            last_name: (Chats[1] as PrivateChat).last_name,
            language_code: "de",
        },
        status: "sent",
        text: "The second quick brown fox jumps over the lazy dog.",
    },
    {
        message_id: 1,
        chat: Chats[2],
        date: Date.now(),
        from: {
            first_name: (Chats[2] as PrivateChat).first_name,
            is_bot: false,
            id: (Chats[2]).id,
            username: (Chats[2] as PrivateChat).username,
            last_name: (Chats[2] as PrivateChat).last_name,
            language_code: "de",
        },
        status: "sent",
        text: "Hello World from the third!",
    },
    {
        message_id: 2,
        chat: Chats[2],
        date: Date.now(),
        from: {
            first_name: (Chats[2] as PrivateChat).first_name,
            is_bot: false,
            id: (Chats[2]).id,
            username: (Chats[2] as PrivateChat).username,
            last_name: (Chats[2] as PrivateChat).last_name,
            language_code: "de",
        },
        status: "sent",
        text: "The third quick brown fox jumps over the lazy dog.",
    },
    {
        message_id: 1,
        chat: Chats[3],
        date: Date.now(),
        from: {
            first_name: (Chats[3] as PrivateChat).first_name,
            is_bot: false,
            id: (Chats[3]).id,
            username: (Chats[3] as PrivateChat).username,
            last_name: (Chats[3] as PrivateChat).last_name,
            language_code: "de",
        },
        status: "sent",
        text: "Hello World from the fourth!",
    },
    {
        message_id: 2,
        chat: Chats[3],
        date: Date.now(),
        from: {
            first_name: (Chats[3] as PrivateChat).first_name,
            is_bot: false,
            id: (Chats[3]).id,
            username: (Chats[3] as PrivateChat).username,
            last_name: (Chats[3] as PrivateChat).last_name,
            language_code: "de",
        },
        status: "sent",
        text: "The fourth quick brown fox jumps over the lazy dog.",
    },
    {
        message_id: 1,
        chat: Chats[4],
        date: Date.now(),
        from: {
            first_name: (Chats[4] as PrivateChat).first_name,
            is_bot: false,
            id: (Chats[4]).id,
            username: (Chats[4] as PrivateChat).username,
            last_name: (Chats[4] as PrivateChat).last_name,
            language_code: "de",
        },
        status: "sent",
        text: "Hello World from the fifth!",
    },
    {
        message_id: 2,
        chat: Chats[4],
        date: Date.now(),
        from: {
            first_name: (Chats[4] as PrivateChat).first_name,
            is_bot: false,
            id: (Chats[4]).id,
            username: (Chats[4] as PrivateChat).username,
            last_name: (Chats[4] as PrivateChat).last_name,
            language_code: "de",
        },
        status: "sent",
        text: "The fifth quick brown fox jumps over the lazy dog.",
    },
    {
        message_id: 1,
        chat: Chats[5],
        date: Date.now(),
        from: {
            first_name: (Chats[5] as PrivateChat).first_name,
            is_bot: false,
            id: (Chats[5]).id,
            username: (Chats[5] as PrivateChat).username,
            last_name: (Chats[5] as PrivateChat).last_name,
            language_code: "de",
        },
        status: "sent",
        text: "Hello World from the sixth!",
    },
    {
        message_id: 2,
        chat: Chats[5],
        date: Date.now(),
        from: {
            first_name: (Chats[5] as PrivateChat).first_name,
            is_bot: false,
            id: (Chats[5]).id,
            username: (Chats[5] as PrivateChat).username,
            last_name: (Chats[5] as PrivateChat).last_name,
            language_code: "de",
        },
        status: "sent",
        text: "The sixth quick brown fox jumps over the lazy dog.",
    },
    {
        message_id: 1,
        chat: Chats[6],
        date: Date.now(),
        from: {
            first_name: (Chats[6] as PrivateChat).first_name,
            is_bot: false,
            id: (Chats[6]).id,
            username: (Chats[6] as PrivateChat).username,
            last_name: (Chats[6] as PrivateChat).last_name,
            language_code: "de",
        },
        status: "sent",
        text: "Hello World from the seventh!",
    },
    {
        message_id: 2,
        chat: Chats[6],
        date: Date.now(),
        from: {
            first_name: (Chats[6] as PrivateChat).first_name,
            is_bot: false,
            id: (Chats[6]).id,
            username: (Chats[6] as PrivateChat).username,
            last_name: (Chats[6] as PrivateChat).last_name,
            language_code: "de",
        },
        status: "sent",
        text: "The seventh quick brown fox jumps over the lazy dog.",
    },
    {
        message_id: 1,
        chat: Chats[7],
        date: Date.now(),
        from: {
            first_name: (Chats[7] as PrivateChat).first_name,
            is_bot: false,
            id: (Chats[7]).id,
            username: (Chats[7] as PrivateChat).username,
            last_name: (Chats[7] as PrivateChat).last_name,
            language_code: "de",
        },
        status: "sent",
        text: "Hello World from the eighth!",
    },
    {
        message_id: 2,
        chat: Chats[7],
        date: Date.now(),
        from: {
            first_name: (Chats[7] as PrivateChat).first_name,
            is_bot: false,
            id: (Chats[7]).id,
            username: (Chats[7] as PrivateChat).username,
            last_name: (Chats[7] as PrivateChat).last_name,
            language_code: "de",
        },
        status: "sent",
        text: "The eighth quick brown fox jumps over the lazy dog.",
    },
    {
        message_id: 1,
        chat: Chats[8],
        date: Date.now(),
        from: {
            first_name: (Chats[8] as PrivateChat).first_name,
            is_bot: false,
            id: (Chats[8]).id,
            username: (Chats[8] as PrivateChat).username,
            last_name: (Chats[8] as PrivateChat).last_name,
            language_code: "de",
        },
        status: "sent",
        text: "Hello World from the ninth!",
    },
    {
        message_id: 2,
        chat: Chats[8],
        date: Date.now(),
        from: {
            first_name: (Chats[8] as PrivateChat).first_name,
            is_bot: false,
            id: (Chats[8]).id,
            username: (Chats[8] as PrivateChat).username,
            last_name: (Chats[8] as PrivateChat).last_name,
            language_code: "de",
        },
        status: "sent",
        text: "The ninth quick brown fox jumps over the lazy dog.",
    },
    {
        message_id: 1,
        chat: Chats[9],
        date: Date.now(),
        from: {
            first_name: (Chats[9] as PrivateChat).first_name,
            is_bot: false,
            id: (Chats[9]).id,
            username: (Chats[9] as PrivateChat).username,
            last_name: (Chats[9] as PrivateChat).last_name,
            language_code: "de",
        },
        status: "sent",
        text: "Hello World from the tenth!",
    },
    {
        message_id: 2,
        chat: Chats[9],
        date: Date.now(),
        from: {
            first_name: (Chats[9] as PrivateChat).first_name,
            is_bot: false,
            id: (Chats[9]).id,
            username: (Chats[9] as PrivateChat).username,
            last_name: (Chats[9] as PrivateChat).last_name,
            language_code: "de",
        },
        status: "sent",
        text: "The tenth quick brown fox jumps over the lazy dog.",
    }
];

export default messages;