"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@nextui-org/button";

const formSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .length(10, "Phone number must be exactly 10 digits")
    .regex(/^[0-9]\d{9}$/, "Invalid phone number. Must be a 10-digit ")
    .min(10, "Phone number must be 10 digits"),
  first_answer: z.string().min(1, "Answer is required"),
  second_answer: z.string().min(1, "Answer is required"),
});

export default function InfoForm() {
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
      <div className="max-w-lg mx-auto  border rounded">
        <h2 className="text-2xl font-semibold pt-6 pl-6">
          Help us with few more information
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-6 flex flex-col justify-between gap-3">
            <div className="flex justify-between gap-3">
              <div className="w-full">
                <label className="block font-medium text-sm mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  {...register("firstName")}
                  className="w-full border px-3 py-2 rounded"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div className="w-full">
                <label className="block font-medium text-sm mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  {...register("lastName")}
                  className="w-full border px-3 py-2 rounded"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label className="block font-medium text-sm mb-1">
                Email Address
              </label>
              <input
                type="email"
                {...register("email")}
                className="w-full border px-3 py-2 rounded"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block font-medium text-sm mb-1">
                Phone Number
              </label>
              <div className="w-full border px-3 py-2 rounded flex">
                <p className=" text-slate-600">+91</p>
                <input
                  type="tel"
                  inputMode="tel"
                  {...register("phone")}
                  className="outline-none"
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>

            {/* Question */}
            <label className="block font-medium text-sm relative top-3">
              Questions :
            </label>
            <hr />

            <div>
              <label className="block font-medium text-sm mb-1">
                1. Is it possible to eat soup with a fork?
              </label>
              <input
                {...register("first_answer")}
                className="w-full border px-3 py-2 rounded"
                placeholder="Answer :"
              />
              {errors.answer && (
                <p className="text-red-500 text-sm">{errors.answer.message}</p>
              )}
            </div>
            <div>
              <label className="block font-medium text-sm mb-1">
                2. If a fly loses its wings, does it become a walk ?
              </label>
              <input
                {...register("second_answer")}
                className="w-full border px-3 py-2 rounded"
                placeholder="Answer :"
              />
              {errors.answer && (
                <p className="text-red-500 text-sm">{errors.answer.message}</p>
              )}
            </div>
          </div>
          <hr />
          <div className="p-3 flex flex-col items-end">
            <Button
              type="submit"
              className="bg-emerald-500 text-white px-4 py-2 rounded"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
