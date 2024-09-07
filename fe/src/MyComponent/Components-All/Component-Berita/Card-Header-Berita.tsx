import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DataBerita } from "@/utils/DataBerita";
import { ImageImport } from "@/utils/ImageImport";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const MaxBeritaHighlight = 2;
export default function Card_Header_Berita() {
  const BeritaNews = DataBerita.find(
    (berita) => berita.author.toLowerCase() === "admin"
  );
  const HighlightBerita: ICatalog[] =
    BeritaNews?.catalog.slice(0, MaxBeritaHighlight) ?? [];
  return (
    <Card className="bg-gray-800 w-full md:flex gap-2 group">
      <section className="flex gap-2">
        <CardHeader className="flex max-md:w-3/5 flex-col md:space-y-1.5 p-2 sm:p-3 md:p-5 overflow-hidden">
          <Link href={`/berita/${BeritaNews?.id}`}>
            <Image
              src={
                HighlightBerita.length && HighlightBerita[0].type === "image"
                  ? HighlightBerita[0].items
                  : ImageImport.GalerMedia[0]
              }
              alt="galeri-media"
              className="max-md:w-full object-contain group-hover:scale-[1.3]  transition-all duration-300"
            />
          </Link>
        </CardHeader>
        <CardContent className="flex items-center  text-white md:p-3 pt-0  w-full max-md:p-0">
          <section className="max-md:flex max-md:flex-col max-md:justify-center font-roboto  ">
            <Link href={`/berita/${BeritaNews?.id}`}>
              <h1 className="text-sm md:text-lg font-semibold">
                {BeritaNews?.title}
              </h1>
            </Link>
            <p className="text-xs md:hidden block   text-slate-400 pt-1 font-light">
              Rabu, 3 Juni 2021
            </p>
            <p className="md:block hidden md:text-sm">
              {HighlightBerita.length && HighlightBerita[1].type === "text"
                ? HighlightBerita[1].items
                : " "}
            </p>
            <Link
              href={`/berita/${BeritaNews?.id}`}
              className="text-green_amd text-sm max-md:hidden "
            >
              Selengkapnya {">"}
            </Link>
          </section>
        </CardContent>
      </section>
    </Card>
  );
}
