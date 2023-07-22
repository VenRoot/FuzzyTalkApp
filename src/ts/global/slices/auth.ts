import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserToken {
    id: number;
    token: string;
}

const initialState: UserToken = {
    id: -1,
    token: "",
};

export const setUser = createAsyncThunk(
    "user/set",
    async (user: UserToken, { dispatch }) => {
        try {
            await AsyncStorage.setItem("usertoken", JSON.stringify(user));
            dispatch(userSlice.actions.setUserInState(user)); // dispatch action to update state
        } catch (e) {
            console.error(e);
            throw new Error("Failed to store user data" + e);
        }
    }
);

export const getUser = createAsyncThunk(
    "user/get",
    async (_, { dispatch }) => {
        try {
            const user = await AsyncStorage.getItem("usertoken");
            if (!user) throw new Error("User not found");
            dispatch(userSlice.actions.setUserInState(JSON.parse(user))); // dispatch action to update state
        } catch (e) {
            console.error(e);
            throw new Error("Failed to get user data" + e);
        }
    }
);

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserInState: (state, action: PayloadAction<UserToken>) => {
            return action.payload;
        },
    },
    extraReducers: (builder) => {
    }
});

export default userSlice.reducer;


function getUserId(): number
{
    throw new Error("Function not implemented.");
}