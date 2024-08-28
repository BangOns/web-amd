import React, { Suspense } from "react";
import Header_Title from "../../Components-All/HeaderTitle";
import Marquee from "@/components/magicui/marquee";
import { ImageImport } from "@/utils/ImageImport";
import Image from "next/image";

import Slider_Video from "./Component_Galeri/Slider-Video";
import Latest_Video from "./Component_Galeri/Latest-Video";
import {
  getYoutubeLastVideo,
  GetYoutubeManyLike,
} from "@/utils/Get_Video_Youtube";
import Header_SubTitle from "./Header-SubTitle";

export default async function Galeri_Article() {
  const getLatestVideoYoutube = await getYoutubeLastVideo();
  const getManyLikesVideo = await GetYoutubeManyLike();

  return (
    <article className="mt-8 w-full ">
      <Header_Title>Galeri Media</Header_Title>
      <section className=" w-full relative h-[150px] flex items-center justify-center overflow-hidden  ">
        <Marquee pauseOnHover className="[--duration:50s]">
          {ImageImport.GalerMedia.map((item, index) => (
            <Image
              src={item}
              alt="galeri"
              key={index}
              width={300}
              className=" h-full object-contain"
            />
          ))}
        </Marquee>
      </section>
      <section className=" mt-10 w-full lg:h-[500px]">
        <Header_SubTitle className="my-2">
          {getLatestVideoYoutube ? "Video Terbaru" : "Video Populer"}
        </Header_SubTitle>
        <article className="w-full h-full flex max-lg:flex-col items-center gap-4 justify-center ">
          <Suspense>
            <Latest_Video getLatestVideo={getLatestVideoYoutube} />
          </Suspense>
        </article>
      </section>
      <section className="pt-10 w-full h-full">
        <Header_SubTitle className="my-2">
          {getManyLikesVideo ? "Video Populer" : "Video Lainnya"}
        </Header_SubTitle>
        <Slider_Video getManyLikesVideo={getManyLikesVideo} />
      </section>
      <figure className="mt-9 w-full h-full">
        <Image
          src={ImageImport.ImageIklan}
          alt="iklan"
          className="w-full h-full"
        />
      </figure>
    </article>
  );
}
