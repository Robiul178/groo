"use client";

import { Button } from "@nextui-org/button";
import { Skeleton } from "@nextui-org/skeleton";
import { ArrowUpNarrowWide, Flag } from "lucide-react";
import React from "react";
import { ResponsiveContainer, Tooltip, LineChart, Line } from "recharts";

export default function RechartForTRickyTraveller() {
  const data = Array.from({ length: 30 }).map((_, i) => ({
    pv: Math.floor(Math.random() * 10000),
  }));
  const CustomTooltip = () => {
    return (
      <div className="bg-white p-2 border rounded-xl text-slate-700 shadow-xl">
        <p className="desc">Followers: 2</p>
        <p className="desc">Date: 15 Dec 24</p>
      </div>
    );
  };
  return (
    <div className="grid grid-cols-3 gap-3  ">
      <div className="p-3 border-slate-300 rounded-xl w-[400px] border aspect-video ">
        <div className="mb-2 flex items-center justify-between px-2 ">
          <h2 className="text-xl font-bold ">
            Viwes{" "}
            <span className="text-sm font-semibold text-slate-400 ml-1">
              Last 10 days
            </span>
          </h2>
          <span className="flex font-bold bg-emerald-500 text-white px-3 rounded-full py-[2px] ">
            20% <ArrowUpNarrowWide size={20} />
          </span>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={1600} height={900} data={data}>
            <Tooltip cursor={{ fill: "#f1f5f9" }} content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#0f172a"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="border border-slate-300 p-3 rounded-xl w-[400px] aspect-video">
        <div className="mb-2 flex items-center justify-between px-2">
          <h2 className="text-xl font-bold ">
            Viwes{" "}
            <span className="text-sm font-semibold text-slate-400 ml-1">
              Last 10 days
            </span>
          </h2>
          <span className="flex font-bold bg-emerald-500 text-white px-3 rounded-full py-[2px] ">
            0% <ArrowUpNarrowWide size={20} />
          </span>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <h2 className="text-slate-400 font-semibold">Not enough data...</h2>
        </div>
      </div>
      <div className="border border-slate-300 p-3 rounded-xl w-[400px] aspect-video">
        <div className="mb-2 flex items-center justify-between px-2">
          <h2 className="text-xl font-bold ">
            Viwes{" "}
            <span className="text-sm font-semibold text-slate-400 ml-1">
              Last 10 days
            </span>
          </h2>
          <span className="flex font-bold bg-emerald-500 text-white px-3 rounded-full py-[2px] ">
            0% <ArrowUpNarrowWide size={20} />
          </span>
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h2 className="text-slate-400 font-semibold">Somthing went wrong</h2>
          <Button
            className="text-slate-400 text-sm font-semibold"
            variant="light"
            size="sm"
            startContent={<Flag size={18} />}
          >
            Report
          </Button>
        </div>
      </div>
      <div className="border border-slate-300 p-3 rounded-xl w-[400px] aspect-video ">
        <div className="mb-2 flex items-center justify-between px-2 ">
          <div className="flex items-baseline gap-1">
            <Skeleton className="w-24 h-7 bg-gray-300 rounded-full " />
            <Skeleton className="w-16 h-4 bg-gray-300 rounded-full " />
          </div>
          <Skeleton className="w-16 h-7 bg-gray-300 rounded-full" />
        </div>
        <div>
          <ChartSkeleton />
        </div>
      </div>
      <div></div>
    </div>
  );
}

const ChartSkeleton = () => {
  return (
    <svg
      version="1.1"
      className="aspect-video"
      viewBox="-5 -55 110 110"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path id="sin" d="m0 0c42 167 84 300 125 300" fill="none" />
        <use id="si" xlinkHref="#sin" transform="scale(0.1,-0.1)" />
        <pattern id="test" width="10" height="10" patternUnits="userSpaceOnUse">
          <rect
            width="10"
            height="10"
            fill="none"
            stroke="blue"
            strokeWidth="0.15"
          />
        </pattern>
        <g id="hf">
          <use xlinkHref="#si" />
          <use xlinkHref="#si" transform="translate(25) scale(-1,1)" />
        </g>
        <g id="gz">
          <use xlinkHref="#hf" />
          <use xlinkHref="#hf" transform="translate(50) scale(-1,-1)" />
        </g>
      </defs>
      <g stroke="#D1D5DB" strokeWidth="5" fill="none">
        <use xlinkHref="#gz" />
        <use xlinkHref="#gz" transform="translate(-50)" />
        <use xlinkHref="#gz" transform="translate(50)" />
        <use xlinkHref="#gz" transform="translate(100)" />
      </g>
    </svg>
  );
};
