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
import Link from "next/link";
import { formSchemaLogin } from "@/utils/SchemaAuth";
import Input_Password from "../Components-All/Auth/Input-Password";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { instance } from "@/utils/axios/instance";
import { useRouter } from "next/navigation";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

type StateForm = z.infer<typeof formSchemaLogin>;
export default function Form_Login() {
  const [showPassword, showPasswordSet] = useState(false);
  const router = useRouter();
  const form = useForm<StateForm>({
    resolver: zodResolver(formSchemaLogin),
    defaultValues: {
      idUser: "",
      password: "",
    },
  });
  const { mutate, isError, error } = useMutation({
    mutationFn: (data: StateForm) => {
      return instance.post("/login", data);
    },
    onSuccess: (data) => {
      router.push("/dashboard");
      console.log("oke data telah masuk", data);
    },
  });
  function onSubmit(values: StateForm) {
    mutate(values);
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
            {isError && (
              <p className="text-sm text-red-500 ">
                {(error as any).response?.data?.message}
              </p>
            )}
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
            <LoginLink className="text-green_amd underline ">
              Register Akun
            </LoginLink>
          </span>
        </p>
      </section>
    </section>
  );
}
