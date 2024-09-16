'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


const items = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'About', path: '/about' },
  { id: 3, name: 'Recipes', path: '/recipes' },
  { id: 4, name: 'Travels', path: '/travels' },
  { id: 5, name: 'Crafts', path: '/crafts' },
  { id: 6, name: 'Insights', path: '/insights' },
  { id: 7, name: 'Contact', path: '/contact' },
];



const MobileMenu = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
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
    let windowHeight = window.scrollY;
    windowHeight > 40 ? setStickyClass('sticky') : setStickyClass('relative'); // Pass a string
  }
};


  return (
    <div className="md:hidden z-50 ">
      <div
        className="flex flex-col gap-[4.5px] cursor-pointer"
        onClick={toggleMenu}
      >
        <div
          className={`w-6 h-1 bg-tertiaryAccent rounded-sm ${
            menuOpen ? "rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        />
        <div
          className={`w-6 h-1 bg-tertiaryAccent rounded-sm ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <div
          className={`w-6 h-1 bg-tertiaryAccent rounded-sm ${
            menuOpen ? "-rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        />
      </div>
        {/* ${stickyClass === 'sticky' && 'fixed'}`} */}
      {menuOpen && (
        <div className={`absolute ${stickyClass === 'sticky' ? 'top-[68px]' : 'top-[108px]'}  z-50 left-0 bg-secondary w-full h-[100vh] flex flex-col justify-between shadow-[0 0 10px rgba(0,0,0,0.5)]`}>
          {/* Menu items */}
          <div className="flex flex-col gap-2 items-center justify-center flex-grow">
            {items.map((item) => (
              <Link
                key={item.id}
                onClick={toggleMenu}
                href={item.path}
                className="font-inter font-extralight text-[1.6rem] uppercase block px-4 py-2 text-white hover:text-tertiaryAccent transition-colors"
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
