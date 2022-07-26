import { createSlice } from '@reduxjs/toolkit';
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    isLoggedIn: false,
  },
  reducers: {
    userLoggin: (state /* action */) => {
      state.isLoggedIn = true;
    },
  },
});
// Action creators are generated for each case reducer function
export const { userLoggin } = userSlice.actions;
