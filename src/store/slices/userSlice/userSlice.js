import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
    token: '',
    isLoggedIn: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.isLoggedIn = true;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
  },
});
// Action creators are generated for each case reducer function
export const { userLoggin } = userSlice.actions;
