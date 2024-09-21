import Categories from "@/components/Categories/Categories";
import Hero from "@/components/Hero/Hero";
import Posts from "@/components/Posts/Posts";
import { getPosts} from "./server/actions";
import { BlogPost } from "@/lib/interface";


export const revalidate = 0;

export default async function Home() {
  const posts: BlogPost[] = await getPosts();

  const latestPost = posts.length > 0 ? posts[0] : null;
  const otherPosts = posts.slice(1);

  return (
    <div className="mt-5 md:mt-[50px] w-full px-[6%] md:px-[12%] 2xl:px-[14%] flex flex-col">
        {latestPost && <Hero latestPost={latestPost} />}
        <Categories />
        <Posts posts={otherPosts} />

    </div>
  );
}
