import { QueryClient, QueryFunction } from "@tanstack/react-query";

// Backend API removed. No error throwing needed.

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<{ success: boolean; message: string }> {
  // Backend API removed. Return dummy response.
  return Promise.resolve({ success: true, message: "No backend. API not available." });
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn = <T>() => async () => {
  // Backend API removed. Return dummy response.
  return { success: true, message: "No backend. API not available." } as T;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn(),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
