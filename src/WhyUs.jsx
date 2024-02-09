import Image from "next/image";
import React from "react";

function WhyUs() {
  return (
    <div className=" w-full mx-auto -mt-12 relative">
      <div className=" w-full  absolute top-0 left-0 h-[354px]  bg-whyUsBackground2 bg-repeat-x bg-center" />
      <div className=" w-full max-w-[1440px] mx-auto ">
        <div className="h-[354px]  w-full max-w-[1280px] mx-auto relative ">
          {/* <div className="relative w-full max-w-[1280px] h-[354px] bg-whyUsBackground bg-repeat-x bg-center bg-cover  flex justify-end items-center"> */}
          <div className="relative w-full max-w-[1280px] h-[354px]  bg-repeat-x bg-center bg-cover  flex justify-end items-center">
            <div className="w-[305px] h-[85px] absolute bottom-0 right-0 translate-y-1/2">
              <Image
                src="/WhyUsImg3.svg"
                alt=""
                fill
                className=" object-contain"
              />
            </div>
            <Image
              src="/WhyUsImg2.jpg"
              alt=""
              width={403}
              height={517}
              className=" rounded-2xl shadow-2xl mx-6"
            />
            <div className=" flex flex-col justify-center w-full max-w-[760px]  text-body gap-4  mx-4">
              <p className="text-main font-semibold">Dlaczego my?</p>
              <p className=" leading-extra-loose">
                Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit <br /> interdum, ac aliquet odio
                mattis. Class aptent taciti sociosqu ad litora torquent per{" "}
                <br />
                conubia nostra, per inceptos himenaeos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
