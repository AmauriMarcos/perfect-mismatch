'use client';
import React, { useState } from 'react';
import { IoIosSearch as IconSearch } from "react-icons/io";

const Subscribe = () =>{
  const [email, setEmail] = useState<string>('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Update the state with the current input value
    setEmail(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Trigger the search when the Enter key is pressed
    if (e.key === 'Enter') {
      console.log("Subscribing email:", email);
    }
  };

  return (
    <div className="px-[6%] md:px-[12%] 2xl:px-[14%]  flex flex-col items-center justify-center bg-tertiary py-[2.5rem] md:py-[4rem] md:mt-10  md:flex-row md:justify-between">
      <div className=" flex flex-col gap-4 text-center md:text-left">
        <span className=" text-lg  md:text-[31px] text-tertiaryAccent uppercase font-montserrat font-thin">Never miss a post!</span>
        <span className=" text-lg md:text-[31px] text-back text-[#313131] font-montserrat font-thin">Subscribe for updates.</span>
      </div>

      <div className="flex items-center mt-4 md:mt-0">
        <input
          type="email"
          placeholder="Email"
          className="placeholder:text-slate-300 h-[40px] md:h-[60px] w-[240px] md:w-[430px] px-4 border border-none rounded-l-md focus:outline-none font-inter text-[#313131]"
          value={email}
          onChange={handleEmailChange}
          onKeyDown={handleKeyDown}
        />

        <button
          className=" h-[40px] md:h-[60px] w-[44px] md:w-[64px] px-4 bg-tertiaryAccent text-white rounded-r-md hover:bg-[#ff7766] transition duration-300 flex items-center justify-center"
          onClick={() => console.log("Subscribing email:", email)}
        >
          <IconSearch  className="w-4 md:w-6  h-4 md:h-6 fill-current text-white" />
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
