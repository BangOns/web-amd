import type { Metadata } from "next";
import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Navbar from "@/MyComponent/Navbar/Navbar";
import Footer from "@/MyComponent/Footer/Footer";
import Contact from "@/MyComponent/Footer/Contact";

export const metadata: Metadata = {
  title: "Pondok Pesantren Al-Mawaddah",
  description: "Website Pondok Pesantren Al-Mawaddah Ciganjur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Navbar />
        <main className="w-full pt-[77px]">{children}</main>
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
