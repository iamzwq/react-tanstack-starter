import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  name: string;
  email: string;
};

type AuthState = {
  user: User | null;
  token: string;
  permissions: string[];
  actions: AuthActions;
};

type AuthActions = {
  setUser: (user: User | null) => void;
  setToken: (token: string) => void;
  setPermissions: (permissions: string[]) => void;
  hasPermission: (permission: string) => boolean;
  hasAnyPermission: (permissions: string[]) => boolean;
  reset: () => void;
};

const initialState = {
  user: null,
  token: "",
  permissions: [],
};

const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      ...initialState,
      actions: {
        setUser: (user) => set({ user }),
        setToken: (token) => set({ token }),
        setPermissions: (permissions) => set({ permissions }),
        hasPermission: (permission) => {
          const { permissions } = get();
          return permissions.includes(permission);
        },
        hasAnyPermission: (requiredPermissions) => {
          const { permissions } = get();
          return requiredPermissions.some((p) => permissions.includes(p));
        },
        reset: () => set(initialState),
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        permissions: state.permissions,
      }),
    },
  ),
);

export const useUser = () => useAuthStore((state) => state.user);
export const useToken = () => useAuthStore((state) => state.token);
export const usePermissions = () => useAuthStore((state) => state.permissions);
// 派生状态：是否已认证
export const useIsAuthenticated = () => useAuthStore((state) => state.user !== null);
// 导出 actions
export const useAuthActions = () => useAuthStore((state) => state.actions);
