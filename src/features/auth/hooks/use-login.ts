"use client";

import { useMutation } from "@tanstack/react-query";
import type { UseMutationResult } from "@tanstack/react-query";
import type { LoginRequestDto, LoginResponseDto } from "../services/auth-api";
import { login as loginRequest } from "../services/auth-api";
import { useAuthStore } from "../stores/auth-store";

export const useLogin = (): UseMutationResult<
  LoginResponseDto,
  Error,
  LoginRequestDto
> => {
  const authLogin = useAuthStore((state) => state.login);

  return useMutation({
    mutationFn: async (payload: LoginRequestDto) => loginRequest(payload),
    onSuccess: (data) => {
      authLogin(data);
    },
  });
};
