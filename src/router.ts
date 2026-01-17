import { createRouter } from "@tanstack/react-router";
import { queryClient } from "@/commons/lib/query-client";
import { routeTree } from "./routeTree.gen";

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
