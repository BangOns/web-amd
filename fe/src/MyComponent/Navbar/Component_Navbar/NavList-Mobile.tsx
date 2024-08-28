import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LinkNav } from "@/utils/LinkNavbar";
import Link from "next/link";
import React from "react";

export default function NavList_Mobile({
  openPendaftaran,
  className,
  pathName,
}: {
  className?: string;
  openPendaftaran: boolean;
  pathName: string;
}) {
  return (
    <section className={cn("w-full  pb-3 ", className)}>
      <ul className="flex flex-col justify-start items-start px-3     ">
        {LinkNav.map((item, index) => (
          <li
            key={index}
            className="py-5 w-5/6 border-0 border-b-[1px] border-white"
          >
            <Link
              href={item.link}
              className={`
                ${
                  pathName === item.link ? "text-green-400" : "text-yellow-200"
                } 
                text-lg  text-start  hover:text-green-400 transition-all `}
            >
              {item.name}
            </Link>
          </li>
        ))}
        {openPendaftaran && (
          <li className="py-5 ">
            <Button
              className="text-sm text-white bg-green-400 p-2  font-medium hover:bg-green-500 transition-all  outline-none hover:text-white"
              asChild
              size={"sm"}
            >
              <Link href={"/"}>Pendaftaran</Link>
            </Button>
          </li>
        )}
      </ul>
    </section>
  );
}
