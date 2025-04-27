import React from "react";

const MilestoneTimeline = () => {
  const milestones = [
    { date: "Nov '22", text: "Management team in place" },
    {
      date: "Dec '22",
      text: "Product is ready and tested, preregistration commences",
    },
    { date: "Jan '23", text: "Launch" },
    {
      date: "Dec '23",
      text: "10,000 corporate and 250,000 retail accounts and getting EMI license",
    },
  ];

  return (
    <div className="w-full bg-blue-700 h-screen bg-[url('/assets/layered-wave.svg')] bg-cover bg-no-repeat ">
      <div className="max-w-7xl mx-auto pt-10  ">
        <div className="mt-[3%]">
          <div className="py-10 text-center">
            <h2 className="text-5xl font-bold text-white">
              Lorem ipsum dolor elit <br /> consectetur
            </h2>
            <p className="text-blue-300 mt-3 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              velit <br />
              non expedita omnis similique molestiae in
            </p>
          </div>
          <ol className="items-center flex  w-full mt-16">
            <li className="relative mb-6 sm:mb-0 w-full">
              <div className="flex justify-between mb-3">
                <div className="text-blue-300">
                  <h1 className="text-lg font-bold text-white">Nov '22</h1>
                  <p className="text-blue-300">Management Team</p>
                  <p className="text-blue-300">in Place</p>
                </div>
                <div className="text-center relative right-5">
                  <h1 className="text-lg font-bold text-white">Dec '22</h1>
                  <p className="text-blue-300">Management Team</p>
                  <p className="text-blue-300">in Place</p>
                </div>
                <div className="text-center relative left-2">
                  <h1 className="text-lg font-bold text-white">Jan '22</h1>
                  <p className="text-blue-300">Management Team</p>
                  <p className="text-blue-300">in Place</p>
                </div>
                <div className="text-end">
                  <h1 className="text-lg font-bold text-white">Feb '22</h1>
                  <p className="text-blue-300">Management Team</p>
                  <p className="text-blue-300">in Place</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-6  w-[60px]  border-4 border-white rounded-full"></div>
                <div className="hidden sm:flex w-full bg-white h-1 dark:bg-gray-700"></div>{" "}
                <div className="h-6   w-[60px]  border-4 border-white rounded-full"></div>
                <div className="hidden sm:flex w-full bg-white h-1 dark:bg-gray-700"></div>{" "}
                <div className="h-6   w-[60px]  border-4 border-white rounded-full"></div>
                <div className="hidden sm:flex w-full bg-white h-1 dark:bg-gray-700"></div>{" "}
                <div className="h-6   w-[60px]  border-4 border-white rounded-full"></div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default MilestoneTimeline;
