import Image from "next/image";
import Hero from "@/components/Hero/Hero";
export default function Home() {
  return (
    <div className="h-100% w-full px-[6%] md:px-[12%] 2xl:px-[14%]  grow">
      <Hero/>
      <h1>SOME</h1>
      <p>Good stuff in here</p>
      <h3>Real Value</h3>
    </div>
  );
}
