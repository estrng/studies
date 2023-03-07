import { useCallback, useReducer } from "react";
import { useSafeDispatch } from "../useSafeDispatcher";
import { useAsyncReducer } from "./asyncReducer";

export function useAsync<T>() {
  const [state, unsafeDispatch] = useAsyncReducer();

  const dispatch = useSafeDispatch(unsafeDispatch);

  const { data, error, status } = state;

  const run = useCallback(
    (promise: Promise<T>) => {
      dispatch({ type: 'FETCH' });
      promise.then(
        data => {
          console.log('ENTROU NO HOOK')
          dispatch({ type: 'RESOLVE', data });
        },
        error => {
          dispatch({ type: 'REJECT', error });
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



