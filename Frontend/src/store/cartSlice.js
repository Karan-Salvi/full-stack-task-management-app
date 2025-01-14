import { configureStore } from "@reduxjs/toolkit";

const cartSlice = configureStore({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
