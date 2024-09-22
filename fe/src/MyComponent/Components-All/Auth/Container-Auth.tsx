import React from "react";

export default function Container_Auth({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <article className="w-full grid grid-cols-1 md:grid-cols-2 place-content-stretch ">
      {children}
    </article>
  );
}
