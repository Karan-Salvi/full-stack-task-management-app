import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import menuSlice from "./menuSlice";
import cartSlice from "./cartSlice";
import Order from "../pages/OrderPage/Order";
import orderSlice from "./order";

const FoodSwiftStore = configureStore({
  reducer: {
    user: userSlice.reducer,
    menu: menuSlice.reducer,
    cart: cartSlice.reducer,
    order: orderSlice.reducer,
  },
});

export default FoodSwiftStore;
