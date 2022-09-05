import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {LoginPayload, AuthState, User} from '../types/user'


const initialState: AuthState = {
    isLoggedIn: false,
    logging: false,
    currentUser: undefined,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<LoginPayload>){
            state.logging = true;
        },
        loginSuccess(state, action: PayloadAction<User>){  
            state.isLoggedIn = true;
            state.logging = false;
            state.currentUser = action.payload;
        },
        loginFailed(state, action: PayloadAction<string>){
            state.logging = false;
        },
        logout(state){
            state.isLoggedIn = false;
            state.currentUser = undefined;
        }
    }
})

//actions
export const authActions = authSlice.actions




//reducer
const authReducer = authSlice.reducer;
export default authReducer;
