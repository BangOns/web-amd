import React from "react";
import Header_Berita from "@/MyComponent/Berita/Header-Berita";
import Terkini_Berita from "@/MyComponent/Berita/Terkini-Berita";
import Rekomendasi_Berita from "@/MyComponent/Berita/Rekomendasi-Berita";
import Utama_Berita from "@/MyComponent/Berita/Utama-Berita";

export default function Berita() {
  return (
    <article className="w-full container mx-auto px-4 lg:px-20  my-9 md:mt-12 lg:mt-[60px]">
      <Header_Berita />
      <article className="w-full mt-4 space-y-7">
        <Utama_Berita />
        <Terkini_Berita />
        <Rekomendasi_Berita />
      </article>
    </article>
  );
}
