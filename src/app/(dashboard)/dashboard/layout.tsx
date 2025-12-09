import React from "react";
import { ThemeToggle } from "@/components/shared/theme-toggle";

interface DashboardLayoutProps {
  readonly children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => (
  <div className="flex min-h-screen flex-col bg-background text-foreground">
    <header className="border-b border-zinc-200/80 bg-background/80 px-6 py-4 backdrop-blur">
      <div className="mx-auto px-24 flex max-w-6xl items-center justify-between gap-4">
        <span className="text-sm font-semibold tracking-tight">
          Bolanle Afrika
        </span>
        <div className="flex items-center gap-3 text-xs text-zinc-500">
          <span>Dashboard</span>
          <ThemeToggle />
        </div>
      </div>
    </header>
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-6 py-8">
      {children}
    </main>
  </div>
);

export default DashboardLayout;
