import { createSlice } from '@reduxjs/toolkit';

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        orders: [],
        trips: [],
        revenue: 0,
        expenses: 0,
        // other initial state values
    },
    reducers: {
        setOrders: (state, action) => {
            state.orders = action.payload;
        },
        setTrips: (state, action) => {
            state.trips = action.payload;
        },
        setRevenue: (state, action) => {
            state.revenue = action.payload;
        },
        setExpenses: (state, action) => {
            state.expenses = action.payload;
        },
        // other reducers
    },
});

export const { setOrders, setTrips, setRevenue, setExpenses } = dashboardSlice.actions;

export default dashboardSlice.reducer;
