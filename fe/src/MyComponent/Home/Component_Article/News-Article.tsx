import React from "react";
import Header_SubTitle from "../../Components-All/Header-SubTitle";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Card_Header_Berita from "../../Components-All/Component-Berita/Card-Header-Berita";
import Card_Sub_Berita from "../../Components-All/Component-Berita/Card-Sub-Berita";
import { DataBerita } from "@/utils/DataBerita";

export default function News_Article() {
  const MaxBerita = 3;
  const BeritaNewsUser =
    DataBerita.filter((item) => item.author.toLowerCase() !== "admin").slice(
      0,
      MaxBerita
    ) ?? [];
  return (
    <article className="w-full   space-y-7">
      <Header_SubTitle classNameText="text-2xl">Info Terbaru</Header_SubTitle>
      <section className="w-full md:p-2 flex gap-2 sm:gap-4  md:justify-center rounded-lg ">
        <Card_Header_Berita />
      </section>
      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-stretch gap-7">
        {BeritaNewsUser.length ? (
          BeritaNewsUser.map((berita, index) => (
            <Card_Sub_Berita data={berita} key={index} />
          ))
        ) : (
          <></>
        )}
        <section className="w-full  col-span-1 lg:col-span-3 flex justify-center items-center">
          <Button
            asChild
            className="bg-green_amd hover:bg-green-500 text-black hover:text-white outline-none border-0"
            variant={"outline"}
          >
            <Link href={"/berita"}>Baca Berita Lainnya</Link>
          </Button>
        </section>
      </section>
    </article>
  );
}
