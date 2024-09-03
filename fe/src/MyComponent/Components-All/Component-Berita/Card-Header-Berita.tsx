import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ImageImport } from "@/utils/ImageImport";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card_Header_Berita() {
  return (
    <Card className="bg-gray-800 w-full md:flex gap-2 group">
      <section className="flex gap-2">
        <CardHeader className="flex max-md:w-3/5 flex-col md:space-y-1.5 p-2 sm:p-3 md:p-5 overflow-hidden">
          <Image
            src={ImageImport.GalerMedia[0]}
            alt="galeri-media"
            className="max-md:w-full object-contain group-hover:scale-[1.3]  transition-all duration-300"
          />
        </CardHeader>
        <CardContent className="flex items-center  text-white md:p-3 pt-0  w-full max-md:p-0">
          <section className="max-md:flex max-md:flex-col max-md:justify-center font-roboto  ">
            <Link href={"/"}>
              <h1 className="text-sm md:text-lg font-semibold">Card Title</h1>
            </Link>
            <p className="text-xs md:hidden block   text-slate-400 pt-1 font-light">
              Rabu, 3 Juni 2021
            </p>
            <p className="md:block hidden md:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              debitis animi? Rerum debitis quidem iusto deleniti dolores in
              laborum error numquam nostrum sequi fugit unde maxime, rem
              explicabo quas incidunt.
            </p>
            <Link href={"/"} className="text-green_amd text-sm max-md:hidden ">
              Selengkapnya {">"}
            </Link>
          </section>
        </CardContent>
      </section>
    </Card>
  );
}
