import AboutUs from "@/src/AboutUs";
import Contact from "@/src/Contact";
import Header from "@/src/Header";
import Nav from "@/src/Nav";
import Service from "@/src/Service";
import Stats from "@/src/Stats";
import WhyUs from "@/src/WhyUs";
import Questions from "@/src/Questions";
import Image from "next/image";
import Question from "@/components/Question";
import Localization from "@/src/Localization";
import Footer from "@/src/Footer";

export default function Home() {
  return (
    <div>
      <main className=" bg-backgroundMain min-h-screen font-quicksand ">
        <Nav />
        <div className="grid gap-12">
          <Header />
          <AboutUs />
          <Stats />
          <Service />
          <Contact />
          <WhyUs />
          <Questions>
            <Question />
            <Question />
            <Question />
            <Question />
          </Questions>
          <Localization />
        </div>
      </main>
      <Footer />
    </div>
  );
}
