import React from "react";
import {GetStaticProps} from "next";

import BlogPage from "../blog/screens/BlogPage";
import {Blog} from "../blog/types";
import api from "../blog/resources";

interface Props {
  blogs: Blog[];
}
const IndexBlog: React.FC<Props> = ({blogs}) => {
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

export default IndexBlog;
