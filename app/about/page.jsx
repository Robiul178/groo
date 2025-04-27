import localFont from "next/font/local";
import Image from "next/image";
import React from "react";

const myFont = localFont({
  src: "../fonts/AbrilFatface-Regular.ttf",
});
// className={`${myFont.className}`}
const About = () => {
  let imggg =
    "https://plus.unsplash.com/premium_vector-1682301783227-0dce19a9c806?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RhbmRpbmclMjBtYW58ZW58MHx8MHx8fDA%3D";
  return (
    <div className={`bg-[#EBE8D9] py-10 `}>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-evenly pb-24">
          <div className="flex flex-col items-center justify-center">
            <div className="flex">
              <h1 className={`text-6xl font-semibold ${myFont.className}`}>
                21K
              </h1>
              <p className="text-gray-600 text-lg">+</p>
            </div>
            <p className="text-slate-700">Lorem ipsum dolor, sit amet</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex">
              <h1 className={`text-6xl font-semibold ${myFont.className}`}>
                95
              </h1>
              <p className="text-gray-600 text-lg">%</p>
            </div>
            <p className="text-slate-700">Lorem ipsum dolor, sit amet</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex">
              <h1 className={`text-6xl font-semibold ${myFont.className}`}>
                80
              </h1>
              <p className="text-gray-600 text-lg">%</p>
            </div>
            <p className="text-slate-700">Lorem ipsum dolor, sit amet</p>
          </div>
        </div>

        <div className="mb-20">
          <p className="text-slate-700">Lorem ipsum dolor sit,</p>
          <h1 className={`text-7xl py-3 leading-[80px] ${myFont.className}`}>
            We help our startup <br /> peers get their equity <br /> right
          </h1>
          <p className="text-slate-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <button className="bg-black px-6 py-2 text-white mt-2 ">
            Your Button Name
          </button>
        </div>

        <div>
          <div className="flex gap-40">
            <div className="w-1/3">
              <img
                // src="/assets/male-portrait.jpg"
                src={imggg}
                alt="man"
                width={400}
                height={400}
                className="max-w-[400px] h-auto "
              />
            </div>
            <div className="w-2/3">
              <div className="pb-10">
                <p className="text-slate-700">Lorem ipsum dolor sit,</p>
                <h1 className="text-4xl py-3">Exercise before an exit</h1>
                <p className="text-slate-700">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  ipsum dolor sit amet consectetur, adipisicing elit. sit amet
                  consectetur, adipisicing elit. sit amet consectetur,
                  adipisicing elit.
                </p>
                <button className="bg-black px-6 py-2 text-white mt-2 ">
                  Your Button Name
                </button>
              </div>
              <div>
                <p className="text-slate-700">Lorem ipsum dolor sit,</p>
                <h1 className="text-4xl py-3">Exercise before an exit</h1>
                <p className="text-slate-700">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  ipsum dolor sit amet consectetur, adipisicing elit. sit amet
                  consectetur, adipisicing elit. sit amet consectetur,
                  adipisicing elit.
                </p>
                <button className="bg-black px-6 py-2 text-white mt-2 ">
                  Button Name
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
