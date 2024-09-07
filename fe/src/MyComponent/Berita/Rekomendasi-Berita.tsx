import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Header_SubTitle from "../Components-All/Header-SubTitle";
import Image from "next/image";
import { ImageImport } from "@/utils/ImageImport";
import Link from "next/link";
import Card_Rekomendasi from "./Component-Rekomendasi-Berita.tsx/Card-Rekomendasi";
import { ShuffleDataBerita } from "@/helper/ShuffleDataBerita";
import { DataBerita } from "@/utils/DataBerita";

export default function Rekomendasi_Berita() {
  const GetDataBeritaUser = ShuffleDataBerita(DataBerita).filter(
    (berita) => berita.author.toLowerCase() !== "admin"
  );
  return (
    <section className="w-full space-y-5 mt-4">
      <Header_SubTitle>Rekomendasi Untuk anda</Header_SubTitle>
      <section className="w-full  gap-10  h-auto  grid grid-cols-2 max-md:gap-5  place-content-stretch">
        {GetDataBeritaUser.map((dataBerita, index) => (
          <Card_Rekomendasi key={index} dataBerita={dataBerita} />
        ))}
      </section>
    </section>
  );
}
