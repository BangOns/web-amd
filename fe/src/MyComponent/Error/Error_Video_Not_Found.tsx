import { OctagonX } from "lucide-react";
import * as React from "react";

export default function Error_Video_Not_Found() {
  return (
    <section className="w-full h-full gap-3 flex justify-center items-center bg-white">
      <OctagonX className=" text-lg" />
      <h1 className="text-slate-400 font-sans text-lg font-semibold">
        Video Not Found
      </h1>
    </section>
  );
}
