// components/Posts/Posts.tsx
"use client";
import React, { useState, useRef, useEffect } from "react";
import Post from "./Post/Post";
import Image from "next/image";
import { BlogPost } from "@/lib/interface";
import { Button } from "../ui/button";

export const revalidate = 0;

interface PostsProps {
  posts: BlogPost[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  const [visiblePosts, setVisiblePosts] = useState(3);
  const lastPostRef = useRef<HTMLDivElement | null>(null);
  const prevVisiblePostsRef = useRef<number>(visiblePosts);

  const loadMorePosts = () => {
    setVisiblePosts((prev) => prev + 3);
  };

  useEffect(() => {
    // Only scroll if visiblePosts increased
    if (visiblePosts > prevVisiblePostsRef.current) {
      if (lastPostRef.current) {
        lastPostRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
    prevVisiblePostsRef.current = visiblePosts;
  }, [visiblePosts]);

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
      {posts
        ?.slice(0, visiblePosts)
        .map((post: BlogPost, index: number) => {
          const isLastPost = index === visiblePosts - 1;
          return (
            <Post
              key={post.slug.current}
              title={post.title}
              author={post.author}
              slug={post.slug}
              mainImage={post.mainImage}
              body={post.body}
              categories={post.categories}
              _createdAt={post._createdAt}
              ref={isLastPost ? lastPostRef : null}
            />
          );
        })}
      {visiblePosts < posts.length && (
        <Button onClick={loadMorePosts} className="self-start m-auto mt-4 mb-[3rem]">
          Load More
        </Button>
      )}
    </div>
  );
};

export default Posts;
