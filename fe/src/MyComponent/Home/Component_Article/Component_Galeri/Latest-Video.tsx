import LoadingVideo from "@/MyComponent/Loading/LoadingVideo";
import { ListIdVideoUtama } from "@/utils/List_Id_Video_Youtube";
import React from "react";

export default async function Latest_Video({
  getLatestVideo,
  statusVideo,
}: {
  getLatestVideo: { items: any[] };
  statusVideo: number;
}) {
  return (
    <>
      <div className=" w-full h-full  md:basis-3/5   ">
        {statusVideo === 200 || statusVideo === 400 || statusVideo === 403 ? (
          <iframe
            height={400}
            className="w-full h-[200px] sm:h-[490px]  "
            src={`https://www.youtube.com/embed/${
              getLatestVideo.items.length
                ? getLatestVideo.items[0]?.id.videoId
                : ListIdVideoUtama[0]
            }`}
            allowFullScreen
          />
        ) : (
          <LoadingVideo />
        )}
      </div>
      <div className=" w-full h-full max-lg:space-y-5 lg:flex flex-col gap-3 md:basis-1/3">
        {statusVideo === 200 || statusVideo === 400 || statusVideo === 403 ? (
          <iframe
            height={400}
            className="w-full h-[200px] sm:h-[490px]  "
            src={`https://www.youtube.com/embed/${
              getLatestVideo.items.length
                ? getLatestVideo.items[1]?.id.videoId
                : ListIdVideoUtama[1]
            }`}
            allowFullScreen
          />
        ) : (
          <LoadingVideo />
        )}
        {statusVideo === 200 || statusVideo === 400 || statusVideo === 403 ? (
          <iframe
            height={400}
            className="w-full h-[200px] sm:h-[490px]  "
            src={`https://www.youtube.com/embed/${
              getLatestVideo.items.length
                ? getLatestVideo.items[2]?.id.videoId
                : ListIdVideoUtama[2]
            }`}
            allowFullScreen
          />
        ) : (
          <LoadingVideo />
        )}
      </div>
    </>
  );
}
