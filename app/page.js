import Question from "@/components/Question";
import AboutUs from "@/src/AboutUs";
import Contact from "@/src/Contact";
import Footer from "@/src/Footer";
import Header from "@/src/Header";
import Localization from "@/src/Localization";
import Nav from "@/src/Nav";
import Questions from "@/src/Questions";

import Service from "@/src/Service";
import Stats from "@/src/Stats";
import WhyUs from "@/src/WhyUs";

export default function Home() {
  return (
    <>
      <main className=" bg-backgroundMain min-h-screen font-quicksand ">
        <Nav />
        <div className="grid">
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
    </>
  );
}
