import { configureStore } from "@reduxjs/toolkit";

const orderSlice = configureStore({
  name: "order",
  initialState: {
    order: [],
  },
  reducers: {
    addInitialOrder: (state, action) => {
      state.order = action.payload;
      return state;
    },
    addOrder: (state, action) => {
      state.order.push(action.payload);
      return state;
    },
  },
});

export const orderActions = orderSlice.actions;

export default orderSlice;
