"use client";
import React from "react";
import Image from "next/image";
import { getPostBySlug } from "../../server/actions";
import { useQuery } from "@tanstack/react-query";
import { ConfigResolutionError } from "sanity";
import { PortableText } from "next-sanity";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { urlFor } from "@/sanity/lib/image";
import { formatDateString } from "@/util/formateDateString";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["post", params.slug], // Include `slug` in the queryKey
    queryFn: () => getPostBySlug(params.slug),
  // Pass `slug` to `queryFn`
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  console.log("data--->", data);
  return (
    <div className="mt-[35px] md:mt-[5rem] w-full px-[6%] md:px-[12%] 2xl:px-[14%] flex flex-col">
      <div className="flex flex-col gap-2 m-auto items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className=" gap-2 flex items-end w-full justify-end">
          <p className="font-inter font-light text-[.8rem]">author</p>
          <p className="font-bold text-secondary font-inter text-[.8rem]">
            Amauri Santos
          </p>
        </div>
      </div>
      <div className="w-full prose-li:marker:text-tertiaryAccent  prose prose-lg m-auto dark:prose-invert prose-h2:underline prose-headings:font-montserrat prose-p:font-inter">
        <h1 className=" font-montserrat font-extrabold text-3xl sm:text-[3rem] text-center tracking-tight leading-tight">
          {data.title}
        </h1>

        <Image
          className="object-cover h-[300px]  m-auto rounded-md w-full"
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
          <p className="text-slate-950 font-normal text-[.75rem] my-2 text-end">
            {formatDateString(data._createdAt)}
          </p>
        </div>
        <PortableText value={data.body} />
      </div>
    </div>
  );
}
