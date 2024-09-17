import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className=" w-full flex justify-between ">
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8">
        <Image
          className="object-cover h-[360px] min-w-[500px]"
          height={360}
          width={500}
          src="https://images.pexels.com/photos/3496763/pexels-photo-3496763.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Malta"
        />
        <div className="flex flex-col gap-2 items-center md:items-start">
          <div className="font-inter  w-full flex items-start ">
            <p className="text-slate-950 font-normal text-[.75rem]">
              Latest post
            </p>
          </div>
          <h2 className="font-extrabold text-[2.4rem]">
            Eating pizza in Italy
          </h2>
          <div className="flex items-center gap-2 ">
            <p className="font-inter font-light text-[.8rem]">author</p>
            <p className="font-bold text-secondary font-inter text-[.8rem]">
              Amauri Santos
            </p>
          </div>
          <p className="leading-6 font-inter text-center md:text-left ">
            Cras venenatis quam ac nunc natoque hac maecenas. Non pretium
            molestie maecenas convallis ipsum faucibus venenatis quam. At aptent
            ullamcorper, ad aptent feugiat netus est scelerisque. Felis viverra
            class dignissim scelerisque imperdiet ligula ornare.
          </p>

          <div className="w-full flex justify-start md:w-auto">
            <Button variant="tertiary">Read more</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
