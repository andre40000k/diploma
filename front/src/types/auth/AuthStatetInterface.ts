import { User } from "../entities/UserInterface";

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: { message: string } | string | null;
}