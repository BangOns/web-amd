import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ImageImport } from "@/utils/ImageImport";
import Image from "next/image";
import Link from "next/link";
export default function Card_Sub_Berita() {
  return (
    <Card className="bg-gray-800">
      <section className="max-md:flex gap-2 group">
        <CardHeader className="flex max-md:w-3/5 flex-col md:space-y-1.5 p-2 sm:p-3 md:p-5 overflow-hidden">
          <Image
            src={ImageImport.GalerMedia[0]}
            alt="galeri-media"
            className="max-md:w-full object-contain group-hover:scale-[1.3] hover:object-cover transition-all duration-300"
          />
        </CardHeader>
        <CardContent className="max-md:flex max-md:flex-col max-md:justify-center font-roboto text-white md:p-3 pt-0 max-md:p-0  w-full ">
          <Link href={"/"}>
            <h1 className="text-xs md:text-lg font-semibold">Card Title</h1>
          </Link>
          <p className="text-xs  pt-1 text-slate-400 md:hidden block">
            Rabu, 3 Juni 2021
          </p>
          <p className="md:block hidden md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            debitis animi? Rerum debitis quidem iusto deleniti dolores in
            laborum error numquam nostrum sequi fugit unde maxime, rem explicabo
            quas incidunt.
          </p>
        </CardContent>
      </section>
      <CardFooter className="md:block hidden">
        <p className="text-xs   text-slate-400">Rabu, 3 Juni 2021</p>
      </CardFooter>
    </Card>
  );
}
