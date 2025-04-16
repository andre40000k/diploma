import { configureStore } from "@reduxjs/toolkit"
import loginReduser from "./slices/authSlices/loginSlice";
import registrationReducer from "./slices/authSlices/registerSlice";
// import { logoutReducer } from "./slices/authSlices/logoutStatr";

export const store = configureStore({
  reducer: {
    // logout: logoutReducer,
    login: loginReduser,
    regist: registrationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;