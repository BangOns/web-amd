import { ImageImport } from "@/utils/ImageImport";
import Image from "next/image";
import React from "react";

export default function Utama_Berita() {
  return (
    <section className="w-full relative overflow-hidden rounded-lg">
      <figure className="w-full max-h-96  ">
        <Image
          src={ImageImport.GalerMedia[0]}
          alt="berita"
          className="w-full  object-cover"
        />
      </figure>
      <article className="absolute bottom-0 px-4 bg-gradient-to-t from-green_amd from-50%  to-transparent font-semibold font-roboto rounded-b-lg">
        <h1 className="text-xs sm:text-sm md:text-xl lg:text-2xl text-black py-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus ut
          ea tempore laborum error numquam eligendi. Laboriosam magnam velit
          natus cupiditate, ex voluptatem quam voluptatibus reprehenderit quas
          tenetur porro nesciunt.
        </h1>
      </article>
    </section>
  );
}
