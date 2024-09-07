import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ImageImport } from "@/utils/ImageImport";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card_Rekomendasi({
  dataBerita,
}: {
  dataBerita: IDataBerita;
}) {
  return (
    <Card className="bg-transparent md:bg-gray-800 w-full md:w-full h-full  md:flex gap-2 group">
      <section className=" flex max-md:flex-col max-md:items-center gap-2 w-full ">
        <CardHeader className="justify-center w-full max-md:max-h-24  md:w-1/3 space-y-0 p-0 md:p-0 overflow-hidden">
          <Link href={`/berita/${dataBerita?.id}`}>
            {dataBerita.catalog[0].type === "image" && (
              <Image
                src={dataBerita.catalog[0].items || ImageImport.GalerMedia[0]}
                alt="galeri-media"
                className="w-full   object-contain group-hover:scale-[1.3] hover:object-cover transition-all duration-300"
              />
            )}
          </Link>
        </CardHeader>
        <CardContent className="flex items-center  text-white  p-0">
          <section className="max-md:flex max-md:flex-col max-md:justify-center  max-md:text-center font-roboto px-2 ">
            <Link href={`/berita/${dataBerita?.id}`}>
              <h1 className="text-xs md:text-sm lg:text-lg  font-semibold">
                {dataBerita?.title}
              </h1>
            </Link>
            <p className="text-xs  block   text-slate-400 pt-1 font-light">
              Rabu, 3 Juni 2021
            </p>
          </section>
        </CardContent>
      </section>
    </Card>
  );
}
