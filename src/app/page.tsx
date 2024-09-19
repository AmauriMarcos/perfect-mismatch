import Categories from "@/components/Categories/Categories";
import Hero from "@/components/Hero/Hero";
import Posts from "@/components/Posts/Posts";
import { getPosts, getCategories } from "./server/actions";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    
  });

  await queryClient.prefetchQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const test = await getPosts();

  console.log("***********", test)

  return (
    <div className="mt-5 md:mt-[50px] w-full px-[6%] md:px-[12%] 2xl:px-[14%] flex flex-col">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Hero />
        <Categories />
        <Posts />
      </HydrationBoundary>
    </div>
  );
}
