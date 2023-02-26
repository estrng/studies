import { useReducer } from "react";
import { InitialData, Nullable, State, Event,  } from "../types/useComplexState.types";

export function useComplexState<TData, TError = string>(
  initialData: Nullable<TData> = null
): [State<TData, TError>, React.Dispatch<Event<TData, TError>>] {
  
  const initialState: InitialData<TData> = {
    status: "initial",
    data: initialData,
    error: null,
  };

  function complexStateReducer(
    state: State<TData, TError>,
    event: Event<TData, TError>
  ): State<TData, TError> {
    switch (event.type) {
      case "DRAFT_DATA":        
        return {
          status: 'drafting',
          data: {
            ...state.data,
            ...event.data
          },
          error: null 
        }
      default:
        return state;
    }
  }

  return useReducer(complexStateReducer, initialState);
}