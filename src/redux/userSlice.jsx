import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accesstoken: "",
  refreshtoken: "",
  data: null,
  authenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      return action.payload;
    },
    updateUser: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
    logoutUser: (state) => {
      return initialState;
    },
  },
});

export const { loginUser, logoutUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
