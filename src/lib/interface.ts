export interface Author {
    name: string;
    bio: BodyContent | null; 
    image: ImageAsset | null;
}
  
interface Slug {
    _type: string;
    current: string;
}

export interface Category {
    title: string; // Title of the category
    _type: string;
}

export interface ImageAsset {
    _type: string;
    asset: {
        _ref: string;
        _type: string;
    };
}
  
export interface BodyContent {
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
  