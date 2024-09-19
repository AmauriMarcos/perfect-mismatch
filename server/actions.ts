"use server";
import { client } from "../src/sanity/lib/client";

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

  try {
    const data = await client.fetch(query);
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
  