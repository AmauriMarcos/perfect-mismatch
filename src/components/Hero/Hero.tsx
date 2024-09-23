
'use client';
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BlogPost, Author } from "@/lib/interface";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import { formatDateString } from "@/util/formateDateString";
import Link from "next/link";

interface HeroProps {
  latestPost: BlogPost; // Define the type of latestPost
}
const Hero: React.FC<HeroProps> = ({ latestPost }) => {
  const categoryTitle = latestPost.categories[0]?.title.toLowerCase();
  const combinedSlug = `${categoryTitle}/${latestPost.slug.current}`;

  const authorName = (latestPost.author as Author).name;
  return (
    <div className=" w-full flex justify-between ">
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8">
        <Image
          priority
          className="object-cover h-[260px] md:h-[360px] min-w-0 md:min-w-[500px] "
          height={360}
          width={500}
          src={urlFor(latestPost.mainImage).url()}
          alt="Malta"
        />
        <div className="flex flex-col gap-2 items-start">
          <div className="font-inter  w-full flex items-start ">
            <p className=" font-normal text-[.75rem]">
              {formatDateString(latestPost._createdAt)}
            </p>
          </div>
          <h2 className="font-montserrat uppercase font-extrabold text-[1.2rem] text-left md:text-[2.4rem]">
            {latestPost.title}
          </h2>
          <div className="flex items-center gap-2 ">
            <p className="font-inter font-light text-[.8rem]">author</p>
            <p className="font-bold text-secondary font-inter text-[.8rem]">
              {authorName}
            </p>
          </div>
          <div className="line-clamp-2 md:line-clamp-3">
            <PortableText value={latestPost.body} />
          </div>

          <div className="w-full flex justify-start">
          <Button asChild variant="default">
            <Link href={`/${combinedSlug}`}>Read more</Link>
          </Button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
