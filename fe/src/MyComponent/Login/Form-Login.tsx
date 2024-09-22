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
import { formSchemaLogin } from "@/utils/SchemaAuth";
import Input_Password from "../Components-All/Auth/Input-Password";

type StateForm = z.infer<typeof formSchemaLogin>;
export default function Form_Login() {
  const [showPassword, showPasswordSet] = useState(false);
  const form = useForm<StateForm>({
    resolver: zodResolver(formSchemaLogin),
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
                    placeholder="432ref"
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
                  <Input_Password
                    showPassword={showPassword}
                    showPasswordSet={showPasswordSet}
                    field={field}
                  />
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
            <Link href={"/register"} className="text-green_amd underline ">
              Register Akun
            </Link>
          </span>
        </p>
      </section>
    </section>
  );
}
