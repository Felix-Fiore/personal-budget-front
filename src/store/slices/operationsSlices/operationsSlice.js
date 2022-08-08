import { createSlice } from '@reduxjs/toolkit';
export const operationsSlice = createSlice({
  name: 'operations',
  initialState: {
    operations: [],
    isLoading: false,
  },
  reducers: {
    getOperations: (state) => {
      state.isLoading = true;
    },
  },
});
// Action creators are generated for each case reducer function
export const { getOperations } = operationsSlice.actions;
