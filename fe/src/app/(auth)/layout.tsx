import React from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className=" w-full min-h-screen bg-slate-950 grid place-items-center">
      <article className="w-full sm:w-11/12 lg:w-3/4 bg-slate-800 rounded-lg flex h-full sm:h-auto shadow-lg">
        {children}
      </article>
    </main>
  );
}
