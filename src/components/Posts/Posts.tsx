"use client";
import React from "react";
import Post from "./Post/Post";
import Image from "next/image";
import { BlogPost } from "@/lib/interface";

export const revalidate = 0;

interface PostsProps {
  posts: BlogPost[]; 
}

const Posts: React.FC<PostsProps> = ({ posts }) => {

  return (
    <div className="mt-5 md:mt-[50px] flex flex-col gap-4">
      <div className="w-full">
        <Image
          className="bg-repeat w-[5px] h-[5px]"
          src="/pat_bg.png"
          alt="separator-pattern"
          height={5}
          width={5}
        />
      </div>
      {posts?.map((post: BlogPost) => (
        <Post
          key={post.slug.current} 
          title={post.title}
          author={post.author}
          slug={post.slug}
          mainImage={post.mainImage}
          body={post.body}
          categories={post.categories}
          _createdAt={post._createdAt}
        />
      ))}
    </div>
  );
};

export default Posts;
