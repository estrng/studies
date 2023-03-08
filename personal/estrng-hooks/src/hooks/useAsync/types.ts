export type Nullable<T> = T | null | undefined;

export type IddleState = {
  status: "idle" | "pending";
  data?: null;
  error?: null;
};

export type PendingState<TData, TError> = {
  status: "pending";
  data: Nullable<TData>;
  error: Nullable<TError>;
};

export type ResolvedState<TData> = {
  status: "resolved";
  data: TData;
  error: null;
};

export type RejectedState<TError> = {
  status: "rejected";
  data: null;
  error: TError;
};

export type State<TData, TError> =
  | IddleState
  | PendingState<TData, TError>
  | ResolvedState<TData>
  | RejectedState<TError>

export type Event<TData, TError> =
  | { type: "PENDING" }
  | { type: "RESOLVED"; data: TData }
  | { type: "REJECTED"; error: TError }
