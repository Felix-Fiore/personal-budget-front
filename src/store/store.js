import { configureStore } from '@reduxjs/toolkit';
import { operationsSlice } from './slices/operationsSlices/operationsSlice';
import { userSlice } from './slices/userSlice/userSlice';

export const store = configureStore({
  reducer: {
    // reducers
    user: userSlice.reducer,
    operations: operationsSlice.reducer,
  },
});
