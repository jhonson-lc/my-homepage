const postFields = `
  _id,
  title,
  coverImage,
  content,
  date,
  abstract,
  readingTime,
  "slug": slug.current,
`;

const categoryFields = `
  _id,
  title
`;

export const indexQuery = `
*[_type == "post"] | order(date desc, _updatedAt desc) {
  "author": author {
    _type == "reference" => @->,
    _type != "reference" => @
  },
  "categories": categories[]{
    _type == 'reference' => @->,
    _type != 'reference' => @
  },
  ${postFields}
}`;

export const postQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  }
}`;

export const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = `
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`;

export const categoryQuery = `
*[_type == "category"] | order(date desc, _updatedAt desc){
  ${categoryFields}
}`;

export const categoryQueryOfPosts = `
*[_type=="post"]{
  "category": *[_type=='category' &&  ] {
  	title,
	}
}`;
