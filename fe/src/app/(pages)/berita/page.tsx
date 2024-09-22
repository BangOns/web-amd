import React, { Suspense } from "react";
import Header_Berita from "@/MyComponent/Berita/Header-Berita";
import Utama_Berita from "@/MyComponent/Berita/Utama-Berita";
import LoadingNews from "@/MyComponent/Loading/LoadingNews";
import Terkini_Berita from "@/MyComponent/Berita/Terkini-Berita";

export default function Berita() {
  return (
    <>
      <Header_Berita text="Berita" search={true} />
      <article className="w-full mt-4 space-y-7">
        <Suspense fallback={<LoadingNews />}>
          <Utama_Berita />
        </Suspense>
        <Suspense fallback={<LoadingNews Total_Loading={3} />}>
          <Terkini_Berita />
        </Suspense>
      </article>
    </>
  );
}
