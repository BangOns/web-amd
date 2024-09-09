import Contact from "@/MyComponent/Footer/Contact";
import Footer from "@/MyComponent/Footer/Footer";

import Navbar from "@/MyComponent/Navbar/Navbar";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow w-full pt-[77px]">{children}</main>
      <Contact />
      <Footer />
    </div>
  );
}
