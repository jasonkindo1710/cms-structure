import {User} from "../../models/examples/user"

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_SUCCESS";

export interface LoginPayload {
    username: string;
    password: string;
}
export interface LoginState{
    isLoggedIn: boolean;
    loading?: boolean;
    currentUser: User | undefined ;
}

export type LoginRequest = {
    type: typeof LOGIN_REQUEST;
    payload: LoginPayload;
}
export type LoginSuccess = {
    type: typeof LOGIN_SUCCESS;
    payload: User;
}
export type LoginFailed = {
    type: typeof LOGIN_FAILED;
    payload: string;
}
export type LoginActions = LoginRequest | LoginSuccess | LoginFailed;