"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const formSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .length(10, "Phone number must be exactly 10 digits")
    .regex(/^[0-9]\d{9}$/, "Invalid phone number. Must be a 10-digit "),
  first_answer: z.string().min(1, "Answer is required"),
  second_answer: z.string().min(1, "Answer is required"),
});

export default function InfoForm2() {
  const [isFocused, setIsFocused] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div>
      <div className="max-w-lg ml-auto  md:rounded-xl shadow-xl  bg-white">
        <h2 className="text-2xl font-semibold p-6">
          Help us with a few more pieces of information
        </h2>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-6 flex flex-col justify-between gap-3">
            <div className="flex justify-between gap-3">
              <div className="w-full">
                <label className="block  font-medium text-sm  text-slate-500 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John"
                  {...register("firstName")}
                  className={`w-full border px-3 py-2 rounded shadow-sm bg-slate-50 ${
                    errors.firstName ? "border-red-500 text-red-500" : ""
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div className="w-full">
                <label className="block  font-medium text-sm  text-slate-500 mb-1">
                  Last Name
                </label>
                <input
                  placeholder="Duo"
                  type="text"
                  {...register("lastName")}
                  className={`w-full border px-3 py-2 rounded shadow-sm bg-slate-50 ${
                    errors.lastName ? "border-red-500 text-red-500" : ""
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label className="block  font-medium text-sm  text-slate-500 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="example@gmail.com"
                {...register("email")}
                className={`w-full border px-3 py-2 rounded shadow-sm bg-slate-50 ${
                  errors.email ? "border-red-500 text-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block  font-medium text-sm  text-slate-500 mb-1">
                Phone Number
              </label>

              <div
                className={`w-full  border px-3 py-2 rounded shadow-sm flex bg-slate-50 ${
                  errors.phone
                    ? "border-red-500  text-red-500"
                    : isFocused
                    ? "ring-[2px] ring-black border-none"
                    : ""
                }`}
              >
                <p className="text-slate-600">+91</p>

                <input
                  type="tel"
                  placeholder="2354678601"
                  inputMode="tel"
                  {...register("phone")}
                  className="outline-none flex-grow bg-transparent"
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />
              </div>

              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>

            {/* Question */}
            <label className="block  font-medium text-sm  text-slate-500 relative top-3">
              Questions:
            </label>
            <hr />

            <div>
              <label className="block  font-medium text-sm  text-slate-500 mb-1">
                1. Is it possible to eat soup with a fork?
              </label>
              <input
                {...register("first_answer")}
                className={`w-full border px-3 py-2 rounded shadow-sm bg-slate-50 ${
                  errors.first_answer ? "border-red-500 text-red-500" : ""
                }`}
                placeholder="Answer:"
              />
              {errors.first_answer && (
                <p className="text-red-500 text-sm">
                  {errors.first_answer.message}
                </p>
              )}
            </div>
            <div>
              <label className="block  font-medium text-sm  text-slate-500 mb-1">
                2. If a fly loses its wings, does it become a walk?
              </label>
              <input
                {...register("second_answer")}
                className={`w-full border px-3 py-2 rounded shadow-sm bg-slate-50 ${
                  errors.second_answer ? "border-red-500 text-red-500" : ""
                }`}
                placeholder="Answer:"
              />
              {errors.second_answer && (
                <p className="text-red-500 text-sm">
                  {errors.second_answer.message}
                </p>
              )}
            </div>
          </div>
          <hr />
          <div className="px-6 py-3 flex flex-col items-end">
            <Button
              type="submit"
              size="lg"
              className="bg-slate-900 font-semibold text-white rounded-xl"
              endContent={<ArrowRight size={20} />}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
