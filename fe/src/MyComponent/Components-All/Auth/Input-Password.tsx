import { Button } from "@/components/ui/button";
import React from "react";
import Icons from "../Icons-Props";
import { ControllerRenderProps } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { ShuffleIdUser } from "@/helper/ShuffleIdUser";

type PropsInputPassword = {
  showPassword: boolean;
  showPasswordSet: React.Dispatch<React.SetStateAction<boolean>>;
  field: ControllerRenderProps<any, any>;
};
export default function Input_Password({
  showPassword,
  showPasswordSet,
  field,
}: PropsInputPassword) {
  return (
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
        className="bg-transparent border-0 rounded-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:ring-0 hover:bg-transparent"
        onClick={() => showPasswordSet(!showPassword)}
      >
        <Icons
          name={showPassword ? "Eye" : "EyeOff"}
          className="text-slate-200 size-5"
        />
      </Button>
    </section>
  );
}
