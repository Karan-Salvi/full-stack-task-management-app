import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menu: [],
  },
  reducers: {
    setInitialMenu: (state, action) => {
      state.menu = action.payload;
      return state;
    },
    addMenuItem: (state, action) => {
      state.menu.push(action.payload);
      return state;
    },
    removeMenuItem: (state, action) => {
      state.menu = state.menu.filter((item) => item._id !== action.payload);
      return state;
    },
  },
});

export const menuActions = menuSlice.actions;

export default menuSlice;
