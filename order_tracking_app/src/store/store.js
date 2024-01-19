import { legacy_createStore as createStore, applyMiddleware } from "redux"
import { thunk } from 'redux-thunk'
import { orderReducer } from './reducer/orderReducer'

export const store = createStore(orderReducer, applyMiddleware(thunk))