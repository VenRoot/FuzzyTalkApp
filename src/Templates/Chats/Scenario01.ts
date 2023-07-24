import { Chat } from "../../types/Chat";
import users from "../Users/User01";

const chats: Chat[] = 
[
    ...users.map(user => {
        return {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            type: "private",
            username: user.username,
            user: user
        } as Chat
    }),
    // {
    //     id: 1,
    //     first_name: "Chat",
    //     last_name: "One",
    //     type: "private",
    //     username: "Chat1",
    //     user: {
    //         id: 1,
    //         first_name: "Chat",
    //         last_name: "One",
    //         username: "Chat1",
    //         is_bot: false,
    //         profilePicture: "",
    //     }
    // },
    // {
    //     id: 2,
    //     first_name: "Chat",
    //     last_name: "Second",
    //     type: "private",
    //     username: "Chat2",
    //     user: {
    //         id: 2,
    //         first_name: "Chat",
    //         last_name: "Second",
    //         username: "Chat2",
    //         is_bot: false,
    //         profilePicture: "",
    //     }
    // },
    // {
    //     id: 3,
    //     first_name: "Chat",
    //     last_name: "Third",
    //     type: "private",
    //     username: "Chat3",
    //     user: {
    //         id: 3,
    //         first_name: "Chat",
    //         last_name: "Third",
    //         username: "Chat3",
    //         is_bot: false,
    //         profilePicture: "",
    //     }
    // },
    {
        id: 4,
        first_name: "Chat",
        last_name: "Fourth",
        type: "private",
        username: "Chat4",
        user: {
            id: 4,
            first_name: "Chat",
            last_name: "Fourth",
            username: "Chat4",
            is_bot: false,
            profilePicture: "",
        }
    },
    {
        id: 5,
        first_name: "Chat",
        last_name: "Fitfth",
        type: "private",
        username: "Chat5",
        user: {
            id: 5,
            first_name: "Chat",
            last_name: "Fitfth",
            username: "Chat5",
            is_bot: false,
            profilePicture: "",
        }
    },
    {
        id: 6,
        first_name: "Chat",
        last_name: "Sixth",
        type: "private",
        username: "Chat6",
        user: {
            id: 6,
            first_name: "Chat",
            last_name: "One",
            username: "Chat6",
            is_bot: false,
            profilePicture: "",
        }
    },
    {
        id: 7,
        first_name: "Chat",
        last_name: "Seventh",
        type: "private",
        username: "Chat7",
        user: {
            id: 7,
            first_name: "Chat",
            last_name: "Seventh",
            username: "Chat7",
            is_bot: false,
            profilePicture: "",
        }
    },
    {
        id: 8,
        first_name: "Chat",
        last_name: "Eighth",
        type: "private",
        username: "Chat8",
        user: {
            id: 8,
            first_name: "Chat",
            last_name: "Eighth",
            username: "Chat8",
            is_bot: false,
            profilePicture: "",
        }
    },
    {
        id: 9,
        first_name: "Chat",
        last_name: "Ninth",
        type: "private",
        username: "Chat9",
        user: {
            id: 9,
            first_name: "Chat",
            last_name: "Ninth",
            username: "Chat9",
            is_bot: false,
            profilePicture: "",
        }
    },
    {
        id: 10,
        first_name: "Chat",
        last_name: "Tenth",
        type: "private",
        username: "Chat10",
        user: {
            id: 10,
            first_name: "Chat",
            last_name: "Tenth",
            username: "Chat10",
            is_bot: false,
            profilePicture: "",
        }
    }
];

export default chats;