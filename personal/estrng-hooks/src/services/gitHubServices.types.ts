import { ApiError } from "../api/api.types";

// Interface do tipo de dado que queremos de retorno da chamada
export interface User {
  name: string;
  avatar_url: string;
  bio: string;
}

/**
 * Interface para um tipo específico de retorno de acordo com o contrato com o back end.
 * Utilizando o genérico T para o content principal dessa resposta tendo em vista que os outros
 * dados são apenas de paginação.
 */
export interface IGetPaginatedResponse<T> {
  content: T;
  page: number;
  perPage: number;
  total: number;
}

/**
 * Interfaces de retorno simples gerenciado pelo Dev.
 */
export interface IGetUserResponse {
  user: User;
  error: ApiError | undefined;
}

/**
 * Retorno um pouco mais complexo acordo como tipo de dado principal que o Dev necessita.
 * Levando em consideração que esse arquivo é para serviços de API.
 * O deve precisasaber o que fazer com os retornos das chamadas que serão sempre {data , erro}
 */
export interface IGetTPaginatedResponse<T> {
  paginationData: IGetPaginatedResponse<T>;
  error: ApiError | undefined;
}
