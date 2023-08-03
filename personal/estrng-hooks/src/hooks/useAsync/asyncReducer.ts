import { useReducer } from "react";
import { State, Event, IddleState, Nullable } from "./types";
import { ASYNC_INITIAL_STATE } from "./consts";

//
export function useAsyncReducer<DataT, ErrorT = string>(initialData: Nullable<IddleState> = null) {
  function fetchReducer(state: State<DataT, ErrorT>, event: Event<DataT, ErrorT>): State<DataT, ErrorT> {
    switch (event.type) {
      case "PENDING":
        return {
          status: "pending",
          data: null,
          error: null,
        };
      case "RESOLVED":
        return {
          status: "resolved",
          data: event.data,
          error: null,
        };
      case "REJECTED":
        return {
          status: "rejected",
          data: null,
          error: event.error,
        };
      default:
        return state;
    }
  }

  return useReducer(fetchReducer, {
    ...ASYNC_INITIAL_STATE,
    ...initialData,
  } as State<DataT, ErrorT>);
}
