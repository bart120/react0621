import { createStore } from "redux";
import toastReducer from "./toastReducer";


export const store = createStore(toastReducer);