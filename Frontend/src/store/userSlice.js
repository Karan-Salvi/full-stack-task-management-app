import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "undefind",
  },
  reducers: {
    addUser: (state, action) => {
      state.username = action.payload;
      return state;
    },
    removeUser: (state) => {
      state.username = "undefind";
      return state;
    },
  },
});
export const userActions = userSlice.actions;
export default userSlice;
