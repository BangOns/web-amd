import React from "react";

export default function Header_Title({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <header className="py-4 flex items-center justify-center gap-2">
      <div className="w-1/4 h-1 bg-white"></div>
      <h1 className="text-xl sm:text-3xl text-center   font-anton ">
        {children}
      </h1>
      <div className="w-1/4 h-1 bg-white"></div>
    </header>
  );
}
