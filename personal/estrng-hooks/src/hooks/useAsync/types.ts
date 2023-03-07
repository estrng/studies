export type Nullable<T> = T | null | undefined;

export type IddleState<TData> = {
  status: "idle";
  data: Nullable<TData>;
  error: null;
};

export type LoadingState<TData, TError> = {
  status: "loading";
  data: Nullable<TData>;
  error: Nullable<TError>;
};

export type SucessState<TData> = {
  status: "success";
  data: TData;
  error: null;
};

export type FailureState<TError> = {
  status: "failure";
  data: null;
  error: TError;
};

export type State<TData, TError> =
  | IddleState<TData>
  | LoadingState<TData, TError>
  | SucessState<TData>
  | FailureState<TError>

export type Event<TData, TError> =
  | { type: "FETCH" }
  | { type: "RESOLVE"; data: TData }
  | { type: "REJECT"; error: TError }
