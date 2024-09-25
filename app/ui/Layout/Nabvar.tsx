"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../../public/navbar/Logo.svg";
import logoDark from "../../../public/navbar/Logo-dark.svg";
import switchLogo from "../../../public/navbar/sunny.svg";
import searchSvg from "../../../public/navbar/search.svg";
import Link from "next/link";
import { cookies } from "next/headers";
import { useTheme } from "next-themes";

interface MenuItem {
    name: string;
    link: string;
  }
  
  const menu: MenuItem[] = [
    { name: "Home", link: "/" },
    { name: "Blogs", link: "/blog" },
    { name: "Login", link: "/login" },
    { name: "Sign up", link: "/register" }
  ];
const Nabvar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  const toggleDarkMode = () => {
    setTheme(resolvedTheme === "dark" ? "light": "dark")
    setDarkMode(!darkMode);
  };

  

  // useEffect(() => {
  //   setDarkMode(resolvedTheme === "dark" ? true: false);
  // }, []);
  
  const checkTheme = ()=> {
    return resolvedTheme === "dark" 
  }


  useEffect(() => {
    console.log("resolvedTheme",resolvedTheme)
  }, [resolvedTheme])
  

  return (
    <div className={`${resolvedTheme && "dark"}`}>
      <div className="dark:bg-[#181A2A] w-full h-[100px] bg-[#FFFFFF] flex justify-center items-center">
        <div className="w-[1218px] h-[36px]  flex justify-between items-center mx-[20px]">
          <Image
            src={resolvedTheme === "dark" ? logoDark : logo}
            width={158}
            height={36}
            alt="logo"
          />
          <div className="flex justify-center gap-[40px] text-[#3B3C4A] dark:text-[#FFFFFF]">
            {menu.map((page, idx) => {
              return <Link href={page.link} key={idx}>{page.name}</Link>;
            })}
          </div>
          <div className="flex gap-[40px] items-center ">
            <div className="relative">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search"
                className="dark:bg-[#242535] bg-[#F4F4F5] h-[36px] w-[166px] rounded-[5px] ps-[16px]"
              />
              <Image
                src={searchSvg}
                alt="search"
                className="absolute top-[10px] right-[8px]"
              />
            </div>
            <div
              className="dark:bg-[#4B6BFB] w-[48px] h-[28px] bg-[#E8E8EA] rounded-[100px] relative mr-[5px] "
              onClick={toggleDarkMode}
            >
              <div
                className={`w-[24px] h-[24px] rounded-full bg-white absolute ms-[2px] top-[2px] ${
                  resolvedTheme === "dark" ? "translate-x-[20px]" : "translate-x-0"
                } transition-transform duration-300 ease-in-out`}
              >
                <Image src={switchLogo} fill alt="switch" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nabvar;
