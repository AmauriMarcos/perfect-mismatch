'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";

interface SearchBarProps {
  menuOpen: boolean; // Correct type is 'boolean'
  setMenuOpen:  React.Dispatch<React.SetStateAction<boolean>>;

}

const items = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'About', path: '/blog/about' },
  { id: 3, name: 'Recipes', path: '/blog/recipes' },
  { id: 4, name: 'Travels', path: '/blog/travels' },
  { id: 5, name: 'Crafts', path: '/blog/crafts' },
  { id: 6, name: 'Insights', path: '/blog/insights' },
  { id: 7, name: 'Contact', path: '/blog/contact' },
];

const MobileMenu: React.FC<SearchBarProps> = ({ menuOpen, setMenuOpen }) => {
  
  const [stickyClass, setStickyClass] = useState('relative');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  useEffect(() => {
    if (menuOpen) {
      // Disable scrolling on the background
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling when menu is closed
      document.body.style.overflow = "";
    }

    return () => {
      // Cleanup to ensure scrolling is re-enabled on component unmount
      document.body.style.overflow = "";
    };
  }, [menuOpen]);


  useEffect(() => {
  window.addEventListener('scroll', stickNavbar);

  return () => {
    window.removeEventListener('scroll', stickNavbar);
  };
}, []);

const stickNavbar = () => {
  if (window !== undefined) {
    const windowHeight = window.scrollY;
    windowHeight > 40 && setStickyClass('relative'); // Pass a string
  }
};


  return (
    <div className="md:hidden z-50 ">
      <div
        className="flex flex-col gap-[4.5px] cursor-pointer"
        onClick={toggleMenu}
      >
        <div
          className={`w-6 h-[0.25rem] bg-tertiaryAccent dark:bg-[#D39646] rounded-sm ${
            menuOpen ? "rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        />
        <div
          className={`w-6 h-[0.25rem] bg-tertiaryAccent dark:bg-[#D39646] rounded-sm ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <div
          className={`w-6 h-[0.25rem] bg-tertiaryAccent dark:bg-[#D39646] rounded-sm ${
            menuOpen ? "-rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        />
      </div>
        {/* ${stickyClass === 'sticky' && 'fixed'}`} */}
      {menuOpen && (
        <div className={`  absolute ${stickyClass === 'sticky' ? 'top-[68px]' : 'top-[94px]'}  z-[9999] left-0 bg-[#dda290] dark:bg-[#212121] w-full h-[100vh] flex flex-col justify-between shadow-[0 0 10px rgba(0,0,0,0.5)]`}>
          {/* Menu items */}
          <div className="flex h-[86%] flex-col gap-2 items-center justify-center ">
            {items.map((item) => (
              <Link
                key={item.id}
                onClick={toggleMenu}
                href={item.path}
                className="translate-y-[-2rem] font-inter font-extralight text-[1.6rem] uppercase block px-4 py-2 text-white hover:text-tertiaryAccent transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
