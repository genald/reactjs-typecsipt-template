import createSlice from "app/store/createSlice";
import { PayloadAction }  from '@reduxjs/toolkit';
import { LoginError, LoginForm, initialState } from "./types";

// Create Slice
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<LoginForm>) {},
        successLogin(state, action: PayloadAction<string>) {
            state.token = action.payload;
        },
        failedLogin(state, action: PayloadAction<LoginError>) {
            state.error = action.payload;
        }
    }
})

export const {
    actions,
    reducer,
    name: key,
} = authSlice