import { createSlice } from '@reduxjs/toolkit';
export const operationsSlice = createSlice({
  name: 'operations',
  initialState: {
    operations: [],
    isLoading: false,
  },
  reducers: {
    loadingOperations: (state) => {
      state.isLoading = true;
    },
    getOperationsSuccess: (state, action) => {
      state.isLoading = false;
      state.operations = action.payload.operations;
    },
  },
});
// Action creators are generated for each case reducer function
export const { loadingOperations, getOperationsSuccess } =
  operationsSlice.actions;
