import { ShuffleDataBerita } from "@/helper/ShuffleDataBerita";
import { DataBerita } from "@/utils/DataBerita";
import React from "react";
import Header_SubTitle from "../Components-All/Header-SubTitle";
import Card_Aside_Rekomendasi from "./Component-Rekomendasi-Berita.tsx/Card-Aside-Rekomendasi";
const MaxDataBeritaRekomendasi = 6;
export default function Aside_Rekomendasi_Berita() {
  const GetDataBeritaUser = ShuffleDataBerita(DataBerita)
    .filter((berita) => berita.author.toLowerCase() !== "admin")
    .slice(0, MaxDataBeritaRekomendasi);

  return (
    <aside className="w-2/12 basis-2/12 hidden md:block space-y-4">
      <header>
        <Header_SubTitle>Rekomendasi Untuk anda</Header_SubTitle>
      </header>
      <section className="grid grid-cols-2 place-content-stretch place-items-center gap-5">
        {GetDataBeritaUser.length &&
          GetDataBeritaUser.map((dataBerita, index) => (
            <Card_Aside_Rekomendasi key={index} dataBerita={dataBerita} />
          ))}
      </section>
    </aside>
  );
}
