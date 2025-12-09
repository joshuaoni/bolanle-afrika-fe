"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useThemeStore } from "@/store/theme-store";

export const ThemeToggle: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const storeTheme = useThemeStore((state) => state.theme);
  const setStoreTheme = useThemeStore((state) => state.setTheme);

  const effectiveTheme = useMemo<"light" | "dark">(
    () => (theme === "dark" ? "dark" : "light"),
    [theme],
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (storeTheme !== effectiveTheme) {
      setStoreTheme(effectiveTheme);
    }
  }, [effectiveTheme, setStoreTheme, storeTheme]);

  const handleToggle = () => {
    const nextTheme = effectiveTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    setStoreTheme(nextTheme);
  };

  const label = effectiveTheme === "dark" ? "Light mode" : "Dark mode";

  if (!mounted) {
    return null;
  }

  return (
    <Button
      type="button"
      size="sm"
      variant="ghost"
      onClick={handleToggle}
      aria-label={label}
      className="gap-2 text-xs"
    >
      <span
        aria-hidden
        className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-zinc-400 text-[0.65rem] dark:border-zinc-500"
      >
        {effectiveTheme === "dark" ? "🌙" : "☀️"}
      </span>
      {label}
    </Button>
  );
};
