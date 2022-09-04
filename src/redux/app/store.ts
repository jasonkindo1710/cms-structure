import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";

import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import authReducer from "../slice/authSlice";


const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  auth: authReducer, 

})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
