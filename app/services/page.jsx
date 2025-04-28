import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section>
      <section className="bg-cyan-900 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="md:flex justify-between max-sm:justify-center max-sm:items-center overflow-hidden max-sm:p-4">
            <div className=" ">
              <h2 className="text-3xl font-bold text-white max-sm:mb-5">
                Build your best <br /> product with us
              </h2>
              <button className="bg-yellow-300 font-bold  text-slate-800 px-5 py-1 lg:mt-8 max-sm:mb-3">
                Let's Talk
              </button>
            </div>
            <div className="md:flex w-full gap-3">
              <Image
                src="/assets/services/453315-PFK163-664.jpg"
                alt=""
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-full md:max-w-[200px] md:max-h-[200px] max-sm:hidden"
              />
              <Image
                src="/assets/services/459982-PFO8XL-229.jpg"
                alt=""
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-full md:max-w-[200px] md:max-h-[200px] "
              />
              <Image
                src="/assets/services/5128503.jpg"
                alt=""
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-full max-w-[200px] max-h-[200px] max-sm:hidden"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-yellow-50 md:py-20 max-sm:py-10 ">
        <div className="max-w-6xl mx-auto max-sm:p-4">
          <div className="md:flex items-center justify-center">
            <div className="md:w-1/2 ">
              <Image
                src="/assets/services/453315-PFK163-664.jpg"
                alt=""
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-full max-w-[350px] max-h-[350px]"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold  text-slate-800 ">
                Hire Faster with <br /> Trusted Talent
              </h2>
              <p className="text-slate-700 py-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptates earum corrupti debitis facere voluptatum ipsa sit
                harum ducimus unde officiis excepturi tempore repellat
                inventore, enim asperiores maiores sunt incidunt fuga!
              </p>
              <button className="border px-5 py-1 border-slate-800 bg-cyan-900 text-white font-bold">
                Start Now
              </button>
            </div>
          </div>
          <div className="md:flex items-center justify-center my-28 gap-10">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold  text-slate-800 ">
                Reduce <br /> Oparational Cost
              </h2>
              <p className="text-slate-700 py-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptates earum corrupti debitis facere voluptatum ipsa sit
                harum ducimus unde officiis excepturi tempore repellat
                inventore, enim asperiores maiores sunt incidunt fuga!
              </p>
            </div>
            <div className="md:w-1/2 ">
              <Image
                src="/assets/services/459982-PFO8XL-229.jpg"
                alt=""
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-full max-w-[350px] max-h-[350px]"
              />
            </div>
          </div>
          <div className="md:flex items-center justify-center">
            <div className="md:w-1/2 ">
              <Image
                src="/assets/services/5128503.jpg"
                alt=""
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-full max-w-[350px] max-h-[350px]"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold  text-slate-800 ">
                Reduce risk & <br /> remove liability
              </h2>
              <p className="text-slate-700 py-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptates earum corrupti debitis facere voluptatum ipsa sit
                harum ducimus unde officiis excepturi tempore repellat
                inventore, enim asperiores maiores sunt incidunt fuga!
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default page;
