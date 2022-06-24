import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface Blog {
  id?: string;
  tags: string;
  name: string;
  createdAt: string;
  description: string;
}

export interface singleBlog {
  id: string;
  properties: {
    createdAt: any;
    slug: any;
    description: any;
    name: any;
    tags: any;
  };
}

export type Post = {
  _id: string;
  slug: string;
  content: MDXRemoteSerializeResult;
  title: string;
  date: string;
  abstract: string;
  coverImage: string;
  readingTime: string;
};
