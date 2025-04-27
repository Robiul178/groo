import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Star from "../icons/star";

const TestimonialCard = ({ paragraph, name }) => {
  return (
    <div className="bg-cyan-50 p-5 w-full h-full">
      <div className="flex gap-2 items-center justify-center ">
        <div>
          <Avatar className="h-10 w-10">
            <AvatarImage
              src="/assets/services/459982-PFO8XL-229.jpg"
              alt="@shadcn"
            />
            <AvatarFallback>FK</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col gap-3 w-full h-full">
          <div>
            <h2 className="text-[16px] font-semibold">{name}</h2>
            <div className="flex gap-[2px]">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <p className="font-normal text-gray-600">{paragraph}</p>
        <div className="mt-3">
          <p className="font-normal text-slate-800">
            5:40 PM <span className="px-2">|</span> Mar23,2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
