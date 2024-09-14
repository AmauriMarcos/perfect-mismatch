import React from "react";

const Navbar = () => {
  return (
    <div className="w-full  flex flex-col h-[100%]">
      <div className="w-full flex items-center justify-center py-6 gap-2 h-[30px] bg-primary ">
        <span>Icon</span>
        <p className="font-montserrat text-[.9rem] font-semibold">
          Explore the newst updates, visit our latest posts now!
        </p>
      </div>
      <div className="w-full px-[6%] h-[56px] bg-background flex justify-between items-center ">
        <div>
          <h3>Logo</h3>
        </div>
        <ul className="flex gap-6  grow m-auto justify-center">
          <li>Home</li>
          <li>About</li>
          <li>Stuuff</li>
          <li>News</li>
          <li>Sure</li>
        </ul>
        <div>
          <button>Get started</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
