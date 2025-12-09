"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "next-themes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

interface AppProvidersProps {
  readonly children: React.ReactNode;
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => (
  <ThemeProvider
    attribute="class"
    defaultTheme="light"
    disableTransitionOnChange
  >
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools buttonPosition="bottom-right" initialIsOpen={false} />
    </QueryClientProvider>
  </ThemeProvider>
);
