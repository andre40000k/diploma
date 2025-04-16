import { createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import { LoginFormData } from "../../../utils/validationSchemas"
import $api from "../../../services/api";
import { initialState } from "./initialState";
import { User } from "../../../types/entities/UserInterface";

export const loginUser = createAsyncThunk<User, LoginFormData, { rejectValue: { message: string } | string }>(
  "auth/login",
  async (credentials: LoginFormData, { rejectWithValue }) => {
    try {
      const response = await $api.post("auth/login", credentials);
      console.log(response);
      localStorage.setItem("token", response.data.token);
      return response.data.user;
    } catch (err: any) {
      return rejectWithValue(err.response.data || " Error to login");
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (build) => {
    build
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message || "Unknown error";
      });
  }
});

export const {logout} = loginSlice.actions;
export default loginSlice.reducer;