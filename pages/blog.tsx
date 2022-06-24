import React from "react";
import { GetStaticProps } from "next";
import { getClient } from "lib/sanity-server";
import { indexQuery } from "lib/queries";

import BlogPage from "../blog/screens/BlogPage";
import { Post } from "../blog/types";

interface Props {
  posts: Post[];
}
const IndexBlog: React.FC<Props> = ({ posts }) => {
  return <BlogPage posts={posts} />;
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const posts: Post[] = await getClient(preview).fetch(indexQuery);

  return {
    props: {
      revalidate: 1,
      posts,
    },
  };
};

export default IndexBlog;
