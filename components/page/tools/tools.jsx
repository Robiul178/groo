import { ChartPie, MessageCircle, SquareCheck } from "lucide-react";
import React from "react";

const GeopperTools = () => {
  return (
    <div className="md:flex justify-between items-center max-sm:p-4 pt-14">
      <div className="md:w-1/4">
        <h1 className="text-3xl font-bold text-slate-800">
          Usefull tools <br /> for your brand
        </h1>
        <p className="py-5 font-semibold text-slate-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit .
        </p>
      </div>
      <div className="md:w-1/4 ">
        <SquareCheck size={24} />
        <h1 className="text-lg font-bold py-2 text-slate-800">Publishing</h1>
        <p className="pr-5 text-slate-600 font-semibold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="md:w-1/4 max-sm:mt-8">
        <ChartPie size={24} />
        <h1 className="text-lg font-bold py-2 text-slate-800">Analytics</h1>
        <p className="pr-5 text-slate-600 font-semibold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="md:w-1/4 max-sm:mt-8">
        <MessageCircle size={24} />
        <h1 className="text-lg font-bold py-2 text-slate-800">Engagement</h1>
        <p className="pr-5 text-slate-600 font-semibold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default GeopperTools;
