import { POST_ORDER } from "../action/action";

const initialState = {
  orders: [],
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ORDER: {
      return { orders: [...state.orders, action.payload] };
    }

    default:
      return state;
  }
};
