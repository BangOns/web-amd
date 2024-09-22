import { DataBerita } from "@/utils/DataBerita";
import { ImageImport } from "@/utils/ImageImport";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Utama_Berita() {
  const GetDataNewByAdmin = DataBerita.find(
    (berita) => berita.author.toLowerCase() === "admin"
  );

  return (
    <section className="w-full relative overflow-hidden rounded-lg">
      <figure className="w-full max-h-96  ">
        <Image
          src={
            GetDataNewByAdmin && GetDataNewByAdmin.catalog[0].type === "image"
              ? GetDataNewByAdmin.catalog[0].items
              : ImageImport.GalerMedia[0]
          }
          alt="berita"
          className="w-full  object-cover"
        />
      </figure>
      <article className="absolute w-full bottom-0 px-4 bg-gradient-to-t from-green-700 from-50%  to-transparent font-semibold font-roboto rounded-b-lg">
        <Link
          href={`/berita/${GetDataNewByAdmin?.id}`}
          aria-label={GetDataNewByAdmin?.title}
        >
          <h1 className="text-xs hover:text-green-200 sm:text-sm md:text-xl lg:text-2xl text-black py-4">
            {GetDataNewByAdmin?.title}
          </h1>
        </Link>
      </article>
    </section>
  );
}
