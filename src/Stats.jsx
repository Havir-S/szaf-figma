import Image from "next/image";
import React from "react";

function Stats() {
  return (
    <div className=" w-full mx-auto  pt-16 border-t border-[#383838]">
      <div className=" w-90 max-w-[1800px] mx-auto">
        <div className=" flex justify-center items-center gap-6 h-[495px] w-full bg-statsBackground bg-no-repeat bg-cover rounded-2xl shadow-2xl">
          <div className="flex flex-col justify-center h-full w-full max-w-[1350px] gap-5 px-12  ">
            {/* FILLER + IMG */}
            <div className="flex flex-row justify-center gap-[350px] items-center">
              <div className="flex flex-col gap-9 max-w-[680px]">
                <p className="text-main text-body">SZAFRAN PROJEKT</p>
                <h3 className=" text-paragraph1 font-ptsans font-bold">
                  Współpraca na wyższym poziomie
                </h3>
                <p>
                  Staramy się gwarantować najwyższą jakość wykonanej pracy, a
                  także <br /> zapewniamy poradnictwo i pomoc w naszej
                  dziedzinie.
                </p>
              </div>
              <div className="relative w-[233px] h-[263px]">
                <Image
                  src="/StatsImg.png"
                  alt=""
                  fill
                  className=" object-contain"
                />
              </div>
            </div>

            {/* STATS */}
            <div className=" flex justify-center">
              <div className="flex px-4 gap-5 justify-center items-center w-full">
                <Image src="/StatsLine.svg" alt="" height={15} width={2} />
                <div>
                  <p className="text-3xl font-bold font-ptsans tracking-little">
                    1200+
                  </p>
                  <p className=" text-body leading-extra-loose">
                    Wszystkich projektów
                  </p>
                </div>
              </div>
              <div className="flex px-4 gap-5 justify-center items-center w-full">
                <Image src="/StatsLine.svg" alt="" height={15} width={2} />
                <div>
                  <p className="text-3xl font-bold font-ptsans tracking-little">
                    8
                  </p>
                  <p className=" text-body leading-extra-loose">
                    Lat doświadczenia
                  </p>
                </div>
              </div>
              <div className="flex px-4 gap-5 justify-center items-center w-full">
                <Image src="/StatsLine.svg" alt="" height={15} width={2} />
                <div>
                  <p className="text-3xl font-bold font-ptsans tracking-little">
                    Małopolska i okolice
                  </p>
                  <p className=" text-body leading-extra-loose">Teren pracy</p>
                </div>
              </div>
              <div className="flex px-4 gap-5 justify-center items-center w-full">
                <Image src="/StatsLine.svg" alt="" height={15} width={2} />
                <div>
                  <p className="text-3xl font-bold font-ptsans tracking-little">
                    Prawo Drogowe, <br />
                    Wymogi Techniczne
                  </p>
                  <p className=" text-body leading-extra-loose">Ekspertyza</p>
                </div>
              </div>
              {/* <div className="border border-red-500 h-5"></div>
              <div className="border border-red-500 h-5"></div>
              <div className="border border-red-500 h-5"></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
