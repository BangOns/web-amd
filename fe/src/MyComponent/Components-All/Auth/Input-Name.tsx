import { Button } from "@/components/ui/button";
import React from "react";
import Icons from "../Icons-Props";
import { ControllerRenderProps, UseFormSetValue } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { ShuffleIdUser } from "@/helper/ShuffleIdUser";

type PropsIdUser = {
  field: ControllerRenderProps<any, any>;
};
export default function Input_NameUser({ field }: PropsIdUser) {
  return (
    <section className="w-full flex gap-2 border items-center  rounded-lg">
      <Input
        placeholder="shadcn"
        {...field}
        className="bg-transparent text-white outline-none ring-0  focus:ring-0 border-0"
      />
    </section>
  );
}
