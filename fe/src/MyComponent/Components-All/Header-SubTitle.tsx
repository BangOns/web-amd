import { cn } from "@/lib/utils";
import React from "react";

export default function Header_SubTitle({
  children,
  className,
  classNameText,
}: {
  classNameText?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <header className={cn("w-full ", className)}>
      <h1
        className={cn("font-anton border-l-2 border-white px-2", classNameText)}
      >
        {children}
      </h1>
    </header>
  );
}
