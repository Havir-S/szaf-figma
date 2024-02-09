import Image from "next/image";
import React from "react";

function SignsRow1({ img }) {
  return (
    <div className=" h-[2000px] w-full relative transition duration-[3s] hover:translate-y-1/2">
      <Image src={img} alt="" fill className=" object-contain" />
    </div>
  );
}

export default SignsRow1;
