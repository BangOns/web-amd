"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { AnimatePresence, motion } from "framer-motion";
import { ListPerintis } from "@/utils/ListPerintis";

const variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
      damping: 50,
      stiffness: 100,
    },
  },
};
export default function Slider_Perintis() {
  const [indexSlide, indexSlideSet] = useState(0);
  const Perintis = [...ListPerintis, ...ListPerintis, ...ListPerintis];

  return (
    <Swiper
      loop={Perintis.length > 1}
      spaceBetween={30}
      slidesPerView={1}
      slidesPerGroup={1}
      loopAdditionalSlides={0}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
      }}
      onSlideChange={(e) => {
        indexSlideSet(e.realIndex);
      }}
      modules={[Autoplay]}
      className="mySwiper w-full h-full "
    >
      {Perintis.map((items, index) => (
        <SwiperSlide key={index}>
          <figure className="relative w-full flex justify-center items-end">
            <Image
              src={items.image}
              alt={items.name}
              width={300}
              height={0}
              priority
              className="h-auto max-sm:w-52 w-auto"
            />
            <AnimatePresence>
              {indexSlide === index && (
                <motion.figcaption
                  variants={variants}
                  initial={"initial"}
                  animate={"visible"}
                  exit={"initial"}
                  className="absolute bottom-2 text-center "
                >
                  <h1 className="font-sans font-semibold text-2xl uppercase">
                    {items.jabatan}
                  </h1>
                  <h2 className="font-sans text-lg ">{items.name}</h2>
                </motion.figcaption>
              )}
            </AnimatePresence>
          </figure>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
