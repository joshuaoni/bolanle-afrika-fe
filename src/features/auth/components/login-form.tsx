"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useLogin } from "../hooks/use-login";

export const LoginForm: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutateAsync, isPending, error } = useLogin();

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    await mutateAsync(
      {
        email,
        password,
      },
      {
        onSuccess: () => {
          router.push("/(dashboard)");
        },
      },
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-sm flex-col gap-4 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
    >
      <div>
        <h1 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Sign in
        </h1>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          Enter your credentials to access the dashboard.
        </p>
      </div>

      <label
        htmlFor="email"
        className="flex flex-col gap-1 text-sm font-medium text-zinc-700 dark:text-zinc-200"
      >
        Email
        <input
          id="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="h-10 rounded-md border border-zinc-300 bg-white px-3 text-sm text-zinc-900 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50"
        />
      </label>

      <label
        htmlFor="password"
        className="flex flex-col gap-1 text-sm font-medium text-zinc-700 dark:text-zinc-200"
      >
        Password
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="h-10 rounded-md border border-zinc-300 bg-white px-3 text-sm text-zinc-900 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50"
        />
      </label>

      {error && (
        <p className="text-sm text-red-600 dark:text-red-400">
          {(error as Error).message ?? "Unable to sign in. Please try again."}
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="md"
        isLoading={isPending}
        className="mt-2 w-full"
      >
        Sign in
      </Button>
    </form>
  );
};
