"use client";

import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import { Select, SelectItem } from "@nextui-org/select";
import { Skeleton } from "@nextui-org/skeleton";
import {
  Calendar,
  CalendarClock,
  ChevronDown,
  IndianRupee,
  MapPinned,
  Music,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { animals } from "./data/event-data";

export default function Events() {
  return (
    <main className="mt-5 p-4 ">
      <section>
        <div className="flex gap-2 items-center">
          <div className="border inline-block p-2 rounded-full">
            <MapPinned strokeWidth={1} />
          </div>
          <div>
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
              FIND NEW EXPERIENCES
            </h1>
            <p className="text-gray-500">Explore. Discover. Make a Plan</p>
          </div>
        </div>
        <div className="w-6xl max-sm:overflow-x-scroll">
          <div className="w-[1000px] my-5 grid grid-cols-6  gap-4">
            <Link href="#">
              {" "}
              <div>
                <Image
                  src="/assets/event/smile-man.png"
                  alt="jhdg"
                  width={200}
                  height={200}
                  className="rounded max-sm:w-full"
                />
              </div>
            </Link>
            <Link href="#">
              {" "}
              <div>
                <Image
                  src="/assets/event/courses.png"
                  alt="jhdg"
                  width={200}
                  height={200}
                  className="rounded max-sm:w-full"
                />
              </div>
            </Link>
            <Link href="#">
              {" "}
              <div>
                <Image
                  src="/assets/event/poket.png"
                  alt="jhdg"
                  width={200}
                  height={200}
                  className="rounded max-sm:w-full"
                />
              </div>
            </Link>
            <Link href="#">
              {" "}
              <div>
                <Image
                  src="/assets/event/courses.png"
                  alt="jhdg"
                  width={200}
                  height={200}
                  className="rounded max-sm:w-full"
                />
              </div>
            </Link>
            <Link href="#">
              <div>
                <Image
                  src="/assets/event/smile-man.png"
                  alt="jhdg"
                  width={200}
                  height={200}
                  className="rounded max-sm:w-full"
                />
              </div>
            </Link>
            <Link href="#">
              <div>
                <Image
                  src="/assets/event/poket.png"
                  alt="jhdg"
                  width={200}
                  height={200}
                  className="rounded max-sm:w-full"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="md:mt-20 max-sm:mt-10">
        <div className="flex gap-2 items-center ">
          {" "}
          <div className="border inline-block p-1.5 rounded-full">
            <Music strokeWidth={1} />
          </div>
          <h2 className="text-base max-sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
            Music
          </h2>
        </div>
        <Link href="#">
          <div className="w-full pt-5">
            <Image
              src="/assets/event/event-banner.jpg"
              alt="banner"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full  h-auto rounded-2xl max-sm:rounded-md max-sm:object-fill"
            />
          </div>
        </Link>
      </section>

      <section className="md:mt-20 max-sm:mt-10">
        <div className="flex gap-2 items-center ">
          {" "}
          <div className="border inline-block p-1.5 rounded-full">
            <Calendar strokeWidth={1} />
          </div>
          <h2 className="text-base max-sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
            Event This Week
          </h2>
        </div>
        <div className=" pt-5 md:flex gap-5 ">
          <div className="max-sm:mb-3">
            <Button className="border h-20 w-full rounded-lg ">
              <span className="flex flex-col">
                <h2 className="text-2xl font-bold text-red-500">Today</h2>
                <p className="text-gray-500">Wed, 20 Nov</p>
              </span>
            </Button>
          </div>
          <div className="max-sm:mb-3">
            <Button className="border h-20 w-full rounded-lg ">
              <span className="flex flex-col">
                <h2 className="text-2xl font-bold text-red-500">Tomorrow</h2>
                <p className="text-gray-500">Wed, 20 Nov</p>
              </span>
            </Button>
          </div>
          <div>
            <Button className="border h-20 w-full rounded-lg">
              <span className="flex flex-col">
                <h2 className="text-2xl font-bold text-red-500">Weekend</h2>
                <p className="text-gray-500">Wed, 20 Nov</p>
              </span>
            </Button>
          </div>
        </div>
      </section>
      <section className="mt-20">
        <div className="flex gap-2 items-center">
          {" "}
          <div className="border inline-block p-1.5 rounded-full">
            <User strokeWidth={1} />
          </div>
          <h2 className="text-base max-sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
            Member
          </h2>
        </div>

        {/* 
         <div className="">
          <div className="my-5 grid grid-cols-6  gap-4">
        */}
        <div className="mt-5 w-6xl max-sm:overflow-x-scroll">
          <div className="w-[75rem] flex justify-between ">
            <Link href="#">
              {" "}
              <div className=" flex flex-col items-center justify-center max-sm:mb-3">
                <Image
                  src="/assets/event/apdillon.jpg"
                  alt="ap"
                  width={150}
                  height={150}
                  className="rounded-3xl"
                />
                <h2 className="text-lg font-bold mt-1">Ap Dillon</h2>
                <p className="text-gray-500">1 Event</p>
              </div>
            </Link>
            <Link href="#">
              <div className="flex flex-col items-center justify-center max-sm:mb-3">
                <Image
                  src="/assets/event/2nd.jpg"
                  alt="ap"
                  width={150}
                  height={150}
                  className="rounded-3xl"
                />
                <h2 className="text-lg font-bold mt-1">Ben Bhomer</h2>
                <p className="text-gray-500">1 Event</p>
              </div>
            </Link>
            <Link href="#">
              <div className="flex flex-col items-center justify-center max-sm:mb-3">
                <Image
                  src="/assets/event/arijit.jpg"
                  alt="ap"
                  width={150}
                  height={150}
                  className="rounded-3xl"
                />
                <h2 className="text-lg font-bold mt-1">Arijit Sing</h2>
                <p className="text-gray-500">1 Event</p>
              </div>
            </Link>
            <Link href="#">
              {" "}
              <div>
                <Card className="w-[150px]  space-y-5 " radius="lg">
                  <Skeleton className="rounded-3xl bg-gray-200">
                    <div className="h-[150px] "></div>
                  </Skeleton>
                  <div className="space-y-3 flex flex-col items-center">
                    <Skeleton className="w-4/5 rounded bg-gray-200">
                      <div className="h-3 w-4/5 rounded-lg "></div>
                    </Skeleton>
                    <Skeleton className="w-3/5 rounded bg-gray-200">
                      <div className="h-3 w-3/5 rounded-lg bg-amber-200"></div>
                    </Skeleton>
                  </div>
                </Card>
              </div>
            </Link>
            <Link href="#">
              {" "}
              <div className="flex flex-col items-center justify-center max-sm:mb-3">
                <Image
                  src="/assets/event/artbat.jpg"
                  alt="ap"
                  width={150}
                  height={150}
                  className="rounded-3xl"
                />
                <h2 className="text-lg font-bold mt-1">Art Bat</h2>
                <p className="text-gray-500">1 Event</p>
              </div>
            </Link>
            <Link href="#">
              {" "}
              <div className="flex flex-col items-center justify-center max-sm:mb-3">
                <Image
                  src="/assets/event/apdillon.jpg"
                  alt="ap"
                  width={150}
                  height={150}
                  className="rounded-3xl"
                />
                <h2 className="text-lg font-bold mt-1">Ap Dillon</h2>
                <p className="text-gray-500">1 Event</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="mt-20">
        <div className="flex w-full flex-wrap  md:flex-nowrap justify-between mb-3">
          <div className="flex gap-2 items-center">
            {" "}
            <div className="border inline-block p-1.5 rounded-full">
              <Calendar strokeWidth={1} />
            </div>
            <h2 className="text-base max-sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
              Popular Events
            </h2>
          </div>
          <div className="max-w-[600px] flex items-center justify-between gap-3 ">
            <label htmlFor="#">Select option</label>
            <span className="">
              <Select
                className="w-[200px]  "
                defaultSelectedKeys={["cat"]}
                label="Favorite Animal"
                placeholder="Select an animal"
                startContent={<ChevronDown />}
              >
                {animals.map((animal) => (
                  <SelectItem key={animal.key}>{animal.label}</SelectItem>
                ))}
              </Select>
            </span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-1 ">
          <div className="flex flex-row gap-4 mt-5">
            <div className="border rounded-lg inline-block">
              <Image
                src="/assets/event/eBanner2.jpg"
                alt="ekfhkb"
                sizes="100vh"
                width={0}
                height={0}
                className="w-full aspect-video rounded-tr-lg rounded-tl-lg"
              />
              <div className="p-4 flex flex-col gap-2">
                <h2 className="text-[16px] font-bold ">
                  Startup Master Class 2024, Delhi Edition
                </h2>
                <div className="py-3 text-[13px] ">
                  <div className="flex items-center gap-2 mb-2">
                    <CalendarClock strokeWidth={1} size={20} />
                    <p className=" font-semibold text-slate-500">
                      NSIC Exhibition Ground Gate 6, Delhi
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPinned strokeWidth={1} size={20} />
                    <p className=" font-semibold text-slate-500">
                      Nov 23 <span className="px-2"> |</span> Windsor Place, New
                      Delhi
                    </p>
                  </div>
                </div>
                <p className="font-bold  uppercase flex gap-2">
                  <span className="text-fuchsia-500 text-lg flex items-center">
                    <IndianRupee size={18} /> 600
                  </span>{" "}
                  <span className="mt-[2px] text-base">onword</span>
                </p>
              </div>
            </div>
          </div>
          <Card className="w-full space-y-5 mt-5 border rounded-lg">
            <Skeleton className="rounded-tr-lg rounded-tl-lg bg-gray-200">
              <div className="h-48 "></div>
            </Skeleton>
            <div className="space-y-3 px-3">
              <Skeleton className="w-[90%] rounded bg-gray-200">
                <div className="h-4 w-4/5 rounded-lg"></div>
              </Skeleton>
              <div className="relative top-4 space-y-3">
                <Skeleton className="w-4/5 rounded bg-gray-200">
                  <div className="h-3 w-3/5 rounded-lg "></div>
                </Skeleton>
                <Skeleton className="w-4/5 rounded bg-gray-200">
                  <div className="h-3 w-3/5 rounded-lg "></div>
                </Skeleton>
              </div>
              <div className="relative top-8 flex gap-2">
                <Skeleton className="w-[12%] rounded bg-gray-200">
                  <div className="h-5 w-3/5 rounded-lg "></div>
                </Skeleton>
                <Skeleton className="w-1/5 rounded bg-gray-200">
                  <div className="h-5 w-3/5 rounded-lg "></div>
                </Skeleton>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
