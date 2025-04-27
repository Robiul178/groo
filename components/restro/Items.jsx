import { Search } from "lucide-react";
import React from "react";

export default function Items() {
  return (
    <div className="w-full h-screen">
      <header className="bg-white border-b p-4">
        <span className="flex items-center gap-1">
          <Search size={18} className="text-slate-400" />
          <input
            type="text"
            placeholder="Press / to search items or apply shortcode"
            className="w-full bg-transparent focus:outline-none"
          />
        </span>
      </header>
      <section className="h-full flex-1 p-4 overflow-y-auto bg-slate-200">
        {/* Categories */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-4">Categories</h2>
          <div className="w-44 h-28 bg-slate-300 animate-pulse"></div>
        </div>

        {/* Recent Items */}
        <div>
          <h2 className="text-lg font-bold mb-4">Recent Items</h2>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 max-sm:grid-cols-2 lg:gap-7 gap-5">
            {Array(14)
              .fill("")
              .map((_, index) => (
                <button
                  key={index}
                  className="w-full  bg-white   flex flex-col items-center justify-center"
                >
                  <span
                    className={`w-12 h-2 rounded mt-1 ${
                      index % 2 === 0 ? "bg-red-400" : "bg-green-400"
                    }`}
                  ></span>
                  <span className="p-5 ">
                    <p className=" font-semibold mb-2 text-center">
                      {index % 2 === 0
                        ? "Chicken tikka masala"
                        : "Mixed vegetable special salad"}
                    </p>
                  </span>
                </button>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
