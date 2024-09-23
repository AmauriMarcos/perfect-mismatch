"use client";
import React from "react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { Button } from "../ui/button";
import { ImageAsset, BodyContent } from "@/lib/interface";
import { PortableText } from "next-sanity";
import { MdOutlineMailOutline } from "react-icons/md";

interface AuthorProps {
  authorName: string;
  authorImage: ImageAsset | null;
  authorBio: BodyContent[] | null; // Make sure this is an array of BodyContent or null
}

export function Author({ authorName, authorImage, authorBio }: AuthorProps) {
  const imageUrl = authorImage
    ? urlFor(authorImage).url()
    : "https://via.placeholder.com/100";

  return (
    <div className="w-full h-auto border-t border-solid border-[#d1d1d1] dark:border-[#3f3f3f] my-10 py-6">
      <div className="w-full flex flex-col gap-4 md:gap-0">
        <div className=" flex justify-between w-full items-end">
          <div className="w-[76px] h-[76px] rounded-full">
            <Image
              src={imageUrl}
              alt="avatar"
              width={100}
              height={100}
              className="object-cover w-full h-full rounded-full"
            />
          </div>

          <div className="flex items-center gap-4 ">
            <Button size="sm">Follow</Button>
            <Button size="icon" className="rounded-full">
              <MdOutlineMailOutline className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex justify-between w-full items-start">
          <div className="flex flex-col gap-2">
            <h3 className="mt-4 font-bold text-lg md:text-2xl font-inter">
              Written by {authorName}
            </h3>
            {authorBio && authorBio.length > 0 ? (
              <div className="prose-p:text-[.875rem] prose-p:max-w-[100%] prose-p:md:max-w-[70%]">
                <PortableText value={authorBio} />
              </div>
            ) : (
              <p>No bio available for this author.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Author;
