import Contact from "@/MyComponent/Footer/Contact";
import Footer from "@/MyComponent/Footer/Footer";
import Article_Home from "@/MyComponent/Home/Article-Home";
import HeaderHome from "@/MyComponent/Home/Header-Home";
import Navbar from "@/MyComponent/Navbar/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow w-full pt-[77px]">
        <HeaderHome />
        <Article_Home />
      </main>
      <Contact />
      <Footer />
    </div>
  );
}
