"use client";
import { ImageImport } from "@/utils/ImageImport";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";

export default function Content_Detail_berita({
  DataBeritaById,
}: {
  DataBeritaById: IDataBerita;
}) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize, { passive: true });
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {DataBeritaById.catalog
        .sort((a, b) => a.index - b.index)
        .filter(
          (item, index) => !(isMobile && index === 0 && item.type === "image")
        )
        .map((item, index) => (
          <Fragment key={index}>
            {item.type === "image" ? (
              <figure className="w-1/2">
                <Image
                  src={item.items || ImageImport.GalerMedia[0]}
                  alt="test"
                  className="w-full object-contain"
                />
              </figure>
            ) : (
              <section className="max-md:text-sm text-justify">
                {item.items || " "}
              </section>
            )}
          </Fragment>
        ))}
    </>
  );
}
