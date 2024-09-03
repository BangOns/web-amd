import React from "react";
import Header_SubTitle from "../Components-All/Header-SubTitle";
import Card_Sub_Berita from "../Components-All/Component-Berita/Card-Sub-Berita";

export default function Terkini_Berita() {
  return (
    <section className="w-full space-y-5">
      <Header_SubTitle>Berita Terkini</Header_SubTitle>
      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-stretch gap-7">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card_Sub_Berita key={i} />
        ))}
      </section>
    </section>
  );
}
