"use client";

import Image from "next/image";
import { useState } from "react";

export default function Question() {
  const [isOpen, setIsOpen] = useState(false);

  function handleChange() {
    setIsOpen((prev) => !prev);
  }
  return (
    <div className="text-body4  select-none">
      {/* QUESTION */}
      <div className="cursor-pointer" onClick={handleChange}>
        <div
          className={`relative  border-b ${
            isOpen ? "border-b-transparent" : "hover:border-main"
          } hover:text-main   hover:fill-main  px-6 py-8 flex justify-between  transition`}
        >
          <span className=" ">How long can we keep the project?</span>
          <svg
            width="30"
            height="30"
            viewBox="0 0 17 18"
            stroke="inherit"
            fill="inherit"
            className=" fill-current  "
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 9.21436H16" stroke="currentColor" />
            {/* TURN INTO MINUS */}
            {!isOpen && (
              <path d="M8.71436 16.5L8.71436 1.5" stroke="currentColor" />
            )}
          </svg>
          <div className=" w-full h-3 absolute bottom-0 left-0">
            {/* DASHED LINE BOTTOM */}
            {isOpen && (
              <Image
                src="/QuestionImg2.svg"
                fill
                className=" object-contain"
                alt=""
              />
            )}
          </div>
        </div>
        {/* ANSWER  */}
        {isOpen && (
          <div className="h-[210px] w-full  relative flex justify-end items-center px-12 mb-12">
            <span className="text-main  min-w-[200px] max-w-[500px] relative z-10">
              Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </span>
            <div className=" w-full h-full absolute top-0 left-0">
              <Image
                src="/QuestionImg1.svg"
                fill
                className="object object-fill relative z-0"
                alt=""
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
