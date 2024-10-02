import React from "react";
import { CiMenuBurger } from "react-icons/ci";

interface BurgerMenuProps {
  isMobile: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BurgerMenu({
  isMobile,
  isMenuOpen,
  setIsMenuOpen,
}: BurgerMenuProps) {
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
}
