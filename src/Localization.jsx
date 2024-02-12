import Map from "@/components/Map";
import Image from "next/image";
import React from "react";

function Localization() {
  return (
    <div className="bg-[#0d0d0d] bg-signs pt-24 mt-24 border-t-2 border-[#383838]  ">
      <div className="mx-auto w-[1440px] px-20 ">
        <div className="relative  flex justify-start items-center gap-4 mb-10 ">
          <Image src="/verticalLine.svg" height={10} width={7} alt="" />
          <p className=" text-paragraph1 font-bold font-ptsans">Lokalizacja</p>
          <Image
            src="/LocalizationImg1.svg"
            width={25}
            height={25}
            alt=""
            className=" ml-2"
          />
        </div>
        <div className=" bg-[#0E0E0E] w-full border  border-main  p-6 rounded-sm group">
          <div className=" mx-auto w-full rounded-sm h-[500px] border  border-main relative overflow-hidden ">
            {/* GOOGLE MAP */}
            <Map />
            <div className=" max-w-[455px] w-full h-full max-h-[132px] absolute bottom-0 right-0 transition duration-200 group-hover:translate-y-12 group-hover:opacity-0">
              <Image
                src="/LocalizationImg3.jpg"
                alt=""
                fill
                className="contain"
              />
            </div>
          </div>
        </div>
        <div className=" my-12">
          <p className=" text-body text-main text-center">
            Znajdujemy się na terenie Krakowa. Przyjmujemy pracę z okolic oraz
            innych, pobliskich województw.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Localization;
