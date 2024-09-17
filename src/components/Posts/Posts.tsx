import React from "react";
import Post from "./Post/Post";
import Image from "next/image";

const Posts = () => {
  return (
    <div className="mt-5 md:mt-[50px] flex flex-col gap-4">
        <div className="w-full">
        <Image className="bg-repeat w-[5px] h-[5px]" src='/pat_bg.png' alt='separator-pattern' height={5} width={5}/>
        </div>
       

      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
