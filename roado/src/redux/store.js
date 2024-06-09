import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './slices/dashboardSlice';
// Import other reducers

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    // other reducers
  },
});

export default store;