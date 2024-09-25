import React from "react";
import heroPic from "../../../public/navbar/landingPic.png";
import Image from "next/image";
import authoPic from "../../../public/navbar/flowed-author-pic.png";

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <div className="w-full h-[664px] flex flex-col relative">
      <Image
        className="absoulte rounded-[12px]"
        src={heroPic}
        alt="hero section picture"
        width={1216}
        height={600}
        priority
      />
      <FlowedBox />
    </div>
  );
}

const FlowedBox = () => {
  return (
    <div className=" w-[598px] h-[304px] flex flex-col p-[40px] absolute bottom-0 left-[80px] bg-[#FFFFFF]  rounded-[12px] border-[2px] border-[#E8E8EA] dark:border-[#242535] dark:bg-[#181A2A] shadow-[0_12px_24px_-6px_rgba(24, 26, 42, 0.12)]">
      <h5 className=" w-fit p-[4px] rounded-[6px] bg-[#4B6BFB]">Technology</h5>
      <p
        className={`dark:text-[#FFFFFF] text-[36px] text-[#181A2A] font-workSans`}
      >
        The Impact of Technology on the Workplace: How Technology is Changing
      </p>
      <div className="h-[36px] flex justify-start items-center gap-[20px] text-[16px]">
        <div className="flex gap-[12px] justify-start items-center">
          <Image
            className="w-[36px] h-[36px]"
            src={authoPic}
            alt="author pic"
          />
          <div className="font-workSans font-medium text-[#97989F]">Jason Francisco</div>
        </div>
        <div className="font-workSans text-[#97989F]">August 20, 2022</div>
      </div>
    </div>
  );
};
