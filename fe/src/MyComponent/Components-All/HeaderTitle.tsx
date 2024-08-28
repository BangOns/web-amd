import { cn } from "@/lib/utils";
import React from "react";

export default function Header_Title({
  children,
  classNameLine,
  classNameText,
}: {
  classNameLine?: string;
  classNameText?: string;
  children: React.ReactNode;
}) {
  return (
    <header className="py-4 flex items-center justify-center gap-2">
      <div className={cn("w-1/4 h-1 bg-white", classNameLine)}></div>
      <h1
        className={cn(
          "text-xl sm:text-3xl text-center   font-anton ",
          classNameText
        )}
      >
        {children}
      </h1>
      <div className={cn("w-1/4 h-1 bg-white", classNameLine)}></div>
    </header>
  );
}
