export type FetchResult<TData, TError> = {
  data: TData | null;
  error: TError | null;
};
