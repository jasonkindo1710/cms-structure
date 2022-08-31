import { User } from "../../models/examples/user";
import {
    LoginRequest,
    LoginFailed,
    LoginSuccess,
    LOGIN_FAILED,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LoginPayload
}
from "../types/login"

export const loginRequest = (payload: LoginPayload): LoginRequest => ({
    type: LOGIN_REQUEST,
    payload,
})
export const loginSuccess = (payload: User): LoginSuccess => ({
    type: LOGIN_SUCCESS,
    payload,
  });
  
  export const loginFailed = (payload: any): LoginFailed => ({
    type: LOGIN_FAILED,
    payload,
  });