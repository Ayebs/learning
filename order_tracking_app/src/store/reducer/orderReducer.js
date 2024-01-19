import React from "react";
import { ADD_ORDER } from "../action";

const initialState = {
  orders: [],
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER: {
      return { orders: [...state.orders, action.payload] };
    }

    default:
      return state;
  }
};
