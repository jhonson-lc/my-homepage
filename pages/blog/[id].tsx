import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";

import BlogLayout from "../../app/layouts/BlogLayout";
import components from "../../blog/components/MDXComponents";

import type { Blog } from ".contentlayer/generated/types";
import { allBlogs } from ".contentlayer/generated";

interface Props {
  blog: Blog;
}

const SingleBlog: React.FC<Props> = ({ blog }) => {
  const ContentBlog = useMDXComponent(blog.body.code);

  return (
    <BlogLayout blog={blog}>
      <ContentBlog components={{ ...components } as any} />
    </BlogLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allBlogs.map((blog) => ({ params: { id: blog.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blog = allBlogs.find((blog) => blog.slug === params.id);

  return { props: { blog } };
};

export default SingleBlog;
