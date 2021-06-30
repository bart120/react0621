import { combineReducers, createStore } from "redux";
import authenticationReducer from "./authenticationReducer";
import toastReducer from "./toastReducer";


export const store = createStore(combineReducers({ toast: toastReducer, auth: authenticationReducer }));