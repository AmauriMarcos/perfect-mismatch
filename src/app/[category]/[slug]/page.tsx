
import React from "react";
import Image from "next/image";
import { getPostBySlug } from "../../server/actions";
import { PortableText } from "next-sanity";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { urlFor } from "@/sanity/lib/image";
import { formatDateString } from "@/util/formateDateString";
import { Author as AuthorInterface } from "@/lib/interface";
import Author  from "@/components/Author/Author";


export const revalidate = 0;

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const data = await getPostBySlug(params.slug);
  const authorName = (data.author as AuthorInterface).name;
  const authorBio = Array.isArray(data.author?.bio)
  ? data.author.bio
  : data.author?.bio
  ? [data.author.bio] // If it's a single object, wrap it in an array
  : null;
  const authorImage = (data.author as AuthorInterface).image || null;


  console.log(authorBio)
  return (
    <div className="mt-[35px] md:mt-[5rem] w-full px-[6%] md:px-[12%] 2xl:px-[14%] flex flex-col pb-[15%] md:pb-[7%]">
      <div className="flex flex-col gap-2 m-auto items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className=" gap-2 flex items-end w-full justify-end">
          <p className="font-inter font-light text-[.8rem]">author</p>
          <p className="font-bold text-secondary font-inter text-[.8rem]">
            {authorName}
          </p>
        </div>
      </div>
      <div className="w-full prose-h2:text-2xl prose-h2:md:text-[30px] prose-li:marker:text-tertiaryAccent  prose prose-lg m-auto dark:prose-invert  prose-headings:font-montserrat prose-p:font-inter">
        <h1 className=" font-montserrat font-extrabold mt-[1.5rem] sm:mt-[0] text-3xl sm:text-[3rem] text-center tracking-tight leading-tight">
          {data.title}
        </h1>

        <Image
          className="object-cover h-[300px] m-auto rounded-md w-full"
          height={500}
          width={500}
          src={urlFor(data.mainImage).url()}
          alt="Malta"
          quality={100}
        />
        <div className="font-inter flex justify-start gap-2">
          <span className="font-inter font-light text-[.8rem] my-2 text-end italic">
            Published on
          </span>
          <p className=" font-normal text-[.75rem] my-2 text-end">
            {formatDateString(data._createdAt)}
          </p>
        </div>
        <PortableText value={data.body} />
        
      </div>
      <div className="max-w-[73ch] m-auto w-full">
        <Author authorName={authorName} authorImage={authorImage} authorBio={authorBio}/>
      </div>
      
    </div>
  );
}
