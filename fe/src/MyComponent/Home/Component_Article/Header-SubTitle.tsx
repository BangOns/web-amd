import { cn } from "@/lib/utils";
import React from "react";

export default function Header_SubTitle({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <header className={cn("w-full ", className)}>
      <h1 className="text-lg font-anton border-l-2 border-white px-2 ">
        {children}
      </h1>
    </header>
  );
}
