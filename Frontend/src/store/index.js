import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import menuSlice from "./menuSlice";
import cartSlice from "./cartSlice";
import Order from "../pages/OrderPage/Order";

const FoodSwiftStore = configureStore({
  reducer: {
    user: userSlice.reducer,
    menu: menuSlice.reducer,
    cart: cartSlice.reducer,
    Order:order
  },
});

export default FoodSwiftStore;
