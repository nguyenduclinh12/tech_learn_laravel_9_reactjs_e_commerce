import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: "admin",
    initialState: {},
    reducers: {
        setAdmin: (state, action) => {
            state = action.payload;
        },
        removeAdmin: (state) => {
            state = {};
        },
    },
});
export default adminSlice.reducer;

// object vitra ko function lina lai
export const { setAdmin, removeAdmin } = adminSlice.actions;
