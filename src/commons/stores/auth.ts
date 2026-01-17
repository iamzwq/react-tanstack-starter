import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  name: string;
  email: string;
  role: string;
};

type AuthState = {
  user: User | null;
  token: string | null;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
};

const initialState = {
  user: null,
  token: null,
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      ...initialState,
      setUser: (user) => set({ user }),
      setToken: (token) => set({ token }),
      reset: () => set(initialState),
    }),
    { name: "auth" },
  ),
);

export const useUser = () => useAuthStore((state) => state.user);
export const useSetUser = () => useAuthStore((state) => state.setUser);
