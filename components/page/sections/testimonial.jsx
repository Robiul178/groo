import TestimonialCard from "@/components/common/testimonial-card";
import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <div className="py-20">
      <h2 className="text-4xl font-bold text-center py-10">Testimonial</h2>
      <div class="grid grid-rows-9 grid-cols-12 gap-5 w-full h-full">
        <div class="row-start-1 row-end-5 col-start-1 col-end-4 w-full">
          <TestimonialCard
            paragraph=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet dolor
            tempore voluptates "
            name="Floyd Miles"
          />
        </div>
        <div class="row-start-1 row-end-9 col-start-9 col-end-13 w-full">
          <TestimonialCard
            paragraph=" 
            laudantium culpa quisquam molestias consequuntur
            reiciendis dolorum.
            laudantium culpa quisquam molestias consequuntur
            reiciendis dolorum.
            laudantium culpa quisquam molestias consequuntur
            reiciendis dolorum.
            laudantium culpa quisquam molestias consequuntur
            reiciendis dolorum.
            laudantium culpa quisquam molestias consequuntur
            reiciendis dolorum.
            laudantium culpa quisquam molestias consequuntur
            reiciendis dolor
            reiciendis dolorum.
            laudantium culpa quisquam molestias consequuntur
            reiciendis dolor
            reiciendis
            "
            name="Pink Floyed"
          />
        </div>
        <div class="row-start-1 row-end-5 col-start-4 col-end-9 w-full">
          <TestimonialCard
            paragraph=" 
            laudantium culpa quisquam molestias consequuntur
            laudantium culpa quisquam molestias consequuntur 
            reiciendis dolorum.
            laudantium culpa quisquam molestias consequuntur 
            reiciendis dolorum.
            laudantium culpa quisquam molestias consequuntur
            reiciendis dolorum.
            "
            name="No Name"
          />
        </div>
        <div class="row-start-5 row-end-9 col-start-1 col-end-5 w-full">
          <TestimonialCard
            paragraph=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet dolor
            tempore voluptates odio nostrum libero sapiente fugiat iure deleniti
            a, ex, quis omnis, laudantium culpa quisquam molestias consequuntur
            reiciendis dolorum."
            name="Floyd Miles"
          />
        </div>
        <div class="row-start-5 row-end-9 col-start-5 col-end-9 w-full">
          <TestimonialCard
            paragraph=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet dolor
            tempore voluptates odio nostrum libero sapiente fugiat iure deleniti
            a, ex, quis omnis, laudantium culpa quisquam molestias consequuntur
            reiciendis dolorum."
            name="Floyd Miles"
          />
        </div>
      </div>
      <div>
        <div className="bg-blue-500 p-8 text-white  mt-24 flex justify-between">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold">Get Started Today</h2>
            <p className="leading-5">
              Join Thousands of User Of Start Your Financial Transformation
            </p>
            <div className="inline">
              <button className="px-5 py-1  text-slate-800 bg-white font-bold">
                Get Started
              </button>
            </div>
          </div>
          <div className="w-full h-full">
            <Image
              src="/assets/girl.png"
              alt="girl"
              width={250}
              height={250}
              sizes="100vh"
              className="absolute right-56 top-[177em]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
