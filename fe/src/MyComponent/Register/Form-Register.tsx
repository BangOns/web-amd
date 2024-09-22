"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { formSchemaRegister } from "@/utils/SchemaAuth";
import Input_Password from "../Components-All/Auth/Input-Password";
import Input_IdUser from "../Components-All/Auth/Input-IdUser";

type StateForm = z.infer<typeof formSchemaRegister>;
export default function Form_Register() {
  const [showPassword, showPasswordSet] = useState(false);
  const [showRePassword, showRePasswordSet] = useState(false);
  const form = useForm<StateForm>({
    resolver: zodResolver(formSchemaRegister),
    defaultValues: {
      idUser: "",
      password: "",
      rePassword: "",
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
                  <Input_IdUser field={field} setValue={form.setValue} />
                </FormControl>
                <FormDescription className="text-xs">
                  Mengandung 3 huruf dan 3 angka
                </FormDescription>
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
          <FormField
            control={form.control}
            name="rePassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Re-Password
                  <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input_Password
                    showPassword={showRePassword}
                    showPasswordSet={showRePasswordSet}
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
          Sudah Punya akun?{" "}
          <span>
            <Link href={"/login"} className="text-green_amd underline ">
              Login
            </Link>
          </span>
        </p>
      </section>
    </section>
  );
}
