import React from "react";
import Header_Berita from "@/MyComponent/Berita/Header-Berita";
import Terkini_Berita from "@/MyComponent/Berita/Terkini-Berita";
import Utama_Berita from "@/MyComponent/Berita/Utama-Berita";

export default function Berita() {
  return (
    <>
      <Header_Berita text="Berita" search={true} />
      <article className="w-full mt-4 space-y-7">
        <Utama_Berita />
        <Terkini_Berita />
      </article>
    </>
  );
}
