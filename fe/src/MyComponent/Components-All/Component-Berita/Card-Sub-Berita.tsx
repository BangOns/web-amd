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
import { Button } from "@/components/ui/button";
const MaxBeritaHighlight = 2;
export default function Card_Sub_Berita({ data }: { data: IDataBerita }) {
  const HighlightBerita: ICatalog[] =
    data?.catalog.slice(0, MaxBeritaHighlight) ?? [];
  return (
    <Card className="bg-gray-800">
      <section className="max-md:flex gap-2 group">
        <CardHeader className="flex max-md:w-3/5 flex-col md:space-y-1.5 p-2 sm:p-3 md:p-5 overflow-hidden">
          <Link href={`/berita/${data?.id}`}>
            <Image
              src={
                HighlightBerita.length && HighlightBerita[0].type === "image"
                  ? HighlightBerita[0].items
                  : ImageImport.GalerMedia[0]
              }
              alt="galeri-media"
              className="max-md:w-full object-contain group-hover:scale-[1.3] hover:object-cover transition-all duration-300"
            />
          </Link>
        </CardHeader>
        <CardContent className="max-md:flex max-md:flex-col max-md:justify-center font-roboto text-white md:p-3 pt-0 max-md:p-0  w-full ">
          <Link href={`/berita/${data?.id}`}>
            <h1 className="text-xs md:text-lg font-semibold">{data.title}</h1>
          </Link>
          <p className="text-xs  pt-1 text-slate-400 md:hidden block">
            Rabu, 3 Juni 2021
          </p>
          <p className="md:block hidden md:text-sm">
            {HighlightBerita.length && HighlightBerita[1].type === "text"
              ? HighlightBerita[1].items
              : " "}
          </p>
        </CardContent>
      </section>
      <CardFooter className="md:block hidden">
        <Button
          asChild
          className="bg-green-500 hover:bg-green-400 hovertext-white border-0"
          variant={"outline"}
          size={"sm"}
        >
          <Link href={`/berita/${data?.id}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
