import React from "react";
import Navbar from "../Navbar/Navbar";
import Contact from "../Footer/Contact";
import Footer from "../Footer/Footer";

export default function Container_LandingPage({
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
