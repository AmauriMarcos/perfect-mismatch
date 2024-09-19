"use server";
import { create } from "domain";
import { client } from "../../sanity/lib/client";

export async function getPosts() {
  const query = `
        *[_type == "post"] | order(_createdAt desc) {
          author->{
            name,
            bio,
            image
          },
          title,
          slug,
          mainImage,
          body,
          _createdAt,
          categories[]->{
            title
          }
        }
            `;
/* *[_type == "post" && categories == categories._ref] */
  try {
    const data = await client.fetch(query,);
    return data;
  } catch (error) {
    return { error: error };
  }
}

export async function getCategories() {
  const query = `
       *[_type == "category"]{
            title
        }
    `;

  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    return { error: error };
  }
}

// Update to accept a parameter
export async function getPostBySlug(slug: string) {
  const query = `
          *[_type == "post" && slug.current == $slug][0] {
              author->{
                  name,
                  bio,
                  image
              },
              title,
              mainImage,
              body,
              _createdAt,

          }
      `;

  try {
    const data = await client.fetch(query, { slug });
    return data;
  } catch (error) {
    return { error: error };
  }
}


export async function getPostsByCategory(category: string) {
  console.log("Category:", category)
  const query =  `
  *[_type == "post" && references(*[_type == "category" && slug.current == "${category}"]._id)] | order(_createdAt desc) {
      author->{
        name,
        bio,
        image
      },
      title,
      slug,
      mainImage,
      body,
      _createdAt,
      categories[]->{
        title
      }
    }
  `
  const params = { category };

  try {
    const data = await client.fetch(query, params);
    return data; 
  } catch (error) {
    console.error("Error fetching posts by category:", error);
    return []; 
  }
}