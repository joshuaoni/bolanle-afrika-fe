import { z } from "zod";

const clientEnvSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
});

const serverEnvSchema = z.object({
  NODE_ENV: z.enum(["development", "production"]),
});

const clientEnv = clientEnvSchema.safeParse({
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

const serverEnv = serverEnvSchema.safeParse({
  NODE_ENV: process.env.NODE_ENV,
});

if (!clientEnv.success) {
  console.error(
    "❌ Invalid client environment variables:",
    clientEnv.error.flatten().fieldErrors,
  );
  throw new Error("Invalid client environment variables");
}

if (!serverEnv.success) {
  console.error(
    "❌ Invalid server environment variables:",
    serverEnv.error.flatten().fieldErrors,
  );
  throw new Error("Invalid server environment variables");
}

export const env = {
  ...clientEnv.data,
  ...serverEnv.data,
};
