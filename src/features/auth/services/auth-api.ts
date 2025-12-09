import { post } from "@/services/api-client";

export interface LoginRequestDto {
  readonly email: string;
  readonly password: string;
}

export interface AuthUser {
  readonly id: string;
  readonly name: string;
  readonly email: string;
}

export interface LoginResponseDto {
  readonly token: string;
  readonly user: AuthUser;
}

export const login = async (
  payload: LoginRequestDto,
): Promise<LoginResponseDto> =>
  post<LoginRequestDto, LoginResponseDto>("/auth/login", payload);
