"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string(),
});

const InputTwo = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder=""
                    {...field}
                    className="rounded-sm py-[8px] px-[6px]  font-thin font-sens text-sm focus:border-blue-500 focus:border-1 focus-visible:ring-0 outline-none transition-all duration-200 focus-inner-shadow
                    "
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder=""
                    {...field}
                    className="font-thin py-[8px] px-[6px] focus:border-blue-500 focus:border-1 focus-visible:ring-0 outline-none transition-all duration-200 focus-inner-shadow rounded-sm "
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-green-500 text-black/70 hover: text-white"
          >
            Sign in
          </Button>
        </form>
      </Form>
    </>
  );
};

export default InputTwo;
