import React from "react";
import { BlogPost } from "@/lib/interface";
import { getPostsByCategory } from "@/app/server/actions";
import Posts from "@/components/Posts/Posts";
import Image from "next/image";

export const revalidate = 0;

interface PostsProps {
  posts: BlogPost[];
}

const DynamicPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const posts: BlogPost[] = await getPostsByCategory(slug);
  let content;
  const postCount = posts.length;

  switch (slug) {
    case "recipes":
    case "travels":
    case "insights":
    case "crafts":
      if (postCount > 0) {
        content = (
          <div className="mt-5 md:mt-[50px] w-full px-[6%] md:px-[12%] 2xl:px-[14%] flex flex-col">
            <p className="text-secondary font-thin text-2xl md:text-3xl">
              {`We found `}
              <span className="font-bold my-2">{postCount}</span>
              <span  className="ml-2">{postCount === 1 ? 'post' : 'posts'}</span>
              {` related to ${slug}`}
            </p>
            <Posts posts={posts} />
          </div>
        );
      } else {
        content = (
          <div className="mt-5 md:mt-[50px] w-full px-[6%] md:px-[12%] 2xl:px-[14%] flex flex-col items-center justify-center gap-6">
            <Image className="" src='/question.png' height={100} width={100} alt="no data"/>
    
            <p className="text-secondary font-thin text-2xl md:text-3xl text-center">
              {`Hmm, we don’t have any `}
              <span className="font-bold my-2">'{slug}'</span>
              {`posts available at the moment. Feel free to browse our latest articles or suggest topics you'd like to see! `}
            </p>
          </div>
        );
      }
      break;
    case "about":
      content = "ABOUT";
      break;
    case "contact":
      content = "CONTACT";
      break;
    case "subscribe":
      content = "SUBSCRIBE";
      break;
    default:
      content = "PAGE NOT FOUND";
  }

  return <div>{content}</div>;
};

export default DynamicPage;
