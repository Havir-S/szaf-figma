import Image from "next/image";
import React from "react";

function AboutUs() {
  return (
    <div className="mx-auto w-[1440px] grid grid-cols-12 gap-16 px-20  ">
      <div className="relative   col-span-5">
        <div className="w-full flex justify-center items-center relative ">
          <Image
            src="/AboutUsImg6.jpg"
            alt=""
            width={560}
            height={0}
            // fill
            className=" object-contain h-[560px] w-[523px]"
          />
        </div>
      </div>
      <div className=" w-full ml-4  col-span-7  flex flex-col gap-6 items-start">
        <div className="flex justify-center items-center gap-6">
          <Image src="/horizontalLine.svg" alt="" width={80} height={6} />
          <p className=" text-paragraph1 font-ptsans font-bold">
            O Szafran Projekt
          </p>
        </div>
        <p className=" text-header2 font-ptsans font-bold">
          Horem ipsum dolor sit amet,{" "}
          <span className="text-main">consectetur</span> adipiscing elit.
        </p>
        <p className=" text-body leading-extra-loose font-quicksand">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit <br /> interdum, ac aliquet odio
          mattis.Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
          Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
