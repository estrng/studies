export interface ApiResult<T> {
  data: T;
  error?: ApiError;
}

/**
 * Interfaces para supervisionar o tipo de retorno seja ele sucesso ou de erros
 * de acordo com os contratos com o back end
 */
export interface ApiError {
  statusCode: number;
  message: string;
  details?: unknown;
}
