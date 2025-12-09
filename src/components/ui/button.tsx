import type { ButtonHTMLAttributes, ReactNode } from "react";
import React from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly children: ReactNode;
  readonly variant?: Variant;
  readonly size?: Size;
  readonly isLoading?: boolean;
}

const baseClasses =
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const sizeClasses: Record<Size, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-6 text-base",
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-zinc-900 text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200",
  secondary:
    "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-700",
  ghost:
    "bg-transparent hover:bg-zinc-100 text-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  className,
  disabled,
  ...rest
}) => (
  <button
    type="button"
    className={clsx(
      baseClasses,
      sizeClasses[size],
      variantClasses[variant],
      className,
    )}
    disabled={disabled ?? isLoading}
    {...rest}
  >
    {isLoading ? "Loading..." : children}
  </button>
);
