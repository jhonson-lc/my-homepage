import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { getClient } from "lib/sanity-server";
import { postQuery } from "lib/queries";

import BlogLayout from "../../app/layouts/BlogLayout";
import components from "../../blog/components/MDXComponents";

interface Props {
  blog: any;
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
  const allBlogs = [];
  return {
    paths: allBlogs.map((blog) => ({ params: { id: blog.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const allBlogs = [];
  const blog = allBlogs.find((blog) => blog.slug === params.id);
  const res = await getClient(preview).fetch(postQuery, {
    slug: params.id,
  });
  console.log(res);
  return { props: { blog } };
};

export default SingleBlog;
