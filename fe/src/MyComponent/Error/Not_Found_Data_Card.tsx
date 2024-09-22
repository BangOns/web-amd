import { FolderX } from "lucide-react";
import React from "react";

export default function Not_Found_Data_Card() {
  return (
    <div className="w-full col-span-3 flex justify-center gap-2 items-center">
      <FolderX />
      <h1 className="text-xl font-roboto uppercase ">Data Not Found</h1>
    </div>
  );
}
