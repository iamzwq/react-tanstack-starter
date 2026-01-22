import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";

declare module "@tanstack/react-query" {
  interface Register {
    queryMeta: {
      errorMessage?: string;
      disableGlobalErrorHandler?: boolean;
    };
    mutationMeta: {
      errorMessage?: string;
      successMessage?: string;
      disableGlobalErrorHandler?: boolean;
    };
  }
}

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === "string") {
    return error;
  }
  return "请求失败，请稍后重试。";
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5, // 5分钟
    },
    mutations: {
      retry: false,
    },
  },
  queryCache: new QueryCache({
    onError: (error, query) => {
      // 检查 query.meta 是否有我们定义的 disableGlobalErrorHandler 标志, 如果为 true, 则不处理全局错误
      if (query.meta?.disableGlobalErrorHandler) return;
      if (error.name === "AbortError") return;

      const message = query.meta?.errorMessage ?? getErrorMessage(error);
      console.error("Query Error:", error, message);
    },
  }),
  mutationCache: new MutationCache({
    onError: (error, _variables, _context, mutation) => {
      // 检查 mutation.meta 是否有我们定义的 disableGlobalErrorHandler 标志, 如果为 true, 则不处理全局错误
      if (mutation.meta?.disableGlobalErrorHandler) return;
      if (error.name === "AbortError") return;

      const message = mutation.meta?.errorMessage ?? getErrorMessage(error);
      console.error("Mutation Error:", error, message);
    },
    onSuccess: (_data, _variables, _context, mutation) => {
      if (mutation.meta?.disableGlobalErrorHandler) return;

      const message = mutation.meta?.successMessage;
      if (message) {
        console.log("Mutation Success:", message);
      }
    },
  }),
});
