import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button"


const Post = () => {
  return (
    <div className="h-full w-full bg-transparent rounded-sm flex  gap-4  mb-10 flex-col md:flex-row">
      <div className="h-[232px] min-w-[310px] ">
        <Image
          className="h-full w-full object-cover"
          alt="test"
          height={500}
          width={500}
          src="https://images.pexels.com/photos/3496763/pexels-photo-3496763.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <div className="font-inter  w-full flex items-start ">
          <p className="text-slate-950 font-normal text-[.75rem]">
            17 September 2024
          </p>
        </div>
        <h2 className="font-montserrat uppercase font-extrabold text-[1.2rem] text-left">
          Faster font loading with Font events
        </h2>

        <div className="flex items-center gap-2 ">
          <p className="font-inter font-light text-[.8rem]">author</p>
          <p className="font-bold text-secondary font-inter text-[.8rem]">
            Amauri Santos
          </p>
        </div>
        <p className="font-inter text-[.875rem] line-clamp-3">
          Cras venenatis quam ac nunc natoque hac maecenas. Non pretium molestie
          maecenas convallis ipsum faucibus venenatis quam. At aptent
          ullamcorper, ad aptent feugiat netus est scelerisque. Felis viverra
          class dignissim scelerisque imperdiet ligula ornare.
        </p>
        <div className="w-full flex justify-start">
            <Button  variant="outline">Read more</Button>
        </div>
        

      </div>
    </div>
  );
};

export default Post;
