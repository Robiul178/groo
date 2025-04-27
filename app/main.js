"use client";

import Footerr from "@/components/common/footer";
import GropperNav from "@/components/common/navbar";
import { usePathname } from "next/navigation";
import React from "react";

const Main = ({ children }) => {
  const pathname = usePathname();
  const isDashboardRoute = pathname.startsWith("/user");
  console.log(pathname);

  return (
    <div>
      {/* {!isDashboardRoute && <GropperNav />} */}
      <main>{children}</main>
      {/* {!isDashboardRoute && <Footerr />} */}
    </div>
  );
};

export default Main;
