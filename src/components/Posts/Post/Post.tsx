// components/Posts/Post/Post.tsx
import React, { forwardRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BlogPost } from "@/lib/interface";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { formatDateString } from '../../../util/formateDateString';
import { PortableText } from "next-sanity";

interface PostProps extends BlogPost {
  // You can add additional props if needed
}

const Post = forwardRef<HTMLDivElement, PostProps>(({
  title,
  author,
  slug,
  mainImage,
  body,
  _createdAt,
  categories,
}: PostProps, ref) => {

  const categoryTitle = categories[0]?.title.toLowerCase();
  const combinedSlug = `${categoryTitle}/${slug.current}`;

  return (
    <div ref={ref} className="post h-full w-full bg-transparent rounded-sm flex gap-4 mb-10 flex-col md:flex-row">
      <div className="h-[232px] min-w-[310px]">
        <Image
          className="h-full w-full object-cover rounded-md"
          alt={title}
          height={500}
          width={500}
          src={urlFor(mainImage).url()}
        />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <div className="font-inter w-full flex items-start">
          <p className="font-normal text-[0.75rem]">
            {formatDateString(_createdAt)}
          </p>
        </div>
        <h2 className="font-montserrat uppercase font-extrabold text-[1.2rem] text-left">
          {title}
        </h2>

        <div className="flex items-center gap-2">
          <p className="font-inter font-light text-[0.8rem]">author</p>
          <p className="font-bold text-secondary dark:text-[#66a5ba] font-inter text-[0.8rem]">
            {author?.name === "" ? "Unknown" : author?.name}
          </p>
        </div>
        <div className="line-clamp-2 md:line-clamp-3">
          <PortableText value={body} />
        </div>
      
        <div className="w-full flex justify-start">
          <Button asChild variant="outline">
            <Link href={`/${combinedSlug}`}>Read more</Link>
          </Button>
        </div>
      </div>
    </div>
  );
});

Post.displayName = "Post"; // Necessary for forwardRef

export default Post;
