import React from "react";
import BlogPage from "../blog/screens/BlogPage";
import { Blog } from "../blog/types";

import { GetStaticProps } from "next";
import api from "../blog/resources";

interface Props {
  blogs: Blog[];
}
const Blog: React.FC<Props> = ({ blogs }) => {
  return <BlogPage blogs={blogs} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await api.list();
  return {
    props: {
      revalidate: 1,
      blogs: blogs,
    },
  };
};

export default Blog;
