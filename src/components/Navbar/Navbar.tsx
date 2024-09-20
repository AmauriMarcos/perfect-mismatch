"use client";

import React, { useState, useEffect } from "react";
import { IoIosSearch as IconSearch } from "react-icons/io";
import ThemeSwitch from "../ThemeSwitcher";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "../MobileMenu/MobileMenu";
import { TiSocialFacebook as IconFacebook } from "react-icons/ti";
import { SlSocialInstagram as IconInstagram } from "react-icons/sl";
import { IoIosMail as IconEmail } from "react-icons/io";
import { IoClose as IconClose } from "react-icons/io5";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [stickyClass, setStickyClass] = useState("relative");
  const [windowWidth, setWindowWidth] = useState(0); // Initialize with a default value
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth); // Set initial width

      const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleWindowResize);

      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stickNavbar = () => {
        const windowHeight = window.scrollY;
        windowHeight > 40
          ? setStickyClass("sticky")
          : setStickyClass("relative");
      };

      window.addEventListener("scroll", stickNavbar);

      return () => {
        window.removeEventListener("scroll", stickNavbar);
      };
    }
  }, []);

  const items = [
    { id: 1, name: "Home", path: "/" },
    { id: 3, name: "Recipes", path: "recipes" },
    { id: 4, name: "Travels", path: "travels" },
    { id: 5, name: "Crafts", path: "crafts" },
    { id: 6, name: "Insights", path: "insights" },
  ];

  const topLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "about" },
    { id: 3, name: "Contact", path: "contact" },
    { id: 4, name: "Subscribe", path: "subscribe" },
  ];

  const toggleSearch = () => {
    setOpenSearch((prev) => !prev);
  };

  if (pathname.startsWith("/studio")) {
    return null;
  }

  return (
    <div
    className={`w-full flex flex-col  z-50`}

    >
      <div
        className={`flex w-full items-center justify-center py-[10px] px-[15px] gap-2 h-[44px] bg-tertiaryAccent hover:bg-secondary group cursor-pointer`}
      >
        <IconSearch className="h-4 w-4 md:h-6 md:w-6 fill-background cursor-pointer group-hover:fill-background" />
        <h4 className="font-montserrat text-[.525rem] md:text-[.65rem] uppercase  font-bold text-background cursor-pointer group-hover:text-background">
          Explore the latest updates, visit our latest posts now!
        </h4>
      </div>

      <div className="w-full px-[6%] md:px-[12%] 2xl:px-[14%] h-full bg-background flex flex-col justify-between items-center shadow-md ">
        <div
          className={`hidden ${stickyClass === "sticky" ? "hidden" : "md:flex"} justify-between h-[56px] w-full py-[1.2rem]`}
        >
          <ul className="hidden md:flex gap-4 transition-all duration-[350ms] ease-in-out ">
            {topLinks.map((item) => (
              <li key={item.id} className="">
                <Link
                 href={item.path === '/' ? '/' : `/blog/${item.path}`}
                  className={`block transition-all duration-[350ms] ease-in-out text-[.875rem] ${
                    item.path === "/"
                      ? pathname === "/"
                        ? "text-foreground"
                        : "hover:text-foreground"
                      : pathname.includes(item.path)
                        ? "text-foreground"
                        : "hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 items-center">
            <div className="h-[40px] w-[40px] rounded-full border-2 border-solid border-[#000] flex items-center justify-center group cursor-pointer">
              <IconFacebook className="h-[20px] w-[20px] group-hover:rotate-12 transition-all duration-[350ms] ease-in-out" />
            </div>
            <div className="h-[40px] w-[40px] rounded-full border-2 border-solid border-[#000] flex items-center justify-center group cursor-pointer">
              <IconInstagram className="h-[20px] w-[20px] group-hover:rotate-12 transition-all duration-[350ms] ease-in-out" />
            </div>
            <div className="h-[40px] w-[40px] rounded-full border-2 border-solid border-[#000] flex items-center justify-center group cursor-pointer">
              <IconEmail className="h-[20px] w-[20px] group-hover:rotate-12 transition-all duration-[350ms] ease-in-out" />
            </div>
          </div>
        </div>

        <div
          className={` flex justify-between w-full ${windowWidth > 767 ? (stickyClass === "sticky" ? "h-[90px]" : "h-[70px]") : "h-[70px]"} gap-8 z-50`}
        >
          <div className="h-full flex items-center justify-center">
            <h3 className="font-extrabold text-[2rem] font-montserrat text-secondary">
              PMLogo
            </h3>
          </div>
          <ul className="hidden md:flex relative gap-6 grow m-auto justify-end items-center">
            {items.map((item) => (
              <li key={item.id} className="relative group">
                <Link
                  href={item.path === '/' ? '/' : `/blog/${item.path}`}
                  className={`relative block transition-all duration-500 ease-in-out font-black text-[1.2rem] ${
                    item.path === "/"
                      ? pathname === "/"
                        ? "text-foreground" // Active class for "Home"
                        : "hover:text-foreground" // Hover effect for "Home"
                      : pathname.includes(item.path)
                        ? "text-foreground" // Active class for other paths
                        : "hover:text-foreground" // Hover effect for other paths
                  }`}
                >
                  {item.name}

                  <span
                    className={`absolute inset-0 top-[.2rem] bottom-[-.2rem] left-0 right-0 border-t-[3px] border-b-[3px] border-[#FFB4A0] transition-all duration-500 ease-in-out opacity-0 scale-y-0 ${
                      item.path === "/"
                        ? pathname === "/"
                          ? "opacity-100 scale-y-100 top-[0] bottom-[-.2rem]" // Active underline for "Home"
                          : "group-hover:opacity-100 group-hover:scale-y-100 group-hover:top-0 group-hover:bottom-[-.2rem]" // Hover underline for "Home"
                        : pathname.includes(item.path)
                          ? "opacity-100 scale-y-100 top-[0] bottom-[-.2rem]" // Active underline for other paths
                          : "group-hover:opacity-100 group-hover:scale-y-100 group-hover:top-0 group-hover:bottom-[-.2rem]" // Hover underline for other paths
                    }`}
                  />
                </Link>
              </li>
            ))}
            {stickyClass === "sticky" && (
              <button className="bg-transparent text-[1.2rem] font-extrabold border-2 border-secondary rounded-[25px] hover:text-secondary px-[.7rem] py-[.2em]">
                Subscribe
              </button>
            )}
          </ul>

          <div className="flex gap-6 items-center">
            <ThemeSwitch />
            <div
              onClick={toggleSearch}
              className="h-[50px] w-[50px] hover:bg-tertiaryAccent bg-tertiary rounded-full border-solid border-[#000] flex items-center justify-center group cursor-pointer"
            >
              {openSearch ? (
                <IconClose className="h-[20px] w-[20px] " />
              ) : (
                <IconSearch className="h-[20px] w-[20px] " />
              )}
            </div>
            <MobileMenu />
          </div>
          {openSearch && (
            <SearchBar windowWidth={windowWidth} openSearch={openSearch} setOpenSearch={setOpenSearch} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
