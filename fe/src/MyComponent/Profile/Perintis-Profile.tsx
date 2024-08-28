import React from "react";
import Header_Title from "../Components-All/HeaderTitle";
import Image from "next/image";
import { ImageImport } from "@/utils/ImageImport";
import Slider_Perintis from "./Component_Perintis/Slider-Perintis";
export default function Perintis_Profile() {
  return (
    <article>
      <Header_Title
        classNameLine="bg-yellow_amd"
        classNameText="text-yellow_amd"
      >
        Sang Perintis
      </Header_Title>
      <section className="w-full mt-5">
        <figure className="w-full flex flex-col items-center">
          <Image
            src={ImageImport.PerintisEmaUan}
            alt="ema-uan"
            width={500}
            className="max-sm:w-[400px]"
          />
          <figcaption className="w-full max-sm:mt-2 text-center font-semibold font-roboto">
            <h1 className="text-base sm:text-xl  text-yellow_amd">
              (Alm) Abuya. KH. MUHAMMAD SA'ALIH & Ibunda. Hj. SA'ANIH
            </h1>
            <p className="max-sm:text-sm">
              (PENDIRI PONDOK PESANTREN AL MAWADDAH CIGANJUR)
            </p>
          </figcaption>
        </figure>
      </section>
      <section className="w-full mt-10 ">
        <Slider_Perintis />
      </section>
    </article>
  );
}
