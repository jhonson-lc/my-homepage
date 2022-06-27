import { MDXRemoteSerializeResult } from "next-mdx-remote";

export type Post = {
  _id: string;
  slug: string;
  content: MDXRemoteSerializeResult;
  categories: Category[];
  comments: Comments[];
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

export type Comments = {
  approved: boolean;
  comment: string;
  email: string;
  name: string;
  post: {
    _ref: string;
    _type: string;
  };
  _createdAt: string;
  _updatedAt: string;
  _id: string;
  _type: string;
  _rev: string;
};
