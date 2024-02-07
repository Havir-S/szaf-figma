import Image from "next/image";
import React from "react";

function WhyUs() {
  return (
    <div className=" w-full mx-auto ">
      <div className=" w-90 max-w-[1440px] mx-auto border">
        <div className="h-[400px] w-[1260px] mx-auto ">
          <Image src="/WhyUsImg2.svg" alt="" width={1280} height={354} />
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
