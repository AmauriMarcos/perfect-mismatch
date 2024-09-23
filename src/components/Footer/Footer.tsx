"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { IoIosSearch as SearchIcon } from "react-icons/io";
import { SlSocialInstagram as InstagramIcon } from "react-icons/sl";
import { MdCleaningServices as IconClean } from "react-icons/md";
import { FaHeart as HeartIcon } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  if (pathname.startsWith("/studio")) {
    return null;
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const executeSearch = () => {
    if (searchTerm.trim() !== "") {
      router.push(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeSearch();
      setSearchTerm("");
    }
  };

  const resetSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="w-full bg-footerBackground pb-10">
      <div className=" md:mt-[50px] w-full px-[6%] md:px-[12%] 2xl:px-[14%] pt-6 md:pt-0">
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <div className="flex gap-4 md:gap-8 justify-center  md:items-left ">
            <div className="flex flex-col gap-4">
              <Link
                href="/blog/recipes"
                className="text-white hover:text-teal-500 font-semibold"
              >
                Recipes
              </Link>
              <Link
                href="/blog/travels"
                className="text-white hover:text-teal-500 font-semibold"
              >
                Travels
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                href="/blog/crafts"
                className="text-white hover:text-teal-500 font-semibold"
              >
                Crafts
              </Link>
              <Link
                href="/blog/insights"
                className="text-white hover:text-teal-500 font-semibold"
              >
                Insights
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                href="/blog/about"
                className="text-white hover:text-teal-500 font-semibold"
              >
                About
              </Link>
              <Link
                href="/blog/contact"
                className="text-white hover:text-teal-500 font-semibold"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6 mt-6 md:mt-0">
            <div className="flex justify-between items-center bg-white rounded-full p-2 w-full max-w-[224px] md:max-w-[251px]">
              <div className="flex items-center w-full">
                <SearchIcon
                  className="min-w-5 min-h-5 text-gray-500 cursor-pointer"
                  onClick={executeSearch}
                />

                <input
                  type="text"
                  placeholder="Search..."
                  className="ml-2 outline-none bg-transparent text-gray-700 placeholder-gray-400 w-full"
                  value={searchTerm}
                  onChange={handleSearch}
                  onKeyDown={handleKeyDown}
                />
              </div>

              {searchTerm.length > 0 && (
                <IconClean
                  onClick={resetSearch}
                  className="fill-gray-600 hover:rotate-12 transition-all duration-350 ease-in-out cursor-pointer ml-2 shrink-0 min-h-[17px] min-w-[17px]"
                />
              )}
            </div>

            <button className="min-w-[224px] md:min-w-[251px] justify-center bg-[#FFA38A] hover:bg-teal-500 text-white font-semibold  py-2 px-6 md:px-4 rounded-full flex items-center ">
              <InstagramIcon className="w-5 h-5 text-white mr-2" />
              Follow on Instagram
            </button>
          </div>
        </div>
        <hr className="border-[#FFA38A] opacity-30 my-6 md:my-4" />
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#EFE2B4]">
          <div className="mb-2 md:mb-0">&copy; Perfect Mismatch 2024</div>
          <div className="flex items-center">
            Blog made with
            <HeartIcon className="w-4 h-4 text-red-500 mx-2" />
            <div className="text-[.85rem] md:text-[.825rem] mr-2">
              by
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 hover:text-[#6BD8CA]"
                href="https://amauri-santos.vercel.app/"
              >
                Amauri Santos
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
