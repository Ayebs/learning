import { legacy_createStore as createStore, applyMiddleware } from "redux";
import {thunk} from 'redux-thunk'
import { ticketReducer } from "./reducer/ticketReducer";

export const store = createStore(ticketReducer, applyMiddleware(thunk))