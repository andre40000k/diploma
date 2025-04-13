import { configureStore } from "@reduxjs/toolkit"
import loginReduser from "./slices/authSlices/loginSlice";

export const store = configureStore({
        reducer:{
            login: loginReduser,
        }
    }
)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;