import type { Metadata } from "next";
import { LoginForm } from "@/features/auth/components/login-form";

export const metadata: Metadata = {
  title: "Sign up",
  description: "Create your Bolanle Afrika account.",
  alternates: {
    canonical: "/signup",
  },
  robots: {
    index: false,
    follow: true,
  },
};

const SignupPage = () => (
  <main className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground px-4 py-8">
    <section className="w-full max-w-md space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Create your Bolanle Afrika account
        </h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Sign in or sign up to access your dashboard and start building.
        </p>
      </div>

      <LoginForm />
    </section>
  </main>
);

export default SignupPage;
