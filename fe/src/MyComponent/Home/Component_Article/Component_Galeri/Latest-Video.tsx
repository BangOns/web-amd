import LoadingVideo from "@/MyComponent/Loading/LoadingVideo";
import { ListIdVideoUtama } from "@/utils/List_Id_Video_Youtube";
import React, { Suspense } from "react";

export default async function Latest_Video({
  getLatestVideo,
}: {
  getLatestVideo: { items: any[] };
  statusVideo: number;
}) {
  const ChildVideoUtama = getLatestVideo.items.length
    ? getLatestVideo.items.slice(1, 3)
    : ListIdVideoUtama.slice(1, 3);
  return (
    <>
      <div className=" w-full h-full  md:basis-3/5   ">
        <Suspense fallback={<LoadingVideo />}>
          <iframe
            height={400}
            className="w-full h-[200px] sm:h-[490px]  "
            src={`https://www.youtube.com/embed/${
              getLatestVideo.items.length
                ? getLatestVideo.items[0]?.id.videoId
                : ListIdVideoUtama[0]
            }`}
            loading="lazy"
            allowFullScreen
          />
        </Suspense>
      </div>
      <div className=" w-full h-full max-lg:space-y-5 lg:flex flex-col gap-3 md:basis-1/3">
        <Suspense fallback={<LoadingVideo Total_Loading={2} />}>
          {ChildVideoUtama.map((item, index) => (
            <iframe
              key={index}
              height={400}
              className="w-full h-[200px] sm:h-[490px]  "
              src={`https://www.youtube.com/embed/${
                item.hasOwnProperty("id") ? item.id.videoId : item
              }`}
              loading="lazy"
              allowFullScreen
            />
          ))}
        </Suspense>
      </div>
    </>
  );
}
