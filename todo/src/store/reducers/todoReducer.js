import { ADD_TODO } from "../actions"

const initialState = {
    todos: [
        // {
        //     id: 1,
        //     todo: sweep
        // },
        // {
        //     id: 2,
        //     todo: sleep
        // },
    ]
}

export const addTodoReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO: {
            return {todos: action.payload}
        }

        default:
            return state
    }
}


