"use client";
import React from "react";
import { useRouter } from 'next/navigation'

const Categories = () => {
  const router = useRouter()
  const categories = [
    {
      id: 1,
      color: "#1B9A91",
      path: "/crafts",
      title: `Inspire your family's artistic side.`,
      type: "crafts",
      url: "https://images.unsplash.com/photo-1616706161242-f1d591350d1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1267&q=80",
    },
    {
      id: 2,
      color: "#FDBB52",
      path: "/recipes",
      title: "Cook up a Storm with Recipes.",
      type: "recipes",
      url: "https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1192&q=80",
    },
    {
      id: 3,
      color: "#F7AC97",
      path: "/insights",
      title: "Unleash Your Inner Insight Seeker.",
      type: "insights",
      url: "https://images.unsplash.com/photo-1613292252537-be6ada176e0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHdvbWFuJTIwb2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      color: "#313331",
      path: "/travels",
      title: `We Haven't Been Everywhere, Let's Go!`,
      type: "travel",
      url: "https://images.unsplash.com/photo-1612278675615-7b093b07772d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    },
  ];

 
  return (
    <div className="categories flex flex-col mt-10 items-center py-2 ">
      <h2 className="text-2xl font-normal mb-8 uppercase tracking-wide text-center sm:text-xl">
        Categories, Because Parenting is Hard.
      </h2>
      <div className=" flex flex-col sm:flex-row justify-between items-center gap-4 w-full ">
        {React.Children.toArray(
          categories?.map((category) => {
            return (
              <div onClick={() => router.push(`/blog/${category.path}`)} className="relative w-full min-h-[265px] flex justify-center items-center cursor-pointer overflow-hidden p-8 z-5 group">
                <div
                  style={{ backgroundImage: `url(${category.url})` }}
                  className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-80 transition-transform duration-700 ease-in-out group-hover:scale-110"
                ></div>
                <div
                  className="absolute inset-0 w-full h-full opacity-80"
                  style={{ backgroundColor: category.color }}
                ></div>
                <h3 className="relative z-1 text-xl font-bold text-white uppercase text-center transition-transform duration-700 ease-in-out group-hover:scale-110">
                  {category.title}
                </h3>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Categories;
