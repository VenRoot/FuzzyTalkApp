import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Message } from "../../../types/Message";
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
            state.messages.push(action.payload);
        },
        updateMessage: (state, action: PayloadAction<{message: Message, text: string}>) => {
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

export const { addMessage, updateMessage, deleteMessage } = messagesSlice.actions;
export default messagesSlice.reducer;


function getUserId(): number
{
    throw new Error("Function not implemented.");
}