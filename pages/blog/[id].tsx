import type {Blog} from ".contentlayer/generated/types";

import React from "react";
import {GetStaticProps, GetStaticPaths} from "next";
import {useMDXComponent} from "next-contentlayer/hooks";

import BlogLayout from "../../app/layouts/BlogLayout";
import components from "../../blog/components/MDXComponents";
import api from "../../blog/resources";

import {allBlogs} from ".contentlayer/generated";

interface Props {
  blog: Blog;
  banner: [string];
}

const SingleBlog: React.FC<Props> = ({blog, banner}) => {
  const ContentBlog = useMDXComponent(blog.body.code);

  return (
    <BlogLayout banner={banner} blog={blog}>
      <ContentBlog components={{...components} as any} />
    </BlogLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allBlogs.map((blog) => ({params: {id: blog.slug}})),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const blog = allBlogs.find((blog) => blog.slug === params.id);
  const ListOfBlogs = await api.list();
  const banner = ListOfBlogs.map(
    (blog) =>
      params.id === blog.properties.slug.rich_text[0].plain_text &&
      blog.properties.image.files[0].file.url,
  );

  return {props: {blog, banner}};
};

export default SingleBlog;
