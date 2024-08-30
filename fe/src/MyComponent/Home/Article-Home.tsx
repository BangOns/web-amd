import React from "react";
import Header_Article from "./Component_Article/Header-Article";
import Program_Unggulan_Article from "./Component_Article/Program-Unggulan-Article";
import Galeri_Article from "./Component_Article/Galeri-Article";

export default function Article_Home() {
  return (
    <article className="w-full container mx-auto px-4 lg:px-20  my-9 md:mt-12 lg:mt-[60px]">
      <Header_Article />
      <Program_Unggulan_Article />
      <Galeri_Article />
    </article>
  );
}
