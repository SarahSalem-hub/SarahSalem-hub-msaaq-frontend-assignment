"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import logoDark from "../../../public/navbar/Logo.svg";
import logoWhite from "../../../public/navbar/Logo-dark.svg";
import { useTheme } from "next-themes";
import Menu from "../Navbar/Menu";
import SearchAndDarkMode from "../Navbar/SearchAndDarkMode";
import BurgerMenu from "../Navbar/BurgerMenu";
import LanguageSwitcher from "../LanguageSwitcher";

const Nabvar = ({ session }) => {
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
    <div className={`${resolvedTheme === "dark" ? "dark" : "light"}`}>
      <div className=" w-full h-[100px]  relative flex justify-center items-center">
        <div className="w-[1218px] h-[36px]  flex  flex-wrap justify-between items-center md:mx-[20px] mx-[9px] ">
          <Logo /> {/* component down below */}
          <>
            <Menu
              session={session}
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
            <SearchAndDarkMode toggleDarkMode={toggleDarkMode} />
            <BurgerMenu
              isMobile={isMobile}
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          </>
        </div>
      </div>
    </div>
  );
};

export default Nabvar;

const Logo = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  return (
    <Image
      src={mounted && resolvedTheme === "dark" ? logoWhite : logoDark}
      alt="logo"
      width={158}
      height={36}
      className="lg:w-[158px] lg:h-[36px]  md:w-[120px] md:h-[46px] w-[90px] h-[40px]"
      priority
    />
  );
};
