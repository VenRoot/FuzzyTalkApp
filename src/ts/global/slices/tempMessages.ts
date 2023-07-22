import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TemporaryMessage } from "../../../types/Message";

interface TempMessagesState {
    tempMessages: TemporaryMessage[];
}

const tempInitialState: TempMessagesState = {
    tempMessages: []
}

export const temporaryMessagesSlice = createSlice({
    name: "temporaryMessages",
    initialState: tempInitialState,
    reducers: {
        addMessage: (state, action: PayloadAction<TemporaryMessage>) => {
            state.tempMessages.push(action.payload);
        },
        /**
         * @deprecated Please use a local hook
         * @param state 
         * @param action 
         */
        removeMessage: (state, action: PayloadAction<TemporaryMessage>) => {
            // find the index of the temporary message to be removed
            const index = state.tempMessages.findIndex(message => message.requestId === action.payload.requestId);

            // if the message exists, remove it from the array
            if(index !== -1)
            {
                state.tempMessages.splice(index, 1);
            }
            else throw new Error("Message not found");
        }
    }
});

export const { addMessage, removeMessage } = temporaryMessagesSlice.actions;
export default temporaryMessagesSlice.reducer;
