import { QueryClient } from "@tanstack/react-query";

// Create a simple QueryClient with no backend API calls
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Initialize with these settings for better dev experience
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