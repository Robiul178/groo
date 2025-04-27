import { Cloudy, Pin, Send } from "lucide-react";
import React from "react";
import { Overview } from "../saleforce-barchart/saleforce-barchart";

const SaleForce = () => {
  return (
    <div>
      <div className=" max-w-xl mx-auto ">
        <div className="bg-[#02276B] rounded-2xl p-5">
          <div className="flex justify-between">
            <div className="flex gap-2 items-center justify-center">
              <Cloudy size={20} fill="white" color="white" />
              <p className="text-white">Salesforce</p>
            </div>
            <div className="flex gap-3 items-center justify-center text-white">
              <Pin size={20} />
              <Send size={20} />
            </div>
          </div>
          <div className="mt-4  text-white">
            <p>Conversion rate</p>
            <h1 className="text-5xl py-2">72%</h1>
            <div className="text-slate-400">In the past 30 days</div>
          </div>
          <div className="max-sm:px-4">
            <Overview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleForce;
