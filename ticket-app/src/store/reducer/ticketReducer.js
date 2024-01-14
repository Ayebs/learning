import { ADD_TICKET, DELETE_TICKETS, FETCH_TICKETS, UPDATE_TICKETS } from "../action"

const initialState = {
    tickets: []
}

export const ticketReducer = (state = initialState , action) => {
    switch(action.type){
        case ADD_TICKET: {
            return {tickets: [...state.tickets, action.payload]}
        }

        case FETCH_TICKETS: {
            return {tickets: action.payload}
        }
        
        case DELETE_TICKETS: {
            return {tickets: state.tickets.filter((item) => item._id !== action.payload._id)}
        }

        case UPDATE_TICKETS: {
            return { tickets: state.tickets.map((ticket) => ticket._id === action.payload ? {...ticket, workedOn: !ticket.workedOn} : ticket )}
        }

        default:
            return state
    }
}