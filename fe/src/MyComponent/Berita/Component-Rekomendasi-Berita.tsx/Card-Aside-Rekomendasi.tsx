"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ImageImport } from "@/utils/ImageImport";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card_Aside_Rekomendasi({
  dataBerita,
}: {
  dataBerita: IDataBerita;
}) {
  return (
    <Card className="bg-transparent  w-full   h-full hidden  md:block gap-2 group">
      <section className=" flex flex-col items-center gap-2 w-full ">
        <CardHeader className="justify-center w-full max-h-24   space-y-0 p-0 md:p-0 overflow-hidden">
          <Link href={`/berita/${dataBerita?.id}`}>
            <Image
              src={
                dataBerita && dataBerita.catalog[0].type === "image"
                  ? dataBerita.catalog[0].items
                  : ImageImport.GalerMedia[0]
              }
              alt="galeri-media"
              className="w-full   object-contain group-hover:scale-[1.3] hover:object-cover transition-all duration-300"
            />
          </Link>
        </CardHeader>
        <CardContent className="flex items-center  text-white  p-0">
          <section className="flex flex-col justify-center   font-roboto  ">
            <Link href={`/berita/${dataBerita?.id}`}>
              <h1 className="text-xs   ">{dataBerita?.title}</h1>
            </Link>
            <p className="text-xs text-slate-400 pt-1 font-light">
              ~{dataBerita.author}~
            </p>
          </section>
        </CardContent>
      </section>
    </Card>
  );
}
