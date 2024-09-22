import { ImageImport } from "@/utils/ImageImport";
import { TextSejarahProfile } from "@/utils/Text_Sejarah_Profile";
import Image from "next/image";
import React from "react";

export default function Header_Profile() {
  return (
    <header className="my-9 ">
      <figure className="w-full grid place-items-center pb-3">
        <Image
          src={ImageImport.Logo}
          alt="logo-amd"
          width={80}
          height={0}
          className="h-auto w-auto"
        />
      </figure>
      <section className="w-full border-b-[1px] border-white pb-4 mt-5 ">
        <h1 className=" w-full  text-center  font-anton   tracking-widest text-2xl   xl:text-[42px] font-bold text-yellow_amd">
          PONDOK PESANTREN AL-MAWADDAH CIGANJUR JAKARTA
        </h1>
      </section>
      <section className="mt-7 space-y-5">
        {TextSejarahProfile.map((items) => (
          <p
            className="text-justify text-base sm:text-xl leading-loose text-white  font-roboto"
            key={items.id}
          >
            {items.text}
          </p>
        ))}
      </section>
    </header>
  );
}
