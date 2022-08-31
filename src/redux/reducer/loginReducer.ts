import {
    LoginActions,
    LoginState,
    LOGIN_FAILED,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
}
from "../types/login"

const initialState: LoginState = {
    isLoggedIn: false,
    loading: false,
    currentUser: undefined
};

const loginReducer = (state = initialState, action: LoginActions) => {
    switch(action.type){
        case LOGIN_REQUEST:
            return{
                ...state,
                logging: true,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                loggin: false,
                currentUser: action.payload,
            };
        case LOGIN_FAILED:
            return {
                ...state,
                loggin: false,
            };
        default:
            return {
                ...state,
            };
    }
}
export default loginReducer;