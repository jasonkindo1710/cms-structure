import { applyMiddleware, createStore } from "redux";
import logger from 'redux-logger'
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "../reducer";
import { rootSaga } from "../saga";

//tao ra saga middleware
const sagaMiddleWare = createSagaMiddleware();

//gan vao store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare, logger));

//chay saga
sagaMiddleWare.run(rootSaga);

export default store; 
