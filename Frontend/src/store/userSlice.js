import { createSlice } from "@reduxjs/toolkit";

// Load initial state from localStorage
const initialUser = JSON.parse(localStorage.getItem("user")) || {
  username: "undefined",
  _id: "6785381d98ce608d7df9dded",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUser,
  reducers: {
    addUser: (state, action) => {
      state.username = action.payload.username;
      state._id = action.payload._id;

      localStorage.setItem("user", JSON.stringify(state));
    },
    removeUser: (state) => {
      state.username = "undefined";
      state._id = "6785381d98ce608d7df9dded";

      localStorage.removeItem("user");
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
