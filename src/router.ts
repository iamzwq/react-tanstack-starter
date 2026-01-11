import { createRouter } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { routeTree } from "./routeTree.gen";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      //   staleTime: 1000 * 60 * 5, // 5分钟
    },
  },
});

export const router = createRouter({
  routeTree,
  context: { queryClient },
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
  interface StaticDataRouteOption {
    // 定义你的项目允许哪些 staticData
    authRequired?: boolean;
    roles?: ("admin" | "user")[];
    title?: string;
    breadcrumb?: string;
  }
}
