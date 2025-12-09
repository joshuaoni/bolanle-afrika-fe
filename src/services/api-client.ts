import axios, { AxiosError, AxiosHeaders } from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { env } from "@/config/env";

export interface ApiErrorShape {
  status: number;
  message: string;
  code?: string;
  details?: unknown;
}

const createApiClient = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: env.NEXT_PUBLIC_API_BASE_URL,
    withCredentials: true,
  });

  instance.interceptors.request.use((config) => {
    if (typeof window !== "undefined") {
      const storedToken =
        (
          window as Window &
            typeof globalThis & {
              __AUTH_TOKEN__?: string | null;
            }
        ).__AUTH_TOKEN__ ?? null;
      if (storedToken) {
        const headers =
          config.headers instanceof AxiosHeaders
            ? config.headers
            : new AxiosHeaders(config.headers);

        headers.set("Authorization", `Bearer ${storedToken}`);

        config.headers = headers;
      }
    }

    return config;
  });

  instance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      const mappedError: ApiErrorShape = {
        status: error.response?.status ?? 0,
        message:
          (error.response?.data as { message?: string } | undefined)?.message ??
          error.message,
        code: (error.response?.data as { code?: string } | undefined)?.code,
        details: error.response?.data,
      };

      return Promise.reject(mappedError);
    },
  );

  return instance;
};

export const apiClient: AxiosInstance = createApiClient();

export const get = async <TResponse>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<TResponse> => {
  const response: AxiosResponse<TResponse> = await apiClient.get(url, config);
  return response.data;
};

export const post = async <TBody, TResponse>(
  url: string,
  body: TBody,
  config?: AxiosRequestConfig,
): Promise<TResponse> => {
  const response: AxiosResponse<TResponse> = await apiClient.post(
    url,
    body,
    config,
  );
  return response.data;
};
