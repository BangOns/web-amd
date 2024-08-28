import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LinkNav } from "@/utils/LinkNavbar";
import Link from "next/link";
import React from "react";

export default function NavList_Desktop({
  openPendaftaran,
  className,
}: {
  className?: string;
  openPendaftaran: boolean;
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
            className="text-sm text-yellow-200 hover:text-green-400 transition-all "
          >
            {item.name}
          </Link>
        </li>
      ))}
      {openPendaftaran && (
        <li>
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
  );
}
