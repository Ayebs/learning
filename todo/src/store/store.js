import { legacy_createStore as createStore } from "redux";
import {addTodoReducer} from './reducers/todoReducer'

export const store = createStore(addTodoReducer)