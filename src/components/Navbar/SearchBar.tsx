'use client';
import React, { useEffect, useState, useRef  } from 'react';
import { IoIosSearch as IconSearch } from "react-icons/io";
import { MdCleaningServices as IconClean} from "react-icons/md";
import { useRouter } from 'next/navigation'

interface SearchBarProps {
    openSearch: boolean; // Correct type is 'boolean'
    setOpenSearch:  React.Dispatch<React.SetStateAction<boolean>>;
    windowWidth: number;
}

const SearchBar: React.FC<SearchBarProps> = ({ openSearch, setOpenSearch, windowWidth }) => {
  const [stickyClass, setStickyClass] = useState('relative');
  const router = useRouter()
  const [search, setSearch] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const stickNavbar = () => {
      if (window !== undefined) {
        const windowHeight = window.scrollY;
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
  
  const resetSearch = () => {
    setSearch('');
  }

  useEffect(() => {
    if (openSearch && inputRef.current) {
      inputRef.current.focus(); 
    }
  }, [openSearch]);

  const goToSearchResultsPage = (search: string) => {
    if(search.length >=1) {
      const formattedSearch = search.toLowerCase().replace(/\s+/g, '-');
      router.push(`/search/${formattedSearch}`);
      setOpenSearch(false);
    }

  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
        goToSearchResultsPage(search);
    }
};
  
  return (
    <div
      className={`absolute h-[81px] py-[15px] px-[30px] ${windowWidth > 767 ? 'top-[172px]' :  'top-[108px]'}  left-0 z-50 bg-[#FCE2C8] w-full flex flex-col justify-between`}
    >
      <div className='w-full flex justify-between items-center'>
        <form className='w-full flex items-center justify-between pr-[60px]'>
                <input 
                    ref={inputRef}
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                    onKeyDown={handleKeyDown}
                    placeholder='Search...' 
                    className='placeholder:text-[1.2rem] placeholder:text-[#313331] h-[50px]  placeholder:font-inter w-full bg-transparent border-none pl-[9.5px]  text-[1.2rem] focus-visible:outline-none' 
                    type='text'
                />
                {search.length > 0 && < IconClean onClick={resetSearch} className='fill-gray-600 hover:rotate-12 transition-all duration-[350ms] ease-in-out cursor-pointer h-[20px] w-[20px]'/>}
        </form>
        <button onClick={() => goToSearchResultsPage(search)} className='mr-6'><IconSearch className='h-[25px] w-[25px]'/></button>
      </div>
    </div>
  );
};

export default SearchBar;
