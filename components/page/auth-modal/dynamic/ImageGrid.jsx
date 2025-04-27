import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function ImageGrid({ url }) {
  return (
    <div>
      <Image
        src={url}
        alt="ssds"
        width={200}
        height={200}
        className="w-full aspect-video"
      />
      <button className="border px-2 bg-white relative bottom-12 left-[180px]">
        Replace
      </button>
    </div>
  );
}
