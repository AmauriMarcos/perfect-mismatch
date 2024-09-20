import React from "react";
import { getPostBySearch } from "@/app/server/actions";
import { BlogPost } from "@/lib/interface";
import Posts from "@/components/Posts/Posts";
import LottieAnimation from "@/components/LottieAnimation/noDataFoundAnimation";

export const revalidate = 0;

const SearchResults = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const posts: BlogPost[] = await getPostBySearch(slug);
  const postCount = posts.length;
  console.log(posts)
  return (
    <div className={`${postCount > 0 ? 'mt-[50px]' : 'mt-0'} w-full px-[6%] md:px-[12%] 2xl:px-[14%] flex flex-col mb-[3rem]`}>
      {postCount > 0 ? (
        <div>
          <p className="text-secondary font-thin text-2xl md:text-3xl">
            {`Results for: `}
            <span className="font-bold my-2">{slug}</span>
          </p>
          <Posts posts={posts} />
        </div>
      ) : (
        <div className=" w-full px-[6%] md:px-[12%] 2xl:px-[14%] flex flex-col items-center justify-center ">
          <LottieAnimation/>
          <p className="text-primary text-md md:text-2xl text-center">
            {`Hmm, we don’t have any `}
            <span className="font-bold my-2">{slug}</span>
            {` posts available at the moment. Feel free to browse our latest articles or suggest topics you'd like to see! `}
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
