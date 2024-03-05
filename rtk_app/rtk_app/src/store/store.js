import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slices/todoSlice.js"

export const store = configureStore({
    reducer: {
        tasks: taskReducer
    }
})