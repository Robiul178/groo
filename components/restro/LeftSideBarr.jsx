import { ChartNoAxesColumnIncreasing, DollarSign } from "lucide-react";
import React from "react";

export default function LeftSideBarr() {
  return (
    <div className="mt-3">
      <aside className="w-16 md:h-screen bg-white border-r flex flex-col items-center p-2">
        <div className="mb-4">
          <img src="/assets/logo.svg" alt="" className="w-7 h-7" />
        </div>
        <div className="mb-4 p-1 bg-gray-200 rounded w-7 h-7 flex items-center justify-center">
          <ChartNoAxesColumnIncreasing />
        </div>
        <div className="p-1 bg-red-500 text-white rounded w-7 h-7 flex items-center justify-center">
          <DollarSign />
        </div>
      </aside>
    </div>
  );
}
