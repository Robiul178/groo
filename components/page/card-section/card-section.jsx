import DynamicCard from "@/components/common/dynamic-card";
import { Button } from "@/components/ui/button";
import React from "react";

const CardSection = () => {
  return (
    <div className="mt-20 max-sm:p-4">
      <div className="text-center py-2">
        <h1 className="text-4xl font-bold">Recognized by the experts</h1>
        <p className="py-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste est{" "}
          amet veritatis <br /> alias, in harum accusantium amet veritatis
          alias, in harum accusantium
        </p>
      </div>
      <div className="py-10 grid md:grid-cols-3 max-sm:grid-cols-1 gap-10">
        <DynamicCard
          title=" Card tittle here"
          description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          tempora voluptates ab laboriosam delectus, quibusdam "
          gradientColors=""
        />{" "}
        <DynamicCard
          title=" Card tittle here"
          description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
        tempora voluptates ab laboriosam delectus, quibusdam "
          gradientColors="from-yellow-100/50 to-white"
        />{" "}
        <DynamicCard
          title=" Card tittle here"
          description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
      tempora voluptates ab laboriosam delectus, quibusdam "
          gradientColors="from-yellow-100/50 to-white"
        />{" "}
        <DynamicCard
          title=" Card tittle here"
          description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          tempora voluptates ab laboriosam delectus, quibusdam "
          gradientColors="from-yellow-100/50 to-white"
        />{" "}
        <DynamicCard
          title=" Card tittle here"
          description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
        tempora voluptates ab laboriosam delectus, quibusdam "
          gradientColors=""
        />{" "}
        <DynamicCard
          title=" Card tittle here"
          description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
      tempora voluptates ab laboriosam delectus, quibusdam "
          gradientColors="from-yellow-100/50 to-white"
        />
      </div>
    </div>
  );
};

export default CardSection;
