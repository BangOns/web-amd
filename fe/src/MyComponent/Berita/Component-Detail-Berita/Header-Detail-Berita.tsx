import { ImageImport } from "@/utils/ImageImport";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

export default function Header_Detail_Berita({
  DataBeritaById,
}: {
  DataBeritaById: IDataBerita;
}) {
  const MainImage: StaticImageData =
    DataBeritaById.catalog.find((berita) => berita.type === "image")?.items ||
    ImageImport.GalerMedia[0];
  return (
    <header className="w-full text-lg md:text-2xl font-bold ">
      <figure className="md:hidden block w-full">
        <Image src={MainImage} alt="test" className="w-full object-contain" />
      </figure>
      <div className="flex flex-col max-md:flex-col-reverse">
        <h1 className="">{DataBeritaById.title}</h1>
        <Link href={"/"}>
          <h2 className="leading-relaxed py-2 text-base text-green_amd">
            Pondok Pesantren Al Mawaddah
          </h2>
        </Link>
      </div>
      <p className="text-xs m-0 max-md:hidden">Rabu, 3 Juni 2021</p>
    </header>
  );
}
