import { PayloadAction } from "@reduxjs/toolkit";
import { call, delay, fork, put, take } from "redux-saga/effects";
import { authActions } from "../slice/authSlice";
import {LoginPayload} from '../types/user'
function* handleLogin(payload: LoginPayload) {
  try {
    yield delay(1000) // doi lai goi api
    localStorage.setItem("access_token", "fakeToken");
    //put 1 action
    yield put(
      authActions.loginSuccess({
        id: 1,
        name: "user",
      })
      //navigate user role o day
    );
    
    

    // yield put(push('/admin/dashboard'))
  } catch (error) {
    console.log(error)
  }

  //redir
}
function* handleLogout() {
  console.log("Handle logout");
  yield delay(500);
  localStorage.removeItem("access_token");
  //redirect to login page
//   yield put(push('/login'))
}
function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem("access_token"));
    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
      yield fork(handleLogin, action.payload); //neu user dispatch login thi fork
    }

    yield take(authActions.logout.type);
    yield call(handleLogout);
  }
}

export function* authSaga() {
  yield fork(watchLoginFlow); 
}
