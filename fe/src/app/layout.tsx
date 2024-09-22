import type { Metadata } from "next";
import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
