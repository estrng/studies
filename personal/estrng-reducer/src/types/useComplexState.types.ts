export type Nullable<T> = T | null | undefined;

export type InitialData<TData> = {
  status: "initial";
  data: Nullable<TData>;
  error: null;
};

export type DraftingData<TData, TError> = {
  status: "drafting";
  data: TData;
  error: Nullable<TError>;
};

export type FailureState<TError> = {
  status: "failure";
  data: null;
  error: TError;
};

export type State<TData, TError> =
  | InitialData<TData>
  | DraftingData<TData, TError>
  | FailureState<TError>

export type Event<TData, TError> =
  | { type: "DRAFT_DATA"; data: TData, error?: TError }
