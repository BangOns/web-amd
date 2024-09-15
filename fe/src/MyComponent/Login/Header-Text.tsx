import { ImageImport } from "@/utils/ImageImport";
import Image from "next/image";

export default function Header_Text_Login() {
  return (
    <header className="w-full flex flex-col  items-start gap-5 ">
      <Image src={ImageImport.Logo} alt="logo-amd" width={70} height={70} />
      <section className="w-full font-roboto text-start space-y-2">
        <h2 className=" text-lg sm:text-2xl font-bold text-white">
          Selamat Datang !
        </h2>
        <p className=" text-sm font-light text-slate-200 ">
          Silakan masukkan kredensial Anda untuk mengelola sistem
        </p>
      </section>
    </header>
  );
}
