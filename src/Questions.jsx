import Question from "@/components/Question";
import Image from "next/image";

function Questions({ children }) {
  return (
    <div className=" mx-auto w-full max-w-[1440px] px-20 mt-40">
      <div className="relative flex items-end gap-6 mx-auto justify-center mb-12">
        <h2 className=" text-paragraph1 font-ptsans tracking-wide">
          Najczęściej zadawane <span className="text-main">pytania</span>
        </h2>
        <Image src="/QuestionsImg1.svg" alt="" width={38} height={69} />
      </div>
      {children}
    </div>
  );
}

export default Questions;
