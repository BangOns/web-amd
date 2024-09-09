import Aside_Rekomendasi_Berita from "@/MyComponent/Berita/Aside-Rekomendasi-Berita";
import Content_Detail_berita from "@/MyComponent/Berita/Component-Detail-Berita/Content-Detail-berita";
import Header_Detail_Berita from "@/MyComponent/Berita/Component-Detail-Berita/Header-Detail-Berita";
import { DataBerita } from "@/utils/DataBerita";
import React from "react";

export default function page({ params }: { params: { id: string } }) {
  const DataBeritaById = DataBerita.find(
    (berita) => berita.id === parseInt(params.id)
  );

  return (
    <>
      {DataBeritaById ? (
        <section className="w-full block md:flex gap-4 ">
          <article className=" w-full flex flex-col items-center gap-4 font-roboto basis-5/6">
            <Header_Detail_Berita DataBeritaById={DataBeritaById} />
            <Content_Detail_berita DataBeritaById={DataBeritaById} />
          </article>
          <Aside_Rekomendasi_Berita />
        </section>
      ) : (
        <>
          <h1>Data Not Found</h1>
        </>
      )}
    </>
  );
}
