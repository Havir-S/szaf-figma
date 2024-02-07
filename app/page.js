import AboutUs from "@/src/AboutUs";
import Contact from "@/src/Contact";
import Header from "@/src/Header";
import Nav from "@/src/Nav";
import Service from "@/src/Service";
import Stats from "@/src/Stats";
import WhyUs from "@/src/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-backgroundMain min-h-screen font-quicksand ">
      <Nav />
      <div className="grid gap-12">
        {/* <Header />
        <AboutUs />
        <Stats />
        <Service />
        <Contact /> */}
        {/* <WhyUs /> */}
      </div>
    </main>
  );
}
