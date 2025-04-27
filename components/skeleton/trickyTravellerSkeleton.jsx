"use client";

import React from "react";
import { Card, Skeleton } from "@nextui-org/react";

export default function TrickyTravellerSkeleton() {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <div>
        <Card className="w-[350px] space-y-5 p-4 border rounded-xl">
          <div className="flex gap-1 items-center">
            <div>
              <Skeleton className="flex rounded-full w-10 h-10 bg-gray-300" />
            </div>
            <div className="w-full flex flex-col gap-2">
              <Skeleton className="h-3 w-3/4 rounded bg-gray-300" />
              <Skeleton className="h-3 w-2/4 rounded bg-gray-300" />
            </div>
            <div className="w-full flex gap-2">
              <Skeleton className="h-6 w-2/4 rounded-full bg-gray-300" />
              <Skeleton className="h-6 w-[40%] rounded-full bg-gray-300" />
            </div>
          </div>
          <div className="space-y-3">
            <Skeleton className="w-full rounded">
              <div className="h-3 w-full rounded bg-gray-200"></div>
            </Skeleton>
            <Skeleton className="w-full rounded">
              <div className="h-3 w-4/5 rounded bg-gray-200"></div>
            </Skeleton>
            <div className="flex gap-2">
              <Skeleton className="h-3 w-1/5 rounded bg-gray-300"></Skeleton>
              <Skeleton className="h-3 w-1/5 rounded bg-gray-300"></Skeleton>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
