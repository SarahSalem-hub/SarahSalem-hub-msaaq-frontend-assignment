"use client";

import { useRouter, usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useState, useEffect } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(locale);

  const changeLanguage = (localeString) => {
    setSelectedLanguage(localeString);
    router.push(pathname, { locale: localeString });
    router.refresh();
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (localeString) => {
    changeLanguage(localeString);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.getElementById("custom-select");
      if (dropdown && !dropdown.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  console.log("language");

  return (
    <div className="relative inline-block text-left" id="custom-select">
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-between w-full   rounded-[25px]  shadow-sm px-[2px] md:px-4 py-[2px] md:py-2 dark:bg-[#242535] outline-none bg-[#F4F4F5] text-sm font-medium text-gray-700 dark:text-[#A1A1AA] hover:bg-gray-50 "
        >
          {selectedLanguage === "en" ? "English" : "عربي"}
          <svg
            className="ms-[4px] md:ms-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-[2px] z-10 mt-2 w-[94px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              onClick={() => handleLanguageSelect("en")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              English
            </button>
            <button
              onClick={() => handleLanguageSelect("ar")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              عربي
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
