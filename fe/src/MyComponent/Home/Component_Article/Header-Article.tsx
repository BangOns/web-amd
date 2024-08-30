import { ImageImport } from "@/utils/ImageImport";
import Image from "next/image";
import React from "react";

export default function Header_Article() {
  return (
    <header className="w-full text-center space-y-6 ">
      <figure className="flex  justify-center flex-col items-center ">
        <Image
          src={ImageImport?.Logo}
          alt="logo"
          priority={true}
          width={100}
          height={90}
          className="w-20 md:w-32 h-full  object-cover hover:scale-[1.1] transition-all"
        />
        <h4 className=" text-xl md:text-3xl tracking-wide text-yellow_amd_2 mt-6 text-center font-archivo">
          PONDOK PESANTREN AL-MAWADDAH CIGANJUR JAKARTA
        </h4>
      </figure>
      <hr />
      <p className="text-sm  font-roboto text-gray-300 text-center">
        Dengan suatu tekad yang kuat dalam membangun anak bangsa yang mampu
        menjawab permasalahan dimasa mendatang didirikanlah Pondok Pesantren
        Al-Mawaddah Ciganjur tahun 2000, dibawah naungan yayasan baitul rahim
        ciganjur. Pesantren ini mengelola pendidikan untuk tingkat Madrasah
        Tsanawiyah (MTs), setingkat SMP dan Madrasah Aliyah (MA) sederajat
        dengan SMA. Kurikulum yang digunakan mengacu kepada kurikulum Agama,
        Kementerian Pendidikan Nasional, Pondok Modern & Pondok Salafiyah.
      </p>
    </header>
  );
}
