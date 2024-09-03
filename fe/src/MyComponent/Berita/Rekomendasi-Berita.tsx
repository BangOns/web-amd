import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Header_SubTitle from "../Components-All/Header-SubTitle";
import Image from "next/image";
import { ImageImport } from "@/utils/ImageImport";
import Link from "next/link";

export default function Rekomendasi_Berita() {
  return (
    <section className="w-full space-y-5">
      <Header_SubTitle>Rekomendasi Untuk anda</Header_SubTitle>
      <section className="w-full  gap-10  h-auto  grid grid-cols-2 max-md:gap-5  place-content-stretch">
        {Array.from({ length: 7 }).map((_, i) => (
          <Card
            className="bg-transparent md:bg-gray-800 w-full md:w-full h-full  md:flex gap-2 group"
            key={i}
          >
            <section className=" flex max-md:flex-col max-md:items-center gap-2 w-full ">
              <CardHeader className="justify-center w-full max-md:max-h-24  xl:w-1/3 space-y-0 p-0 md:p-0 overflow-hidden">
                <Image
                  src={ImageImport.GalerMedia[0]}
                  alt="galeri-media"
                  className="w-full   object-contain group-hover:scale-[1.3] hover:object-cover transition-all duration-300"
                />
              </CardHeader>
              <CardContent className="flex items-center  text-white  p-0">
                <section className="max-md:flex max-md:flex-col max-md:justify-center  max-md:text-center font-roboto px-2 ">
                  <Link href={"/"}>
                    <h1 className="text-xs md:text-sm lg:text-lg  font-semibold">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Odio, cumque?
                    </h1>
                  </Link>
                  <p className="text-xs  block   text-slate-400 pt-1 font-light">
                    Rabu, 3 Juni 2021
                  </p>
                </section>
              </CardContent>
            </section>
          </Card>
        ))}
      </section>
    </section>
  );
}
