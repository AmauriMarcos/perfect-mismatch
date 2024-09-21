import React from "react";
import { Box } from "../Motion/Motion";

const About = () => {
  return (
    <div className="w-full m-auto my-[5rem] mb-[10rem]">
      <div className="w-[85%] md:w-[60%] m-auto">
        <h2 className="text-[1.5rem] md:text-3xl font-normal font-montserrat text-center my-6">
            Hi there, and welcome!
        </h2>
        <p className="font-inter text-md md:text-lg text-primary font-normal  my-[2rem]">
          {`Hi, I'm Marija! I'm living in Serbia with my wonderful
          family—my husband and our three energetic kids. I have a sweet tooth
          and love trying new desserts, singing, and spending time with friends
          and loved ones. Family means everything to me, and we enjoy creating
          special moments together. This space is where I share my passion for
          life, family, and all the little things that make every day special.`}
        </p>
      </div>

      {/* You can keep the Motion component for visual interaction */}
     
    </div>
  );
};

export default About;
