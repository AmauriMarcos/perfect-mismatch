import React from "react";
import { getPostBySearch } from "@/app/server/actions";
import { BlogPost } from "@/lib/interface";
import Posts from "@/components/Posts/Posts";
import Image from "next/image";

export const revalidate = 0;

const SearchResults = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const posts: BlogPost[] = await getPostBySearch(slug);
  const postCount = posts.length;

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
        <div className="mt-5 md:mt-[40px] w-full px-[6%] md:px-[12%] 2xl:px-[14%] flex flex-col items-center justify-center mb-[3rem]">
        <Image className="block dark:hidden max-w-[230px] max-h-[230px] md:max-w-[300px] md:max-h-[300px] " src="/noDataFound3.svg" width={300} height={300} alt='no data found'/>
        <Image className="hidden dark:block max-w-[230px] max-h-[230px] md:max-w-[300px] md:max-h-[300px]" src="/noDataNewDark.svg" width={300} height={300} alt='no data found'/>
        <p className="text-[#3B3B3B] dark:text-[#f2f2f2] text-sm md:text-lg text-center w-full md:w-[400px]">
          {`Hmm, we don’t have any `}
          <span className="font-bold my-2 text-[#ff7766] dark:text-[#D39646]">{slug}</span>
          {` posts available at the moment. Feel free to browse our latest articles or suggest topics you'd like to see! `}
        </p>
      </div>
      )}
    </div>
  );
};

export default SearchResults;
