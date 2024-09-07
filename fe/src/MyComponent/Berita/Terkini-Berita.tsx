import React from "react";
import Header_SubTitle from "../Components-All/Header-SubTitle";
import Card_Sub_Berita from "../Components-All/Component-Berita/Card-Sub-Berita";
import { ShuffleDataBerita } from "@/helper/ShuffleDataBerita";
import { DataBerita } from "@/utils/DataBerita";

export default function Terkini_Berita() {
  const GetDataBeritaUser = ShuffleDataBerita(DataBerita).filter(
    (berita) => berita.author.toLowerCase() !== "admin"
  );

  return (
    <section className="w-full space-y-5">
      <Header_SubTitle>Berita Terkini</Header_SubTitle>
      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-stretch gap-7">
        {GetDataBeritaUser.map((berita, i) => (
          <Card_Sub_Berita key={i} data={berita} />
        ))}
      </section>
    </section>
  );
}
