import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../../types/User";
import AsyncStorage from '@react-native-async-storage/async-storage';
import users from "../../../Templates/Users/User01";


const initialState: User = {
    first_name: "Ven",
    last_name: "Root",
    id: -1,
    is_bot: false,
    username: "Ven",
    language_code: "de",
    profilePicture: "https://www.w3schools.com/howto/img_avatar.png",
};

export const setUser = createAsyncThunk(
    "user/set",
    async (user: User, { dispatch }) => {
        try {
            await AsyncStorage.setItem("user", JSON.stringify(user));
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
            const user = await AsyncStorage.getItem("user");
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
        setUserInState: (state, action: PayloadAction<User>) => {
            return action.payload;
        },
        setNewUser: (state, action: PayloadAction<1 | 2 | 3>) => {
            // Find the user in the state by the id
            const user = users.find(user => user.id === action.payload);
            if(!user) throw new Error("User not found");

            // Remove all the properties from the state so even undefined properties from the new object are removed in the state
            Object.keys(state).forEach(key => delete state[key as keyof User]);

            // Assign the new user to the state
            Object.assign(state, user);
        }
    },
    extraReducers: (builder) => {
    }
});


export const { setUserInState, setNewUser } = userSlice.actions;

export default userSlice.reducer;


function getUserId(): number
{
    throw new Error("Function not implemented.");
}