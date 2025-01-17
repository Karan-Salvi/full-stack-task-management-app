import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menu: [],
  },
  reducers: {
    setInitialMenu: (state, action) => {
      state.menu = action.payload;
    },
    addMenuItem: (state, action) => {
      state.menu.push(action.payload);
    },
    removeMenuItem: (state, action) => {
      state.menu = state.menu.filter((item) => item._id !== action.payload);
    },
  },
});

export const menuActions = menuSlice.actions;

export default menuSlice;
