import { SetStateAction, useCallback, useEffect, useState } from "react";

export enum Status {
  Idle = "idle",
  Pending = "pending",
  Success = "success",
  Error = "error",
}
const useAsync = <T, E = string>(
  asyncFunction: () => Promise<T>,
  immediate = true
) => {
  const [status, setStatus] = useState<Status>(Status.Idle);
  const [value, setValue] = useState<T | null>(null);
  const [error, setError] = useState<E | null>(null);

  const execute = useCallback(async () => {
    setStatus(Status.Pending);
    setValue(null);
    setError(null);

    let response: T | null = null;
    try {
      response = await asyncFunction();
    } catch (e) {
      console.log(e);
      setError(e as SetStateAction<any>);
      setStatus(Status.Error);
    }
    setValue(response);
    setStatus(Status.Success);
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      (async () => {
        await execute();
      })();
    }
  }, [execute, immediate]);

  interface IUseAsync {
    execute: () => Promise<any>;
    status: Status;
    value: T | null;
    error: E | null;
  }

  return {
    execute,
    status,
    value,
    error,
  } as IUseAsync;
};

export default useAsync;
