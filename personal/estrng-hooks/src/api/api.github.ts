import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { ApiError, ApiResult } from "./api.types";

const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;

export const apiGithub: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

/**
 *  Controle Supervisionado dos erros,
 *  quando é um API error ou apenas um erro de conexão ou URL mal formada
 */
apiGithub.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError): Promise<ApiError> => {
    if (error.response) {
      return Promise.reject({
        statusCode: error.response.status,
        message: error.response.statusText,
        details: error.response.data,
      } as ApiError);
    } else {
      return Promise.reject({
        statusCode: 0,
        message: error.message,
      } as ApiError);
    }
  }
);

/**
 * Métodos HTTP que esperam um tipo de retorno específico utilizando o genérico type T
 * E retorna data de acordo com esse tipo T o um erro supervisionado pelo contrato que nós fizemos.
 */
export default {
  async get<T>(
    endpoint: string,
    filters: Record<string, any> = {},
    config: AxiosRequestConfig = {}
  ): Promise<ApiResult<T>> {
    try {
      const response = await apiGithub.get<T>(endpoint, {
        params: filters,
        ...config,
      });
      return { data: response.data };
    } catch (error) {
      const axiosError = error as ApiError;
      return {
        data: {} as T,
        error: axiosError,
      };
    }
  },

  async post<T>(
    endpoint: string,
    data: any,
    config: AxiosRequestConfig = {}
  ): Promise<ApiResult<T>> {
    try {
      const response = await apiGithub.post<T>(endpoint, data, config);
      return { data: response.data };
    } catch (error) {
      const axiosError = error as AxiosError;
      return {
        data: {} as T,
        error: {
          statusCode: axiosError.response?.status ?? 0,
          message: axiosError.message,
        },
      };
    }
  },

  async put<T>(
    endpoint: string,
    data: any,
    config: AxiosRequestConfig = {}
  ): Promise<ApiResult<T>> {
    try {
      const response = await apiGithub.put<T>(endpoint, data, config);
      return { data: response.data };
    } catch (error) {
      const axiosError = error as AxiosError;
      return {
        data: {} as T,
        error: {
          statusCode: axiosError.response?.status ?? 0,
          message: axiosError.message,
        },
      };
    }
  },

  async patch<T>(
    endpoint: string,
    data: any,
    config: AxiosRequestConfig = {}
  ): Promise<ApiResult<T>> {
    try {
      const response = await apiGithub.patch<T>(endpoint, data, config);
      return { data: response.data };
    } catch (error) {
      const axiosError = error as AxiosError;
      return {
        data: {} as T,
        error: {
          statusCode: axiosError.response?.status ?? 0,
          message: axiosError.message,
        },
      };
    }
  },

  async delete<T>(
    endpoint: string,
    config: AxiosRequestConfig = {}
  ): Promise<ApiResult<T>> {
    try {
      const response = await apiGithub.delete<T>(endpoint, config);
      return { data: response.data };
    } catch (error) {
      const axiosError = error as AxiosError;
      return {
        data: {} as T,
        error: {
          statusCode: axiosError.response?.status ?? 0,
          message: axiosError.message,
        },
      };
    }
  },
};
