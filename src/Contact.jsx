import Image from "next/image";
import React from "react";

function Contact() {
  return (
    <div className="mx-auto w-[1440px] min-h-[400px] mt-12  ">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[172px] h-[68px] relative">
          <Image
            src="/navLogo.png"
            fill
            className="object-contain"
            sizes="172px, 68px"
            alt="logo"
          />
        </div>
        <div className="relative">
          <h2 className=" text-header2 font-ptsans font-bold my-8">
            Skontaktuj się z nami!
          </h2>
          <Image
            className="absolute bottom-12 right-0 translate-x-16"
            src="/ContactImg.svg"
            alt=""
            width={38}
            height={69}
          />
        </div>
        <p className=" text-body leading-extra-loose mb-12 ">
          Oferta bądź pytanie, odpowiadamy na wszystko.
        </p>
        <div className=" w-full max-w-[1000px] h-full flex justify-around items-stretch mt-6 p-5">
          <DataCard
            icon={"bg-mail"}
            type={"E-mail"}
            text={"Wyślij wiadomość na naszego maila!"}
            data={"aaa.aaa@gmail.com"}
          />
          <DataCard
            icon={"bg-phone"}
            type={"Telefon"}
            text={"Zadzwoń do nas!"}
            data={"(+48) 000 000 000"}
          />
          <DataCard
            icon={"bg-facebook"}
            type={"Facebook"}
            text={"Wyślij nam wiadomość!"}
            data={"aaa-aaa"}
          />
        </div>
      </div>
    </div>
  );
}

function DataCard({ icon, type, text, data }) {
  return (
    <div className="w-full max-w-[260px] text-body rounded-2xl border border-[#3D3D3D] p-4 gap-5 flex flex-col bg-black transition duration-200 hover:scale-105 hover:cursor-default">
      <div
        className={`relative rounded-xl h-[50px] w-[50px] border border-[#3D3D3D] ${icon} bg-center bg-no-repeat `}
      />
      <div className="flex flex-col gap-8">
        <p>{type}</p>
        <p>{text}</p>
        <p className=" text-main font-bold">{data}</p>
      </div>
    </div>
  );
}

export default Contact;
