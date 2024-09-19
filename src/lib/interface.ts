export interface Author {
    name: string;
    bio: Array<object>; // Adjust this if you have a specific shape for `bio`
    image: string | null;
}
  
interface Slug {
    _type: string;
    current: string;
}

interface Category {
    title: string; // Title of the category
    _type: string;
}

interface ImageAsset {
    _type: string;
    asset: {
        _ref: string;
        _type: string;
    };
}
  
interface BodyContent {
    _type: string;
    children: Array<object>; // Adjust this based on the actual shape of the `body` array elements
}
  
export interface BlogPost {
    title: string;
    slug: Slug;
    mainImage: ImageAsset;
    author: Author | null; // Author can be null
    body: Array<BodyContent>; // Body is an array of content blocks
    _createdAt: string;
    categories: Array<Category>; // Categories is an array, even if there’s only one category
}
  