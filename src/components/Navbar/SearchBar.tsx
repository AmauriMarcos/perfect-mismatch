import React, { useEffect, useState } from 'react';
import { Interface } from 'readline';

interface SearchBarProps {
    openSearch: boolean; // Correct type is 'boolean'
    windowWidth: number
}

const SearchBar: React.FC<SearchBarProps> = ({ openSearch, windowWidth }) => {
  const [stickyClass, setStickyClass] = useState('relative');

  useEffect(() => {
    const stickNavbar = () => {
      if (window !== undefined) {
        let windowHeight = window.scrollY;
        windowHeight > 40 ? setStickyClass('sticky') : setStickyClass('relative');
      }
    };

    window.addEventListener('scroll', stickNavbar);

    // Run stickNavbar on mount to check the initial scroll position
    stickNavbar();

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, [openSearch]);
/* ${windowWidth > 767 ? (stickyClass === 'sticky' ? 'top-[90px]' : 'top-[172px]') : 'h-[70px]'} */
  return (
    <div
      className={`absolute h-[81px] py-[15px] px-[6px] ${windowWidth > 767 ? (stickyClass === 'sticky' ? 'top-[90px]' : 'top-[172px]') : (stickyClass === 'sticky' ? 'top-[70px]' : 'top-[108px]')}  left-0 z-50 bg-[#FCE2C8] w-full flex flex-col justify-between`}
    >
      {/* SearchBar content */}
    </div>
  );
};

export default SearchBar;
