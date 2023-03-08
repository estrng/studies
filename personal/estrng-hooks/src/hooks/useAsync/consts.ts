import { IddleState } from "./types";

export const ASYNC_INITIAL_STATE: IddleState = {
  status: "idle",
  data: null,
  error: null,
} as const satisfies IddleState