
import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";


export interface MenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  session: string;
}

type MenuItem = {
  name: string;
  link?: string;
  alternative?: MenuItem;
};

export default function Menu({
  isMenuOpen,
  setIsMenuOpen,
  session,
}: MenuProps) {

  const t = useTranslations()
  const menu: MenuItem[] = [
    { name: t('navbar.menu.home'), link: "/" },
    { name: t('navbar.menu.blogs'), link: "/blog" },
  ];
  return (
    <div
      className={`item ${
        isMenuOpen
          ? "flex flex-col items-center  bg-[#FFFFFF] dark:bg-[#181A2A] dark:text-[#FFFFFF] w-full h-[200px] left-0 right-0 top-[68px] z-20"
          : "hidden"
      }`}
    >
      {menu.map((page, idx) => (
        <Link
          href={page.link}
          key={idx}
          onClick={isMenuOpen ? () => setIsMenuOpen(!isMenuOpen) : undefined}
        >
          {page.name}
        </Link>
      ))}
      {session ? (
        <>
          <Link
            href="/profile"
            onClick={isMenuOpen ? () => setIsMenuOpen(!isMenuOpen) : undefined}
          >
            {t('navbar.menu.profile')}
          </Link>
          <button
            onClick={() => {
              signOut();
            }}
            className="text-left"
          >
            {t('navbar.menu.signout')}
          </button>
        </>
      ) : (
        <>
          <Link
            href="/login"
            onClick={isMenuOpen ? () => setIsMenuOpen(!isMenuOpen) : undefined}
          >
            {t('navbar.menu.signin')}
          </Link>
          <Link
            href="/register"
            onClick={isMenuOpen ? () => setIsMenuOpen(!isMenuOpen) : undefined}
          >
            {t('navbar.menu.signup')}
          </Link>
        </>
      )}
    </div>
  );
}
