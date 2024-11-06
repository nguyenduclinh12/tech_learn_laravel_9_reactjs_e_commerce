import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers: {
        setUser: (state, action) => {
            state = action.payload;
        },
        removeUser: (state) => {
            state = {};
        },
    },
});
export default userSlice.reducer;

// object vitra ko function lina lai
export const { setUser, removeUser } = userSlice.actions;
