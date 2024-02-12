import SignsRow1 from "@/components/SignsRow1";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="relative overflow-hidden max-h-screen mb-24">
      <div className="mx-auto w-[1440px] h-screen relative items-center content-center justify-center ">
        <div className=" grid grid-cols-12 gap-6  mx-20 mt-[120px] ">
          {/* LEFT PART */}
          <div className=" col-span-5 gap-6 flex flex-col ">
            <h2 className="font-ptsans font-bold leading-snug text-[76px]">
              Zdobądź swój projekt już <span className="text-main">teraz.</span>
            </h2>
            <div className="flex gap-4 px-3">
              <Image src="/verticalLine.svg" height={40} width={10} alt="" />
              <h4 className=" text-body  ">
                Projekty tymczasowej organizacji ruchu są <br />
                <span className="text-main">
                  wymagane przed rozpoczęciem prac na drodze. <br />
                </span>{" "}
                Znaki w użytku bez poprawnego projektu nie obowiązują i są
                nielegalne.
              </h4>
            </div>
            <div className="flex justify-between items-center mt-6 gap-[30px]">
              <Link
                href="/"
                className="bg-main text-black font-semibold text-body w-full px-5 py-4 rounded-2xl text-center transition duration-200 hover:scale-105"
              >
                <button>Skontaktuj się</button>
              </Link>
              <Link
                href="/"
                className="text-white border border-main text-body w-full px-5 py-4 rounded-2xl text-center transition duration-200 hover:scale-105"
              >
                <button>Sprawdź co robimy</button>
              </Link>
            </div>
          </div>
          {/* RIGHT PART - SIGNS */}
          <div className="relative w-full max-h-[900px]  col-span-7">
            <div className="-skew-x-[8deg] -skew-y-[6deg] rotate-[6deg] absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 w-full flex gap-5 opacity-70">
              <SignsRow1 img={"/HeaderImg1.svg"} />
              <SignsRow1 img={"/HeaderImg2.svg"} />
              <SignsRow1 img={"/HeaderImg3.svg"} />
              <SignsRow1 img={"/HeaderImg4.svg"} />
            </div>
          </div>
        </div>
      </div>
      {/* <Shadow place={"top-0"} /> */}
      <Shadow place={"bottom-0 shadow-bottom"} />
    </div>
  );
}

function Shadow({ place }) {
  return <div className={`absolute ${place}  h-36 left-0 w-full `} />;
}

export default Header;
