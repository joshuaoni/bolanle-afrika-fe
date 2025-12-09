import { create } from "zustand";

export type ThemeMode = "light" | "dark";

export interface ThemeState {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: "light",
  setTheme: (theme) => set({ theme }),
}));
