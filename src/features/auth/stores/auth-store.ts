import { create } from "zustand";
import type { AuthUser, LoginResponseDto } from "../services/auth-api";

export interface AuthState {
  readonly user: AuthUser | null;
  readonly token: string | null;
  readonly isAuthenticated: boolean;
  readonly login: (payload: LoginResponseDto) => void;
  readonly logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  login: (payload) =>
    set(() => {
      if (typeof window !== "undefined") {
        (
          window as Window &
            typeof globalThis & {
              __AUTH_TOKEN__?: string | null;
            }
        ).__AUTH_TOKEN__ = payload.token;
      }

      return {
        user: payload.user,
        token: payload.token,
        isAuthenticated: true,
      };
    }),
  logout: () =>
    set(() => {
      if (typeof window !== "undefined") {
        (
          window as Window &
            typeof globalThis & {
              __AUTH_TOKEN__?: string | null;
            }
        ).__AUTH_TOKEN__ = null;
      }

      return {
        user: null,
        token: null,
        isAuthenticated: false,
      };
    }),
}));
