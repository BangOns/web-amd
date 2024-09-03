"use client";

import LoadingVideo from "@/MyComponent/Loading/LoadingVideo";
import { ListIdVideoRandom } from "@/utils/List_Id_Video_Youtube";
import React, { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Slider_Video({
  getManyLikesVideo,
  statusVideo,
}: {
  getManyLikesVideo: { items: any[] };
  statusVideo: number;
}) {
  const [PerView, setPerView] = useState<number | undefined>(undefined);
  useEffect(() => {
    if (typeof window !== undefined) {
      const handleResize = () => {
        setPerView(
          window.innerWidth > 768 ? 3 : window.innerWidth > 640 ? 2 : 1
        );
      };
      setPerView(window.innerWidth > 768 ? 3 : window.innerWidth > 640 ? 2 : 1);

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  return (
    <>
      <Swiper
        slidesPerView={PerView !== undefined ? PerView : 1}
        spaceBetween={30}
        loop={true}
        draggable={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper h-full"
      >
        {statusVideo === 200 || statusVideo === 400 || statusVideo === 403 ? (
          getManyLikesVideo.items.length ? (
            getManyLikesVideo.items.map((video: any, index: number) => (
              <SwiperSlide key={index}>
                <iframe
                  height={400}
                  className="w-full h-[200px] sm:h-[290px]"
                  src={`https://www.youtube.com/embed/${video?.id.videoId}`}
                  allowFullScreen
                />
              </SwiperSlide>
            ))
          ) : (
            <>
              {ListIdVideoRandom.map((video: string, index: number) => (
                <SwiperSlide key={index}>
                  <iframe
                    height={400}
                    className="w-full h-[200px] sm:h-[290px]"
                    src={`https://www.youtube.com/embed/${video}`}
                    allowFullScreen
                  />
                </SwiperSlide>
              ))}
            </>
          )
        ) : (
          <>
            <SwiperSlide>
              <LoadingVideo />
              <LoadingVideo />
              <LoadingVideo />
              <LoadingVideo />
              <LoadingVideo />
            </SwiperSlide>
          </>
        )}
      </Swiper>
    </>
  );
}
