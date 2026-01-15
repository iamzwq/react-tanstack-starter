import { Link } from "@tanstack/react-router";

function SidebarItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="block rounded-lg px-4 py-2.5 leading-6 font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900"
      activeProps={{ className: "bg-blue-50 text-blue-700" }}
    >
      {children}
    </Link>
  );
}

export function Sidebar() {
  return (
    <ul className="w-64 space-y-2 border-r-4 border-blue-50 bg-white p-4">
      <li>
        <SidebarItem to="/">Home</SidebarItem>
      </li>
      <li>
        <SidebarItem to="/page1">Page 1</SidebarItem>
      </li>
    </ul>
  );
}
