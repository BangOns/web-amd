import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

export default function Header_Berita() {
  return (
    <header className="w-full flex justify-between font-roboto pb-3 items-center border-b-[1px] border-slate-100">
      <h1 className="text-2xl font-bold">Berita</h1>
      <section className=" md:w-1/3 lg:w-1/4 flex items-center justify-end gap-2 bg-slate-800 rounded-lg p-2">
        <Search className="text-slate-500" />
        <Input
          placeholder="Cari Berita"
          type="text"
          className="bg-transparent text-white border-0 outline-none  p-0 ring-0 rounded-none focus:ring-0"
        />
      </section>
    </header>
  );
}
