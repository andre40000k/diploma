import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const logoutSlice = createSlice({
    name: "logout",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            localStorage.removeItem('token');
        }
    }
});

// export const { logoutReducer } = logoutSlice.actions;