import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Message, TemporaryMessage } from "../../../types/Message";
import Scen01 from "../../../Templates/Messages/Scenario01";

interface MessagesState {
    messages: Message[];
}

const initialState: MessagesState = {
    messages: Scen01,
};

export const messagesSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        addMessage: (state, action: PayloadAction<Message>) => {
            const dups = state.messages.filter(message => message.message_id === action.payload.message_id);
            if(dups.length > 0)
            {
                dups.forEach((dup, i) => {
                    if(!dup.verified_from_backend)
                    { 
                        //Remove the message from the array
                        const index = state.messages.indexOf(dup);
                        state.messages.splice(index, 1);
                    }
                })
            }
            state.messages.push(action.payload);
        },
        updateMessage: (state, action: PayloadAction<{message_id: number, message: Message}>) => {
            const message = state.messages.findIndex(message => message.message_id === action.payload.message_id);
            if(!message) return;

            state.messages[message] = action.payload.message;
        },

        updateMessageByUser: (state, action: PayloadAction<{message: Message, text: string}>) => {
            const message = state.messages.find(message => message.message_id === action.payload.message.message_id);
            if(!message) return;

            if(message.from.id !== action.payload.message.from.id) return;
            
            message.text = action.payload.text;
        },
        deleteMessage: (state, action: PayloadAction<number>) => {
            const message = state.messages.find(message => message.message_id === action.payload);
            if(!message) return;

            const user_id = getUserId();
            if(message.from.id !== user_id) return;

            const index = state.messages.indexOf(message);
            state.messages.splice(index, 1);
        }
    }
});

export const { addMessage, updateMessageByUser, updateMessage, deleteMessage } = messagesSlice.actions;
export default messagesSlice.reducer;


function getUserId(): number
{
    throw new Error("Function not implemented.");
}