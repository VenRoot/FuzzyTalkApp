import { Message } from "../../types/Message";
import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./slices/messages";
import chatReducer from "./slices/chats";
import userReducer from "./slices/user";
import tempMessages from "./slices/tempMessages";

const store = configureStore({
    reducer: {
        messages: messageReducer,
        chats: chatReducer,
        user: userReducer,
        tempMessages: tempMessages
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;