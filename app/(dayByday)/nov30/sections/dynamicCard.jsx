import * as React from "react";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag, i) => (
          <>
            <div key={i} className="text-sm">
              {tag}
            </div>
            <div className="h-1 bg-gray-700 my-2" />
          </>
        ))}
      </div>
      {/* <ScrollBar orientation="vertical" /> */}
    </ScrollArea>
  );
}
