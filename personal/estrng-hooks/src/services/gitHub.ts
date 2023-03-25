import apiGithub from "../api/api.github";
import {
  IGetPaginatedResponse,
  IGetTPaginatedResponse,
  IGetUserResponse,
  User,
} from "./gitHubServices.types";

const GIT_API_URL = "https://api.github.com";
const JSON_API_URL = "http://localhost:3333";

export function useGitHub() {
  async function callGitHubDataAxios(user: string): Promise<IGetUserResponse> {
    const { data, error } = await apiGithub.get<User>(
      `${GIT_API_URL}/users/${user}`
    );

    return {
      user: data,
      error,
    };
  }

  async function callTWithPagination<T>(
    user: string,
    page: number,
    perPage: number
  ): Promise<IGetTPaginatedResponse<T>> {
    const { data, error } = await apiGithub.get<IGetPaginatedResponse<T>>(
      `https://api.github.com/users/${user}/repos?page=${page}&per_page=${perPage}`
    );

    return {
      paginationData: data,
      error,
    };
  }

  return {
    callGitHubDataAxios,
    callTWithPagination,
  };
}
