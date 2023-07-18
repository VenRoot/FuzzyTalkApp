import { Message } from "../../types/Message";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/messages";
import chatReducer from "./slices/chats";

const store = configureStore({
    reducer: {
        messages: userReducer,
        chats: chatReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;