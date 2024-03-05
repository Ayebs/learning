import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: []
} 

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask(state, action) {
            state.tasks.push(action.payload);
        },
        updateTask(state, action) {
            state.tasks.map((task) => task.id === action.payload ? { ...task, completed:
            !task.completed} : task)
        },
        deleteTask(state, action) {
            state.tasks = state.tasks.filter(task => task.id!== action.payload)
        },
    }
    // extraReducers: builder => {
        // builder.addCase(taskAdding)
    // }
})

export const { addTask, updateTask, deleteTask } = taskSlice.actions

export default taskSlice.reducer;