import React from "react";
import { Button } from "@nextui-org/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ScrollAreaDemo } from "./sections/dynamicCard";

export default function page({ gPage, paragraph, page }) {
  return (
    <div className="max-w-6xl mx-auto my-20">
      {/* <ScrollArea className="h-72 w-[300px]">
        <Card className="w-[270px]  pt-3 ">
          <CardContent className="flex flex-col gap-2 text-sm font-semibold">
            <p>
              Number of Genarate page :{" "}
              <span className="font-bold">0{gPage}</span>
            </p>
            <p>
              Number of Paragraph :{" "}
              <span className="font-bold">0{paragraph}</span>
            </p>
            <p>
              Number of page : <span className="font-bold">0{page}</span>
            </p>
          </CardContent>
        </Card>
        <div className="max-w-[270px] mt-3">
          <Button className="w-full border mb-3">Version 1</Button>
          <Button className="w-full border mb-3">Version 1</Button>
          <Button className="w-full border mb-3">Version 2</Button>
          <Button className="w-full border mb-3">Version 2</Button>
          <Button className="w-full border mb-3">Version 3</Button>
          <Button className="w-full border mb-3">Version 3</Button>
          <Button className="w-full border">Version 4</Button>
          <Button className="w-full border">Version 4</Button>
        </div>{" "}
      </ScrollArea> */}

      <ScrollAreaDemo />
    </div>
  );
}
