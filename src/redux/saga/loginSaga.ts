import { LoginPayload, LOGIN_SUCCESS } from "../types/login";
import { call, fork, put, take } from "redux-saga/effects";

import {
  loginSuccess,
  loginFailed,
  loginRequest,
} from "../actions/loginAction";
import { useRouter } from "next/router";
import { PayloadAction } from "@reduxjs/toolkit";

function* handleLogin(payload: LoginPayload) {
  const router = useRouter();
  try {
    localStorage.setItem("access_token", "fakeToken");
    yield put(
      loginSuccess({
        id: 1,
        name: payload.username
      })
    );
    yield call(router.push, "/");
  } catch (error) {
    yield put(loginFailed(error));
  }
}
function* watchLoginFlow() {
  const action: PayloadAction<LoginPayload> = yield take(loginSuccess);
  yield fork(handleLogin, action.payload);
}
export default function* loginSaga() {
  yield fork(watchLoginFlow);
}
