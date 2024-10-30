import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "react-toastify/dist/ReactToastify.css";
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
        {children}
        <ToastContainer autoClose={2000} />
      </body>
    </html>
  );
}
