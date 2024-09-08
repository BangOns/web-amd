import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LinkNav } from "@/utils/LinkNavbar";
import Link from "next/link";
import React from "react";

export default function NavList_Desktop({
  openPendaftaran,
  className,
  pathName,
}: {
  className?: string;
  openPendaftaran: boolean;
  pathName: string;
}) {
  return (
    <ul
      className={cn(
        "hidden md:flex justify-end items-center gap-11",
        className
      )}
    >
      {LinkNav.map((item, index) => (
        <li key={index}>
          <Link
            href={item.link}
            aria-label={item.name}
            className={` ${
              pathName === item.link ? "text-green-400" : "text-yellow-200"
            } text-sm  hover:text-green-400 transition-all `}
          >
            {item.name}
          </Link>
        </li>
      ))}
      {openPendaftaran && (
        <li>
          <Button
            className="text-sm text-white bg-green-800 p-2  font-medium hover:bg-green-900 transition-all  outline-none hover:text-white"
            asChild
            size={"sm"}
          >
            <Link href={"/"} aria-label={"pendaftaran"}>
              Pendaftaran
            </Link>
          </Button>
        </li>
      )}
    </ul>
  );
}
