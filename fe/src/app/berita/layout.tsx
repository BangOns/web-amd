import Rekomendasi_Berita from "@/MyComponent/Berita/Rekomendasi-Berita";
import React from "react";

export default function LayoutBerita({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="w-full flex flex-col container mx-auto px-4 lg:px-20   md:mt-12 lg:mt-[60px]">
      <section className="flex-grow">{children}</section>
      <Rekomendasi_Berita />
    </article>
  );
}
