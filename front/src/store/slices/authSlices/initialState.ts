import { AuthState } from "../../../types/auth/AuthStatetInterface";

export const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
};
