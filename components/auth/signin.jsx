"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

const forgetPasswordSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
});

const SignUp = () => {
  const [isForgetPassword, setIsForgetPassword] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const forgetPasswordForm = useForm({
    resolver: zodResolver(forgetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Sign Up data:", data);
  };

  const onForgetPasswordSubmit = async (data) => {
    console.log("Forget Password data:", data);
    try {
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data.email }),
      });

      if (!response.ok) {
        throw new Error("Failed to send reset email. Please try again.");
      }

      const result = await response.json();
      console.log("Reset email sent:", result.message);
      alert("A password reset link has been sent to your email address.");
    } catch (error) {
      console.error(error);
      alert(error.message || "An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div className="md:max-w-3xl mx-auto">
        <div className="h-screen flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold font-serif">Welcome back</h1>
          <p className="py-2 max-sm:px-3 max-sm:text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>

          {!isForgetPassword ? (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="md:w-[65%]"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="my-4">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Enter your password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <span className="py-2 flex justify-between">
                  <span className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Premium for 30 days
                    </label>
                  </span>
                  <span>
                    <h2
                      className="font-semibold text-sm cursor-pointer"
                      onClick={() => setIsForgetPassword(true)}
                    >
                      Forget password
                    </h2>
                  </span>
                </span>

                <Input
                  type="submit"
                  value="Sign Up"
                  className="bg-black text-white font-semibold"
                />
              </form>
              <button className="flex gap-1 border w-[65%] font-semibold mt-3 items-center justify-center py-[6px] mb-1 border-zinc-300 hover:bg-slate-500 hover:text-white">
                <Image
                  src="/assets/auth/google.png"
                  alt=""
                  width={400}
                  height={400}
                  className="h-5 w-5"
                />
                Sign in with Google
              </button>
              <button className="flex gap-1 border w-[65%] font-semibold mt-3 items-center justify-center py-[6px] border-zinc-300 hover:bg-slate-500 hover:text-white">
                <Image
                  src="/assets/auth/twitter.png"
                  alt=""
                  width={400}
                  height={400}
                  className="h-5 w-5"
                />
                Sign in with Twitter
              </button>
              <button className="mt-5">
                If you already have an account.
                <span className="font-semibold underline"> Sign in here</span>
              </button>
            </Form>
          ) : (
            <Form {...forgetPasswordForm}>
              <form
                onSubmit={forgetPasswordForm.handleSubmit(
                  onForgetPasswordSubmit
                )}
                className="w-[65%] flex flex-col items-center justify-center"
              >
                <div className="my-4 w-full">
                  <FormField
                    control={forgetPasswordForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Input
                  type="submit"
                  value="Reset Password"
                  className="bg-black text-white font-semibold"
                />
                <button
                  type="button"
                  onClick={() => setIsForgetPassword(false)}
                  className="mt-3 underline text-sm font-semibold"
                >
                  Back to Sign Up
                </button>
              </form>
            </Form>
          )}
        </div>
      </div>
    </>
  );
};

export default SignUp;
