import { useCallback } from "react";
import { useSafeDispatch } from "../useSafeDispatcher";
import { useAsyncReducer } from "./asyncReducer";
import { IddleState, Nullable } from "./types";

/**
 * @todo error pode ser tipado com o tipo de erro que a promise pode retornar.
 * @todo status mudar para enum.
 * @todo run pode ser uma promise de axios.
 */
interface IUseAscynProps<T> {
  error: any
  status: "idle" | "pending" | "resolved" | "rejected"
  data: Nullable<T>
  run: (promise: Promise<any>) => void
}

// O hook recebe um estado inicial, que pode ser null ou undefined. e retorna um objeto com as propriedades:
// error: o erro que a promise retornou.
// status: o status da promise.
// data: os dados que a promise retornou.
// run: uma função que recebe uma promise e executa ela.
export function useAsync<T>(initialState: Nullable<IddleState> = null): IUseAscynProps<T> {
  const [state, unsafeDispatch] = useAsyncReducer<T, Error>(initialState);
  // useSafeDispatch é um hook que retorna uma função que só executa o dispatch se o componente estiver montado.

  const dispatch = useSafeDispatch(unsafeDispatch);
  // desestrutura o estado para retornar apenas as propriedades que o hook deve retornar.

  const { data, error, status } = state;

  const run = useCallback(
    (promise: Promise<T>) => {
      dispatch({ type: 'PENDING' });
      promise.then(
        data => {
          dispatch({ type: 'RESOLVED', data });
        },
        error => {
          dispatch({ type: 'REJECTED', error });
        }
      );
    },
    [dispatch]
  );

  return {
    error,
    status,
    data,
    run,
  };
}
