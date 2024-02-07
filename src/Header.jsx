import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="mx-auto w-[1440px] min-h-screen border border-orange-500  ">
      <div className=" grid grid-cols-12 gap-6 border border-green-500 mx-20 ">
        <div className="border border-red-500 col-span-5 gap-6 flex flex-col mt-[120px]">
          <h2 className="font-ptsans font-bold text-[76px]">
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
        <div className="w-full max-h-[900px] overflow-hidden border border-red-500 col-span-6">
          {/* <Image src="/znakiTilted.svg" alt="" width={693} height={2082} /> */}
        </div>
      </div>
    </div>
  );
}

function Shadow() {
  return <div className="absolute top-0 left-0 w-full h-full"></div>;
}

export default Header;
