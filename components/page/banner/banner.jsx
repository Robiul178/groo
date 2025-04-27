"use client";

import { Video } from "lucide-react";
import Image from "next/image";
import React from "react";

const GopperBanner = () => {
  return (
    <div className="md:flex justify-between max-sm:p-4 text-slate-800">
      <div className="relative md:pt-28">
        <h1 className="text-5xl ">
          Grow your brand on <br />
          social media faster <br />
          with <span className="font-bold">gropper</span>
        </h1>
        <p className="font-semibold pt-8 text-slate-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Magnam
          in dolorum deleniti repellat ipsum autem dicta, <br /> ad rerum
          cupiditate
        </p>
        <div className="flex pt-8">
          <button className=" px-6 py-2 bg-slate-800 rounded-sm font-semibold text-white">
            Get Started
          </button>
          <button className="rounded-full px-6 py-2 text-slate-800">
            <span className="flex font-bold gap-1 items-center justify-center">
              <span className="">
                {" "}
                <Video size={26} />{" "}
              </span>
              Watch Demo
            </span>
          </button>
        </div>
        <div className="pt-8">
          <h2 className="text-lg text-slate-600">
            {" "}
            Trusted by more than <br />
            <span className="font-bold text-2xl text-slate-800">
              1500 + Barands
            </span>
          </h2>
        </div>
      </div>
      <div className="">
        <Image
          src="/assets/mannn.png"
          alt=""
          width={400}
          height={400}
          className="max-sm:relative top-4"
        />
      </div>
    </div>
  );
};

export default GopperBanner;
