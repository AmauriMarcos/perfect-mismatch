import Image from "next/image";
import React from "react";
Image;

const About = () => {
  return (
    <div className="w-full m-auto my-[3rem] md:my-[5rem] mb-[10rem]">
      <div className="w-[85%] md:w-[60%] m-auto flex flex-col-reverse md:flex-row ">
        <div className="mr-0 md:mr-10 ">
          <h2 className="text-[1.5rem] md:text-3xl font-normal font-montserrat text-center md:text-left my-6">
            {`Hi! It's great to see you here!`}
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
        <div className="shrink-0">
          <Image src="/MarijaAuthor.jpg" width={400} height={400} alt="" className="rounded-md" />
        </div>
      </div>

      {/* You can keep the Motion component for visual interaction */}
    </div>
  );
};

export default About;
