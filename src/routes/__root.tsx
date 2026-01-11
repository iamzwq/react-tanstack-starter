import * as React from "react";
import { createRootRouteWithContext, HeadContent, Outlet } from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <HeadContent />
      <Outlet />
      {import.meta.env.MODE === "development" && <ReactQueryDevtools />}
    </React.Fragment>
  );
}
