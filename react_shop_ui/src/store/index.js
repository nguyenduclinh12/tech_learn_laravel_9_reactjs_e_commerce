import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import adminReducer from "./adminSlice";

// not function
export const store = configureStore({
    reducer: {
        user: userReducer,
        admin: adminReducer,
    },
});