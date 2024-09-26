"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import logoDark from "../../../public/navbar/Logo.svg";
import logoWhite from "../../../public/navbar/Logo-dark.svg";
import switchLogo from "../../../public/navbar/sunny.svg";
import searchSvg from "../../../public/navbar/search.svg";
import Link from "next/link";
import { useTheme } from "next-themes";
import { CiMenuBurger } from "react-icons/ci";

interface MenuItem {
  name: string;
  link: string;
}

const menu: MenuItem[] = [
  { name: "Home", link: "/" },
  { name: "Blogs", link: "/blog" },
  { name: "Login", link: "/login" },
  { name: "Sign up", link: "/register" },
];
const Nabvar = () => {
  const { setTheme, resolvedTheme } = useTheme(); //dark-light provider theme
  const [isMenuOpen, setIsMenuOpen] = useState(false); // navbar
  const [isMobile, setIsMobile] = useState(false); // Track mobile view

  const toggleDarkMode = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobileScreen = window.innerWidth <= 768;
      if (!isMobileScreen) {
        setIsMenuOpen(false); // Close menu on larger screens
      }
      setIsMobile(isMobileScreen); // Update mobile screen status
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <div className={`${resolvedTheme && "dark"}`}>
      <div className="dark:bg-[#181A2A] w-full h-[100px] bg-[#FFFFFF] relative flex justify-center items-center">
        <div className="w-[1218px] h-[36px]  flex justify-between items-center mx-[20px] ">
          <Logo/>
          <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <SearchAndDarkMode
            resolvedTheme={resolvedTheme}
            toggleDarkMode={toggleDarkMode}
          />
          <BurgerMenu
            isMobile={isMobile}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default Nabvar;
interface MenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
interface BurgerMenuProps {
  isMobile: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Logo = () =>{
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    return (
      <Image
        src={mounted && resolvedTheme === "dark" ? logoWhite : logoDark}
        alt="logo"
        width={158}
        height={36}
        className="lg:w-[158px] lg:h-[36px]  md:w-[100px] md:h-[30px] w-[80px] h-[30px]"
        priority
      />
    );
  };

const Menu: React.FC<MenuProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div
      className={`item ${
        isMenuOpen
          ? "flex flex-col items-center  bg-[#FFFFFF] dark:bg-[#181A2A] dark:text-[#FFFFFF] w-full h-[200px] left-0 right-0 top-[68px] z-20"
          : "hidden"
      }`}
    >
      {menu.map((page, idx) => {
        return (
          <Link
            href={page.link}
            key={idx}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {page.name}
          </Link>
        );
      })}
    </div>
  );
};

const SearchAndDarkMode = ({
  toggleDarkMode,
  resolvedTheme,
}: {
  toggleDarkMode: () => void;
  resolvedTheme: string;
}) => {
  return (
    <div className="flex md:gap-[40px] gap-[20px] items-center ">
      <div className="relative">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search"
          className="dark:bg-[#242535] bg-[#F4F4F5] md:h-[36px] md:w-[166px] h-[24px] w-[130px] rounded-[5px] ps-[16px]"
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
        <ToggleSwitch />
      </div>
    </div>
  );
};
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
const BurgerMenu: React.FC<BurgerMenuProps> = ({
  isMobile,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  return (
    <div className="md:hidden">
      <button
        onClick={() => {
          console.log("ismobile", isMobile);
          if (isMobile) {
            setIsMenuOpen(!isMenuOpen);
          }
        }}
      >
        <CiMenuBurger size={20} />
      </button>
    </div>
  );
};
