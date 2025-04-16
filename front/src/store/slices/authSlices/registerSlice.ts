import { createAsyncThunk, createSlice, PayloadAction  } from "@reduxjs/toolkit";
import { RegisterFormData } from "../../../utils/validationSchemas";
import $api from "../../../services/api";
import { initialState } from "./initialState";
import { User } from "../../../types/entities/UserInterface";

export const registerUser = createAsyncThunk<User, RegisterFormData, {rejectValue: { message: string } | string}>(
    'auth/register',
    async (data: RegisterFormData, {rejectWithValue }) => {
        try{
            const response = await $api.post("auth/register", data);
            localStorage.setItem('token', response.data.token);
            return response.data.user;
        }
        catch(error: any)
        {
            return rejectWithValue(error.response || "Error registration");
        }
    }
);

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
    {
        builder
        .addCase(registerUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(registerUser.fulfilled, (state, action: PayloadAction<User>) => {
            state.isLoading = false;
            state.user = action.payload;
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload || action.error.message || "Unknown error";
        });
    }
});

export default registerSlice.reducer;