import { ImageImport } from "@/utils/ImageImport";
import { List_Sosial_Media } from "@/utils/List_Sosial_Media";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Icons from "../Components-All/Icons-Props";

export default function Contact() {
  return (
    <article className="w-full container mx-auto px-4 lg:px-20  my-9 md:mt-12 lg:mt-[60px]">
      <section className="w-full grid grid-cols-1 md:grid-cols-2 place-content-stretch max-sm:gap-6">
        <article className="w-full">
          <figure className="w-11/12 pb-5 border-b-[1px] border-white ">
            <Image
              src={ImageImport.LogoWithText}
              alt="logo-amd"
              width={300}
              className=" max-sm:w-44 object-contain"
            />
          </figure>
          <section className="mt-8 space-y-2">
            {List_Sosial_Media.map((item, index) => (
              <Link
                href={item.link}
                aria-label={item.name}
                className="flex items-center gap-2 "
                key={index}
                target="_blank"
              >
                <Icons
                  name={item.icon as keyof typeof Icons}
                  className="text-green_amd size-[30px]"
                />
                <p className="font-anton tracking-wider max-sm:text-sm">
                  {item.name.length > 30
                    ? item.name.slice(0, 40) + "..."
                    : item.name}
                </p>
              </Link>
            ))}
          </section>
        </article>
        <article className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.418871630704!2d106.8106410750476!3d-6.339757562028725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ef5d26068ca5%3A0x43f3c96165dc1c5!2sPondok%20Pesantren%20Al%20Mawaddah%20Ciganjur!5e0!3m2!1sid!2sid!4v1724778743458!5m2!1sid!2sid"
            className="w-full"
            height="300"
            allowFullScreen
            title="Lokasi Pondok Pesantren Al Mawaddah Ciganjur"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </article>
      </section>
    </article>
  );
}
