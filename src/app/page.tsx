import Categories from "@/components/Categories/Categories";
import Hero from "@/components/Hero/Hero";
import Posts from "@/components/Posts/Posts";
import { getPosts} from "./server/actions";

export const revalidate = 0;

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="mt-5 md:mt-[50px] w-full px-[6%] md:px-[12%] 2xl:px-[14%] flex flex-col">
        <Hero />
        <Categories />
        <Posts posts={posts} />
    </div>
  );
}
