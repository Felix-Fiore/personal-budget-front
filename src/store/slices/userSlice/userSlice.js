import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    token: '',
    isLoggedIn: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.isLoggedIn = true;
      state.name = action.payload.name;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.name = '';
      state.token = '';
    },
  },
});
// Action creators are generated for each case reducer function
export const { setUser, logout } = userSlice.actions;
