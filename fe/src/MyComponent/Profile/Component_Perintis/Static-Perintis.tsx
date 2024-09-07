"use client";
import { ListPerintis } from "@/utils/ListPerintis";
import Image from "next/image";
import React, { Fragment } from "react";
import { motion } from "framer-motion";
export default function Static_Perintis() {
  return (
    <Fragment>
      {ListPerintis.map((items, index) => (
        <figure className=" relative" key={index}>
          <Image src={items.image} alt="perintis" width={300} />
          <motion.figcaption
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 2,
            }}
            className="absolute bottom-2 text-center w-full"
          >
            <h1 className="font-sans font-semibold text-2xl uppercase">
              {items.jabatan}
            </h1>
            <h2 className="font-sans text-lg ">{items.name}</h2>
          </motion.figcaption>
        </figure>
      ))}
    </Fragment>
  );
}
