import React from "react";
import Header_SubTitle from "./Header-SubTitle";
import Image from "next/image";
import { ImageImport } from "@/utils/ImageImport";
import Link from "next/link";

export default function News_Article() {
  return (
    <article className="w-full my-4 space-y-5">
      <Header_SubTitle classNameText="text-2xl">Info Terbaru</Header_SubTitle>
      <section className="w-full px-2 py-4 max-md:h-28 flex gap-2 sm:gap-4  md:justify-center  ">
        <figure className="w-full h-full flex sm:justify-center basis-1/4 md:basis-2/5">
          <Image
            src={ImageImport.Logo}
            alt="iklan"
            width={300}
            height={300}
            className="max-sm:w-full  max-lg:w-56 object-contain"
          />
        </figure>
        <article className="w-full basis-2/3 sm:basis-1/2">
          <header className="w-full">
            <Link href={"/"}>
              <h1 className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold">
                Pendaftaran Santri AL-Mawaddah Tahun ajaran 2024-2025
              </h1>
            </Link>
            <p className="text-xs hidden md:block text-slate-400 italic">
              Rabu,3 Juni 2024
            </p>
          </header>
          <section className="mt-3 w-full hidden md:block">
            <p className="font-sans text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              nulla recusandae voluptatem vitae sequi ipsa mollitia culpa
              ratione at. Atque impedit corporis architecto omnis doloremque
              laborum mollitia ipsum eos fuga!
            </p>
            <Link href={"/"} className="text-green_amd text-sm">
              Selengkapnya {">"}
            </Link>
          </section>
        </article>
      </section>
    </article>
  );
}
