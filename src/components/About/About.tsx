import React from "react";
import { Box } from "../Motion/Motion";

const About = () => {
  return (
    <div className="w-full m-auto my-[5rem] mb-[10rem]">
      <div className="w-[85%] md:w-[60%] m-auto">
        <h1 className="text-center text-[3rem] md:text-[5rem] font-extrabold leading-[1.1]">
            Hi there, and welcome!
        </h1>
        <p className="font-inter  text-lg md:text-2xl  text-slate-500 font-normal  my-[2rem]">
          Hi, I'm Marija! I'm living in Serbia with my wonderful
          family—my husband and our three energetic kids. I have a sweet tooth
          and love trying new desserts, singing, and spending time with friends
          and loved ones. Family means everything to me, and we enjoy creating
          special moments together. This space is where I share my passion for
          life, family, and all the little things that make every day special.
        </p>
      </div>

      {/* You can keep the Motion component for visual interaction */}
      <Box />
    </div>
  );
};

export default About;
