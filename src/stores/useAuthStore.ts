import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { User } from '../models/User';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  setUser: (user: User | null) => void;
  setAuthenticated: (isAuthenticated: boolean) => void;
  setLoading: (isLoading: boolean) => void;
  reset: () => void;
}

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
};

export const useAuthStore = create<AuthState>()(
  immer((set) => ({
    ...initialState,
    setUser: (user) =>
      set((state) => {
        state.user = user;
      }),
    setAuthenticated: (isAuthenticated) =>
      set((state) => {
        state.isAuthenticated = isAuthenticated;
      }),
    setLoading: (isLoading) =>
      set((state) => {
        state.isLoading = isLoading;
      }),
    reset: () => set(initialState),
  }))
);
