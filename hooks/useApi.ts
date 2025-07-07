import { ApiResponse } from "@/lib/api";
import { useCallback, useState } from "react";

interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useApi<T = any>() {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(
    async (fetchFn: () => Promise<ApiResponse<T>>) => {
      setState({ data: null, loading: true, error: null });

      try {
        const response = await fetchFn();

        if (response.success) {
          setState({ data: response.data, loading: false, error: null });
        } else {
          setState({
            data: null,
            loading: false,
            error: response.error || "Unknown error",
          });
        }

        return response;
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Unknown error";
        setState({ data: null, loading: false, error: errorMessage });
        throw error;
      }
    },
    []
  );

  return { ...state, execute };
}
