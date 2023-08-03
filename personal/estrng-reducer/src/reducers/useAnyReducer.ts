import { useReducer, useCallback, useEffect } from "react";
import { anyReducer } from "./anyReducer";
import { useAnyService } from "../services/anyService";

export const useAnyReducer = (operation: "edit" | "create") => {
  const [state, dispatch] = useReducer(anyReducer, { data: null });
  const { getResource } = useAnyService();

  const dispatchAny = useCallback((action: { type: "SET_DATA"; login: any }) => {
    dispatch(action);
  }, []);

  useEffect(() => {
    (async () => {
      if (operation === "edit") {
        const initData = await getResource();
        dispatch({ type: "SET_DATA", login: initData });
      }
    })();
  }, [operation, getResource]);

  return { state, dispatchAny };
};
