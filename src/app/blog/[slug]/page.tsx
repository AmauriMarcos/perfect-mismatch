import React from "react";
import { BlogPost } from "@/lib/interface";
import { getPostsByCategory } from "@/app/server/actions";
import Posts from "@/components/Posts/Posts";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Image from "next/image";

export const revalidate = 0;

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
            <p className="font-montserrat text-primary  text-lg md:text-2xl">
              {`We found `}
              <span className="font-bold my-2 font-montserrat">{postCount}</span>
              <span className="ml-2">{postCount === 1 ? "post" : "posts"}</span>
              {` related to ${slug}`}
            </p>
            <Posts posts={posts} />
          </div>
        );
      } else {
        content = (
          <div className="mt-5 md:mt-[40px] w-full px-[6%] md:px-[12%] 2xl:px-[14%] flex flex-col items-center justify-center mb-[3rem]">
            <Image className="block dark:hidden max-w-[230px] max-h-[230px] md:max-w-[300px] md:max-h-[300px] " src="/noDataFound3.svg" width={300} height={300} alt='no data found'/>
            <Image className="hidden dark:block max-w-[230px] max-h-[230px] md:max-w-[300px] md:max-h-[300px]" src="/noDataNewDark.svg" width={300} height={300} alt='no data found'/>
            <p className="text-[#3B3B3B] dark:text-[#f2f2f2] text-sm md:text-lg text-center w-full md:w-[400px]">
              {`Hmm, we don’t have any `}
              <span className="font-bold my-2 text-[#ff7766] dark:text-[#D39646]">{slug}</span>
              {` posts available at the moment. Feel free to browse our latest articles or suggest topics you'd like to see! `}
            </p>
          </div>
        );
      }
      break;
    case "about":
      content = <About/>
      break;
    case "contact":
      content = <Contact/>
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
