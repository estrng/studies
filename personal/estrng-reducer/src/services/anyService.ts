import { useCallback } from "react";

export const useAnyService = () => {
  const getResource = useCallback(async () => {
    const res = await fetch("https://api.github.com/users/estrng");
    const data = await res.json();
    return { input: data?.login };
  }, []);

  return { getResource };
};
