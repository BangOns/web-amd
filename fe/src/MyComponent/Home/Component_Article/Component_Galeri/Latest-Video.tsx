import { ListIdVideoUtama } from "@/utils/List_Id_Video_Youtube";
import React from "react";

export default async function Latest_Video({ getLatestVideo }: any) {
  return (
    <>
      <div className=" w-full h-full  md:basis-3/5   ">
        <iframe
          height={400}
          className="w-full h-[200px] sm:h-[400px] lg:h-full "
          src={`https://www.youtube.com/embed/${
            getLatestVideo ? getLatestVideo[0].id.videoId : ListIdVideoUtama[0]
          }`}
          allowFullScreen
        />
      </div>
      <div className=" w-full h-full space-y-5 lg:flex flex-col gap-3 md:basis-1/3">
        <iframe
          className="h-[200px] sm:h-[400px]  lg:h-full w-full"
          src={`https://www.youtube.com/embed/${
            getLatestVideo ? getLatestVideo[1].id.videoId : ListIdVideoUtama[1]
          }`}
          allowFullScreen
        />
        <iframe
          className="h-[200px] sm:h-[400px] lg:h-full w-full"
          src={`https://www.youtube.com/embed/${
            getLatestVideo ? getLatestVideo[2].id.videoId : ListIdVideoUtama[2]
          }`}
          allowFullScreen
        />
      </div>
    </>
  );
}
