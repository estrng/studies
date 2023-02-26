import { useReducer } from "react";
import { IddleState, Nullable, State, Event } from "../types/useFetchReducer.types";


export function useFetchReducer<DataT, ErrorT = string>(
  initialData: Nullable<DataT> = null
) {
  const initialState: IddleState<DataT> = {
    status: "idle",
    data: initialData,
    error: null,
  };

  function fetchReducer(
    state: State<DataT, ErrorT>,
    event: Event<DataT, ErrorT>
  ): State<DataT, ErrorT> {
    switch (event.type) {
      case "FETCH":
        return {
          ...state,
          status: "loading",
          error: null
        };
      case "RESOLVE":
        return {
          status: "success",
          data: event.data,
          error: null
        };
      case "REJECT":
        return {
          status: "failure",
          data: null,
          error: event.error,
        };
      default:
        return state;
    }
  }

  return useReducer(fetchReducer, initialState);
}