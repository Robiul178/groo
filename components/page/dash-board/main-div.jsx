"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const MainNav = ({ className, ...props }) => {
  const pathname = usePathname();

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {/* <Link
        className={`text-sm font-medium text-muted-foreground transition-colors hover:text-primary ${
          pathname === "/user/dashboard"
            ? "border-b  text-cyan-950 border-slate-500 "
            : ""
        }`}
        href="/user/dashboard"
      >
        Dashboard
      </Link> */}
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </Link>
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Customers
      </Link>
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Products
      </Link>
      <Link
        className={`text-sm font-medium text-muted-foreground transition-colors hover:text-primary ${
          pathname === "/user/instances"
            ? "border-b  text-cyan-950 border-slate-500 "
            : ""
        }`}
        href="/user/instances"
      >
        Instance
      </Link>
    </nav>
  );
};

export default MainNav;
