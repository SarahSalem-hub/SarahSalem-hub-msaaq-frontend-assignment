import { useTheme } from "next-themes";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import searchSvg from "../../../public/navbar/search.svg";
import switchLogo from "../../../public/navbar/sunny.svg";

type Props = {
  toggleDarkMode: () => void;
};

export default function SearchAndDarkMode({ toggleDarkMode }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    // console.log(term);
    if (term) {
      params.set("query", term);
      params.set("page", "1");
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className="flex md:gap-[40px] gap-[6px] items-center ">
      <div className="relative">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search"
          className="dark:bg-[#242535] bg-[#F4F4F5] md:h-[36px] md:w-[166px] h-[24px] w-[130px] rounded-[5px] ps-[16px]"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get("query")?.toString()}
        />
        <Image
          src={searchSvg}
          alt="search"
          className="absolute md:top-[10px] top-[5px] right-[8px]"
        />
      </div>
      <div
        className="dark:bg-[#4B6BFB] w-[48px] md:h-[28px] h-[20px]  bg-[#E8E8EA] rounded-[100px] relative mr-[5px] "
        onClick={toggleDarkMode}
      >
        <ToggleSwitch /> {/* component is below */}
      </div>
    </div>
  );
}

const ToggleSwitch = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  return (
    <div
      className={`md:w-[24px] md:h-[24px] w-[18px] h-[18px] rounded-full bg-white absolute ms-[2px] md:top-[2px] top-[1px] ${
        mounted && resolvedTheme === "dark"
          ? "md:translate-x-[20px] translate-x-[26px]"
          : "translate-x-0"
      } transition-transform duration-300 ease-in-out`}
    >
      <Image src={switchLogo} fill alt="switch" />
    </div>
  );
};
