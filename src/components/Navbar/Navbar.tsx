"use client";

import React, { useState } from "react";
import { IoIosSearch as IconSearch } from "react-icons/io";
import ThemeSwitch from "../ThemeSwitcher";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);
  const pathname = usePathname();

  const items = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'Recipes', path: '/recipes' },
    { id: 4, name: 'Travels', path: '/travels' },
    { id: 5, name: 'Crafts', path: '/crafts' },
    { id: 6, name: 'Insights', path: '/insights' },
    { id: 7, name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="w-full flex flex-col h-[100%]">
      <div className="hidden md:flex w-full items-center justify-center py-6 gap-2 h-[30px] bg-tertiary group">
        <IconSearch className="h-4 w-4 md:h-6 md:w-6 fill-[#313331] cursor-pointer group-hover:fill-secondary" />
        <p className="font-montserrat text-[.625rem] md:text-[.75rem] uppercase tracking-wider font-semibold text-[#313331] cursor-pointer group-hover:text-secondary">
          Explore the latest updates, visit our latest posts now!
        </p>
      </div>

      <div className="w-full px-[6%] h-[56px] bg-background flex justify-between items-center">
        <div>
          <h3>Logo</h3>
        </div>
        <ul className="hidden md:flex relative gap-6 grow m-auto justify-center transition-all duration-[350ms] ease-in-out">
          {items.map((item) => (
            <li key={item.id} className="relative">
            <Link
              href={item.path}
              className={`relative block transition-all duration-[350ms] ease-in-out ${
                item.path === pathname
                  ? "text-foreground"
                  : "hover:text-foreground"
              }`}
            >
              {item.name}
              <span
                className={`absolute inset-0 top-[.2rem] bottom-[-.2rem] left-0 right-0 border-t-[3px] border-b-[3px] border-[#FFB4A0] transition-all duration-[350ms] ease-in-out opacity-0 ${
                  item.path === pathname ? "opacity-100 top-[0] bottom-[-.2rem]" : ""
                } hover:opacity-100 hover:top-[0] hover:bottom-[-.2rem]`}
              ></span>
            </Link>
          </li>
          
          ))}
        </ul>
        <div>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
