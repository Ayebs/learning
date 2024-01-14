import { ADD_TICKET, DELETE_TICKETS, FETCH_TICKETS, UPDATE_TICKETS } from "./action";

export const postTicket = (info) => async (dispatch, getState) => {
  try {
    const data = await fetch('http://localhost:4100/api/tickets', {
        method: 'POST',
        body: JSON.stringify(info),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const addedTicket = await data.json()
    dispatch({type: ADD_TICKET, payload: addedTicket})
  } catch (error) {
    console.log(error);
  }
}

export const fetchTickets = () => async (dispatch, getState) => {
  try {
    const data = await fetch('http://localhost:4100', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })

    const response = await data.json()
    dispatch({type: FETCH_TICKETS, payload: response})

  } catch (error) {
    console.log(error);
  }
}

export const updateTicket = (id) => async(dispatch, getState) => {
  try {
    const data = await fetch(`http://localhost:4100/api/updateticket/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      }
    })

    const updatedTicket = await data.json()
    dispatch({type: UPDATE_TICKETS, payload: updatedTicket})
    
  } catch (error) {
    console.log(error);
  }
}

export const deleteTicket = (id) => async(dispatch, getState) => {
  try {
    const data = await fetch(`http://localhost:4100/api/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })

    const deletedTicket = await data.json()
    dispatch({type: DELETE_TICKETS, payload: deletedTicket})
    
  } catch (error) {
    console.log(error);
  }
}