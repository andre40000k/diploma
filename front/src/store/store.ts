import { configureStore } from "@reduxjs/toolkit"
import loginReduser from "./slices/authSlices/loginSlice";
import registrationReducer from "./slices/authSlices/registerSlice";

export const store = configureStore({
        reducer:{
            login: loginReduser,
            regist: registrationReducer
        }
    }
)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;