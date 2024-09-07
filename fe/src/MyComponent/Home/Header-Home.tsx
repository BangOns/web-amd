import React from "react";

export default function HeaderHome() {
  return (
    <header className=" w-full px-1 sm:px-4 max-sm:h-[77vh] max-sm:py-0  max-md:py-44 md:h-[65vh] text-center space-y-2 flex flex-col justify-center items-center bg-custom-mobile md:bg-custom-tablet lg:bg-custom-desktop bg-cover bg-no-repeat ">
      <h1 className=" font-anton leading-relaxed tracking-widest sm:tracking-[0.2em]  text-4xl sm:text-3xl font-bold text-green_amd">
        SELAMAT DATANG DI
      </h1>
      <h2 className=" font-anton  leading-relaxed tracking-widest text-4xl sm:text-lg md:text-4xl lg:text-5xl font-bold text-yellow_amd">
        PONDOK PESANTREN AL-MAWADDAH CIGANJUR
      </h2>
      <h3 className="font-fugaz text-xl max-sm:leading-relaxed sm:text-lg lg:text-2xl font-bold text-white italic ">
        "Istiqomah Beribadah, Unggul Dalam Prestasi, Berdaya Saing Tinggi, dan
        Berwawasan Lingkungan"
      </h3>
    </header>
  );
}
