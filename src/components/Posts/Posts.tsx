"use client";
import React from "react";
import Post from "./Post/Post";
import Image from "next/image";
import { getPosts } from "../../app/server/actions";
import { useQuery } from "@tanstack/react-query";
import { BlogPost } from "@/lib/interface";

export const revalidate = 0;

const Posts = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isLoading) <div><p>Loading...</p></div>;
  if (error) <div><p>Something went wrong</p></div>;

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
      {data?.map((post: BlogPost) => (
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
