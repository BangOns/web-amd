import { ImageImport } from "@/utils/ImageImport";
import { ListProgramUnggulan } from "@/utils/ListProgramUnggulan";
import Image from "next/image";
import React from "react";
import Header_Title from "./HeaderTitle";

export default function Program_Unggulan_Article() {
  return (
    <article className="mt-8 w-full">
      <Header_Title>Program Unggulan</Header_Title>
      <section className="  grid grid-cols-1 md:grid-cols-2  place-content-stretch max-lg:place-items-center mt-5">
        <section className="flex justify-center md:justify-end items-center w-full ">
          <Image
            src={ImageImport.ImageProgramUnggulan}
            width={450}
            alt="program-unggulan"
            className=" object-cover"
          />
        </section>
        <section className=" max-md:w-full flex flex-col flex-wrap h-[490px] md:h-[450px] max-sm:mt-4">
          {ListProgramUnggulan.map((item, index) => (
            <article className="flex gap-3 items-start" key={index}>
              <div className="flex flex-col items-center">
                <div className="lg:w-9 w-7 text-xl lg:text-3xl text-center bg-green_amd text-black font-anton rounded-full">
                  {index + 1}
                </div>
                {ListProgramUnggulan.length !== index + 1 && (
                  <div className="w-1 h-16 bg-green_amd"></div>
                )}
              </div>
              <p className="text-xl lg:text-3xl font-anton tracking-wide">
                {item}
              </p>
            </article>
          ))}
        </section>
      </section>
    </article>
  );
}
