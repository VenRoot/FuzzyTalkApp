import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Chat } from "../../../types/Chat";
import Scen01 from "../../../Templates/Chats/Scenario01";

interface ChatState {
    chats: Chat[];
}

const initialState: ChatState = {
    chats: Scen01,
};

export const chatsSlice = createSlice({
    name: "chats",
    initialState,
    reducers: {
    }
});

export const { } = chatsSlice.actions;
export default chatsSlice.reducer;


function getUserId(): number
{
    throw new Error("Function not implemented.");
}