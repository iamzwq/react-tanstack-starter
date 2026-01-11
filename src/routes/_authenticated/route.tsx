import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
  // beforeLoad: () => {
  //   const user = localStorage.getItem("user");
  //   if (!user) {
  //     throw redirect({
  //       to: "/login",
  //       replace: true,
  //       search: { redirect: window.location.href },
  //     });
  //   }
  //   return;
  // },
  component: RouteComponent,
  staticData: {
    authRequired: true,
    roles: ["admin", "user"],
    breadcrumb: "首页",
  },
  head: () => ({
    meta: [{ title: "首页" }],
  }),
});

function RouteComponent() {
  return (
    <>
      <header className="flex h-16 items-center border-b border-b-slate-200 px-4">
        Authenticated Layout
      </header>
      <Outlet />
    </>
  );
}
