import Image from "next/image";
import React from "react";

function Footer() {
  return (
    // <div className=" relative w-full tracking-extra py-7 border-[#383838] border-t text-xs text-center bg-gradient-to-t from-[#161616]  to-[#000000] to-[40%]">
    <div className=" relative w-full tracking-extra py-7 border-[#383838] border-t text-xs text-center bg-[#030303]">
      <p>
        @2023 <span className="text-main">SZAFRAN</span> PROJEKT.
      </p>
      <div className="absolute right-0 bottom-full -translate-x-14  w-full max-w-[220px] h-[35px]">
        <Image src="/FooterImg1.svg" alt="" fill className=" object-contain" />
      </div>
    </div>
  );
}

export default Footer;
