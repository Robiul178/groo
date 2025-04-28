import { Button } from "@nextui-org/button";
import React from "react";

const Testimonial = () => {
  return (
    <div className=" max-w-6xl mx-auto  mt-10">
      <div
        style={{
          backgroundImage: "url('/assets/topography.svg')",
        }}
        className="bg-emerald-900 rounded "
      >
        <div className="bg-black/50 text-white text-center py-10 rounded-xl ">
          <div
            className=" px-3 py-1 inline-block  text-emerald-900 bg-cover border rounded-full"
            // style={{
            //   backgroundImage: "url('/assets/wer.svg')",
            // }}
          >
            <span className="flex items-center gap-2 text-white ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path d="M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z" />
                <path d="M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z" />
              </svg>

              <p className="text-lg">Paragraph</p>
            </span>
          </div>
          <h2 className="text-4xl font-bold text-white py-3">
            Get In Touch With Us
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur elit. <br /> moving it to a
            local folder.
          </p>
          <div className="bg-white rounded-xl   mt-5 max-w-[40%] mx-auto  shadow-2xl shadow-emerald-700shadow">
            <div
              className="p-2 shadow-inner flex justify-center"
              style={{
                boxShadow: "5px 5px 10px 0px rgba(0,0,0,0.22) inset",
                WebkitBoxShadow: "5px 5px 10px 0px rgba(0,0,0,0.22) inset",
                MozBoxShadow: "5px 5px 10px 0px rgba(0,0,0,0.22) inset",
              }}
            >
              <input
                type="text"
                placeholder="Email"
                className=" w-full bg-transparent px-3"
              />
              <Button className=" bg-emerald-500 text-white ">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
