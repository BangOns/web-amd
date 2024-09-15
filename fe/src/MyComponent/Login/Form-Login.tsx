"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Icons from "../Components-All/Icons-Props";
import Link from "next/link";
const formSchema = z.object({
  idUser: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: "Username must be at least 8 characters.",
  }),
});
type StateForm = z.infer<typeof formSchema>;
export default function Form_Login() {
  const [showPassword, showPasswordSet] = useState(false);
  const form = useForm<StateForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      idUser: "",
      password: "",
    },
  });

  function onSubmit(values: StateForm) {
    console.log(values);
  }
  return (
    <section className="w-full space-y-3">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="idUser"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  ID <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="shadcn"
                    {...field}
                    className="bg-transparent text-white outline-none ring-0  focus:ring-0"
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
                <FormLabel>
                  Password
                  <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <section className="w-full flex gap-2 border items-center px-2 rounded-lg">
                    <Input
                      placeholder="shadcn"
                      {...field}
                      type={showPassword ? "text" : "password"}
                      className="bg-transparent text-white border-0 px-0 outline-none ring-0  focus:ring-0"
                    />
                    <Button
                      type="button"
                      size={"icon"}
                      className="bg-transparent border-0 rounded-0 focus:ring-0 hover:bg-transparent"
                      onClick={() => showPasswordSet(!showPassword)}
                    >
                      <Icons
                        name={showPassword ? "Eye" : "EyeOff"}
                        className="text-slate-200 size-5"
                      />
                    </Button>
                  </section>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <section className="font-roboto">
            <section className="text-red-500 text-sm "></section>
            <section className="w-full flex justify-end ">
              <Link href={"/"} className="text-green_amd text-sm">
                Lupa Password?
              </Link>
            </section>
          </section>
          <Button
            type="submit"
            className="w-full bg-green-800 text-white font-roboto hover:bg-green-900"
          >
            Submit
          </Button>
        </form>
      </Form>
      <section className="w-full font-roboto text-center text-sm">
        <p>
          Mau bikin akun?{" "}
          <span>
            <Link href={"/"} className="text-green_amd underline ">
              Register Akun
            </Link>
          </span>
        </p>
      </section>
    </section>
  );
}
