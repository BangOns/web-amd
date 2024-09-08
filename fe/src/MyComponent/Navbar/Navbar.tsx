"use client";
import { Button } from "@/components/ui/button";
import { ImageImport } from "@/utils/ImageImport";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavList_Desktop from "./Component_Navbar/NavList-Desktop";
import NavList_Mobile from "./Component_Navbar/NavList-Mobile";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, openSet] = useState<boolean>(true);
  const [dropdown, dropdownSet] = useState<boolean>(false);
  const pathName = usePathname();

  return (
    <nav className=" w-screen  fixed  border-b-[1px] bg-black border-white z-10">
      <section className="w-full px-4 lg:px-20 py-4 container  items-center mx-auto  flex justify-between">
        <figure className="w-52 ">
          <Link href={"/"} aria-label="Beranda">
            <Image
              src={ImageImport?.LogoWithText}
              alt="logo"
              priority={true}
              width={130}
              height={120}
              className="w-40 md:w-full h-full  object-cover"
            />
          </Link>
        </figure>
        <section className="w-2/5">
          <NavList_Desktop openPendaftaran={open} pathName={pathName} />
          <section className="block md:hidden float-right ">
            <Button
              className="bg-black border-none"
              variant={"outline"}
              onClick={() => dropdownSet(!dropdown)}
            >
              <Menu />
            </Button>
          </section>
        </section>
      </section>
      {dropdown && (
        <NavList_Mobile openPendaftaran={open} pathName={pathName} />
      )}
    </nav>
  );
}
