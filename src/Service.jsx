import Image from "next/image";
import Link from "next/link";
import React from "react";

function Service() {
  return (
    <div className=" pb-12">
      {/* <div className=" bg-gradient-to-b from-backgroundMain to-[#030307] pb-12"> */}
      <div className="mx-auto w-[1440px] min-h-[400px] mt-12 ">
        <div className=" grid grid-cols-12 gap-y-16 mx-20 ">
          <div className=" col-span-full mx-auto">
            <div className="flex flex-col justify-center items-center gap-6">
              <p className=" text-header2 font-bold font-ptsans">
                Co oferujemy
              </p>
              <Image src="/horizontalLine.svg" alt="" width={80} height={6} />
            </div>
          </div>
          <div className="col-span-full flex mx-auto h-[366px] w-full border-2 border-main bg-[#090909] rounded-xl p-9 justify-between items-center ">
            {/* PROJEKT OPIS */}
            <div className=" gap-6 flex flex-col">
              <p className=" text-paragraph1 font-bold font-ptsans">
                Projekt tymczasowej organizacji ruchu
              </p>
              <p className=" text-body leading-extra-loose">
                Korem ipsum dolor sit amet, consectetur adipiscing elit.Korem
                ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              </p>
              <p className="text-main">W tym:</p>
              <div className="w-full flex flex-wrap justify-start gap-6">
                <div className="flex flex-col  gap-6">
                  <div className="flex">
                    <Image
                      src="/ServiceTick.svg"
                      alt=""
                      width={14}
                      height={8}
                      className="mr-3"
                    />
                    <p>Inwentaryzacja dróg</p>
                  </div>
                  <div className="flex">
                    <Image
                      src="/ServiceTick.svg"
                      alt=""
                      width={14}
                      height={8}
                      className="mr-3"
                    />
                    <p>Nabycie map</p>
                  </div>
                </div>
                <div className="flex flex-col  gap-6">
                  <div className="flex">
                    <Image
                      src="/ServiceTick.svg"
                      alt=""
                      width={14}
                      height={8}
                      className="mr-3"
                    />
                    <p>Projektowanie rozwiązań</p>
                  </div>
                  <div className="flex">
                    <Image
                      src="/ServiceTick.svg"
                      alt=""
                      width={14}
                      height={8}
                      className="mr-3"
                    />
                    <p>Konsultacje z rządzącymi organami</p>
                  </div>
                </div>
                <div className="flex flex-col  gap-6">
                  <div className="flex">
                    <Image
                      src="/ServiceTick.svg"
                      alt=""
                      width={14}
                      height={8}
                      className="mr-3"
                    />
                    <p>Pomoc techniczna</p>
                  </div>
                  <div className="flex">
                    <Image
                      src="/ServiceTick.svg"
                      alt=""
                      width={14}
                      height={8}
                      className="mr-3"
                    />
                    <p>Wsparcie</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" border h-full border-[#998E33]" />
            {/* BUTTON */}
            {/* <div className=" border border-[#998E33] w-[375px] h-fit flex flex-col justify-center items-center px-6 py-8 rounded-xl gap-[52px]"> */}
            <div className=" w-[375px] h-fit flex flex-col justify-center items-center px-6 py-8 rounded-xl gap-[52px]">
              <div className="text-center">
                <p className=" text-body leading-extra-loose">Cena:</p>
                <p className=" text-paragraph1 font-ptsans font-bold text-main">
                  Do ustalenia
                </p>
              </div>
              <Link
                href="/"
                className=" bg-buttonGradient text-black text-body px-5 py-4 rounded-xl w-full text-center font-bold"
              >
                <button>Skontaktuj się</button>
              </Link>
            </div>
          </div>
          <div className="col-span-full text-paragraph1 font-ptsans font-bold text-center">
            <p>Czy potrzebujesz projektu? - sprawdź własnoręcznie</p>
          </div>
          <div className="col-span-full  flex flex-col justify-center items-center gap-16 max-w-[990px] mx-auto w-full ">
            {/* col 1 */}
            <div className="flex flex-row justify-around w-full items-center">
              {/* row 1 */}
              <div className="flex flex-col justify-center items-center p-4 gap-3 bg-[#0D0D0D] rounded-3xl max-w-[200px]">
                <div className="relative rounded-full bg-[#1E1E1E] w-12 h-12">
                  <Image
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    src="/ServiceThumbsUp.svg"
                    alt=""
                    width={24}
                    height={30}
                  />
                </div>
                <p className=" text-body3 font-bold text-center">
                  Przyłączasz gaz, prąd i wodę do działki
                </p>
              </div>
              {/* row 2 */}
              <div className="flex flex-col justify-center items-center p-4 gap-3 bg-[#0D0D0D] rounded-3xl max-w-[200px]">
                <div className="relative rounded-full bg-[#1E1E1E] w-12 h-12">
                  <Image
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    src="/ServiceThumbsUp.svg"
                    alt=""
                    width={24}
                    height={30}
                  />
                </div>
                <p className=" text-body3 font-bold text-center">
                  Przyłączasz gaz, prąd i wodę do działki
                </p>
              </div>
              {/* row 3 */}
              <div className="flex flex-col justify-center items-center p-4 gap-3 bg-[#0D0D0D] rounded-3xl max-w-[200px]">
                <div className="relative rounded-full bg-[#1E1E1E] w-12 h-12">
                  <Image
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    src="/ServiceThumbsUp.svg"
                    alt=""
                    width={24}
                    height={30}
                  />
                </div>
                <p className=" text-body3 font-bold text-center">
                  Przyłączasz gaz, prąd i wodę do działki
                </p>
              </div>
            </div>
            {/* col 2 */}
            <div className="flex flex-row justify-around w-full items-center">
              {/* row 1 */}
              <div className="flex flex-col justify-center items-center p-4 gap-3 bg-[#0D0D0D] rounded-3xl max-w-[200px]">
                <div className="relative rounded-full bg-[#1E1E1E] w-12 h-12">
                  <Image
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    src="/ServiceThumbsUp.svg"
                    alt=""
                    width={24}
                    height={30}
                  />
                </div>
                <p className=" text-body3 font-bold text-center">
                  Przyłączasz gaz, prąd i wodę do działki
                </p>
              </div>
              {/* row 2 */}
              <div className="flex flex-col justify-center items-center p-4 gap-3 bg-[#0D0D0D] rounded-3xl max-w-[200px]">
                <div className="relative rounded-full bg-[#1E1E1E] w-12 h-12">
                  <Image
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    src="/ServiceThumbsUp.svg"
                    alt=""
                    width={24}
                    height={30}
                  />
                </div>
                <p className=" text-body3 font-bold text-center">
                  Przyłączasz gaz, prąd i wodę do działki
                </p>
              </div>
              {/* row 3 */}
              <div className="flex flex-col justify-center items-center p-4 gap-3 bg-[#0D0D0D] rounded-3xl max-w-[200px]">
                <div className="relative rounded-full bg-[#1E1E1E] w-12 h-12">
                  <Image
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    src="/ServiceThumbsUp.svg"
                    alt=""
                    width={24}
                    height={30}
                  />
                </div>
                <p className=" text-body3 font-bold text-center">
                  Przyłączasz gaz, prąd i wodę do działki
                </p>
              </div>
            </div>
            {/* <div className="flex flex-row justify-around w-full items-center">
              <div className="flex flex-col justify-center items-center p-4 gap-3 bg-[#0D0D0D] rounded-3xl max-w-[200px]">
                <div className="relative rounded-full bg-[#1E1E1E] w-12 h-12">
                  <Image
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    src="/ServiceThumbsDown.svg"
                    alt=""
                    width={24}
                    height={30}
                  />
                </div>
                <p className=" text-body3 font-bold text-center">
                  Przyłączasz gaz, prąd i wodę do działki
                </p>
              </div>
              <div className="flex flex-col justify-center items-center p-4 gap-3 bg-[#0D0D0D] rounded-3xl max-w-[200px]">
                <div className="relative rounded-full bg-[#1E1E1E] w-12 h-12">
                  <Image
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    src="/ServiceThumbsDown.svg"
                    alt=""
                    width={24}
                    height={30}
                  />
                </div>
                <p className=" text-body3 font-bold text-center">
                  Przyłączasz gaz, prąd i wodę do działki
                </p>
              </div>
              <div className="flex flex-col justify-center items-center p-4 gap-3 bg-[#0D0D0D] rounded-3xl max-w-[200px]">
                <div className="relative rounded-full bg-[#1E1E1E] w-12 h-12">
                  <Image
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    src="/ServiceThumbsDown.svg"
                    alt=""
                    width={24}
                    height={30}
                  />
                </div>
                <p className=" text-body3 font-bold text-center">
                  Przyłączasz gaz, prąd i wodę do działki
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
