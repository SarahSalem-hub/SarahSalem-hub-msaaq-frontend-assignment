import React from "react";
import heroPic from "../../../public/homePage/landingPic.png";
import Image from "next/image";
import authoPic from "../../../public/homePage/flowed-author-pic.png";
import Category from "./Category";

export default function HeroSection() {
  return (
    <div className="w-full flex flex-col relative ">
      <div className=" relative lg:p-3 p-[20px]">
        <Image
          className="absoulte rounded-[12px] "
          src={heroPic}
          alt="hero section picture"
          width={1216}
          height={600}
          priority
        />
      </div>
      <FlowedBox />
    </div>
  );
}

const FlowedBox = () => {
  return (
    <div className="w-full md:h-[100px] h-[270px] flex justify-center items-center ">
      <div className="  md:w-[606px] md:h-auto w-[90%] h-auto flex flex-col p-[40px] absolute md:bottom-0 left-[5%] bg-[#FFFFFF]  rounded-[12px] border-[2px] border-[#E8E8EA] dark:border-[#242535] dark:bg-[#181A2A] shadow-[0_12px_24px_-6px_rgba(24, 26, 42, 0.12)]">
        <Category
          text={"Technology"}
          textColor={"text-[#FFFFFF]"}
          bgColor={"bg-[#4B6BFB] dark:"}
        />
        <p
          className={`dark:text-[#FFFFFF] md:mb-[24px] mb-[15px] lg:text-[36px] md:text-[20px] sm:text-[15px] text-[#181A2A] font-workSans`}
        >
          The Impact of Technology on the Workplace: How Technology is Changing
        </p>
        <div className="h-[36px]  flex justify-start items-center gap-[20px] text-[16px]">
          <div className="flex gap-[12px] justify-start items-center">
            <Image
              className="w-[36px] h-[36px]"
              src={authoPic}
              alt="author pic"
            />
            <div className="font-workSans font-medium text-[#97989F]">
              Jason Francisco
            </div>
          </div>
          <div className="font-workSans text-[#97989F]">August 20, 2022</div>
        </div>
      </div>
    </div>
  );
};
