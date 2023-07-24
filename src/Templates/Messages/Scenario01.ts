import { Message } from "../../types/Message";
import { Chat, GroupChat, PrivateChat, SupergroupChat } from "../../types/Chat";
import Chats from "../Chats/Scenario01";
import users from "../Users/User01";

const messages: Message[] =
    [
        {
            message_id: 1,
            chat: Chats[0],
            date: new Date(2023, 1, 1, 12, 0, 0).getTime(),
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
            verified_from_backend: true,
        },
        {
            message_id: 2,
            chat: Chats[0],
            date: new Date(2023, 1, 1, 12, 1, 0).getTime(),
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
            verified_from_backend: true,
        },
        {
            message_id: 1,
            chat: Chats[1],
            date: new Date(2023, 1, 2, 12, 0, 0).getTime(),
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
            verified_from_backend: true,
        },
        {
            message_id: 2,
            chat: Chats[1],
            date: new Date(2023, 1, 2, 12, 1, 0).getTime(),
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
            verified_from_backend: true,
        },
        {
            message_id: 1,
            chat: Chats[2],
            date: new Date(2023, 1, 3, 12, 0, 0).getTime(),
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
            verified_from_backend: true,
        },
        {
            message_id: 2,
            chat: Chats[2],
            date: new Date(2023, 1, 3, 12, 1, 0).getTime(),
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
            verified_from_backend: true,
        },
        {
            message_id: 1,
            chat: Chats[3],
            date: new Date(2023, 1, 4, 12, 0, 0).getTime(),
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
            verified_from_backend: true,
        },
        {
            message_id: 2,
            chat: Chats[3],
            date: new Date(2023, 1, 4, 12, 1, 0).getTime(),
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
            verified_from_backend: true,
        },
        {
            message_id: 1,
            chat: Chats[4],
            date: new Date(2023, 1, 5, 12, 0, 0).getTime(),
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
            verified_from_backend: true,
        },
        {
            message_id: 2,
            chat: Chats[4],
            date: new Date(2023, 1, 5, 12, 1, 0).getTime(),
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
            verified_from_backend: true,
        },
        {
            message_id: 1,
            chat: Chats[5],
            date: new Date(2023, 1, 6, 12, 0, 0).getTime(),
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
            verified_from_backend: true,
        },
        {
            message_id: 2,
            chat: Chats[5],
            date: new Date(2023, 1, 6, 12, 1, 0).getTime(),
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
            verified_from_backend: true,
        },
        {
            message_id: 1,
            chat: Chats[6],
            date: new Date(2023, 1, 7, 12, 0, 0).getTime(),
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
            verified_from_backend: true,
        },
        {
            message_id: 2,
            chat: Chats[6],
            date: new Date(2023, 1, 7, 12, 1, 0).getTime(),
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
            verified_from_backend: true,
        },
        {
            message_id: 1,
            chat: Chats[7],
            date: new Date(2023, 1, 8, 12, 0, 0).getTime(),
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
            verified_from_backend: true,
        },
        {
            message_id: 2,
            chat: Chats[7],
            date: new Date(2023, 1, 8, 12, 1, 0).getTime(),
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
            verified_from_backend: true,
        },
        {
            message_id: 1,
            chat: Chats[8],
            date: new Date(2023, 1, 9, 12, 0, 0).getTime(),
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
            verified_from_backend: true,
        },
        {
            message_id: 2,
            chat: Chats[8],
            date: new Date(2023, 1, 9, 12, 1, 0).getTime(),
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
            verified_from_backend: true,
        },
        {
            message_id: 1,
            chat: Chats[9],
            date: new Date(2023, 1, 10, 12, 0, 0).getTime(),
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
            verified_from_backend: true,
        },
        {
            message_id: 2,
            chat: Chats[9],
            date: new Date(2023, 1, 10, 12, 1, 0).getTime(),
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
            verified_from_backend: true,
        }
    ];

export default messages;