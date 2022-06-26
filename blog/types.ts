import { MDXRemoteSerializeResult } from "next-mdx-remote";

export type Post = {
  _id: string;
  slug: string;
  content: MDXRemoteSerializeResult;
  categories: Category[];
  author: Author;
  title: string;
  date: string;
  abstract: string;
  coverImage: string;
  readingTime: string;
};

export type Category = {
  _id: string;
  title: string;
};

export type Author = {
  _id: string;
  slug: string;
  name: string;
  image: string;
};
