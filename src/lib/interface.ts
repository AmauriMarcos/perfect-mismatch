interface Author {
    name: string;
    bio: Array<object>; // Adjust this if you have a specific shape for `bio`
    image: string | null;
}
  
interface Slug {
    _type: string;
    current: string;
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
    author: Author | null; // `author` can be `null`, as shown in the data
    body: Array<BodyContent>; // The body is an array of objects
    _createdAt: string;
}
  