import React from "react";
import {SimpleGrid} from "@chakra-ui/react";

import Layout from "../../app/layouts/HeadLayout";
import Section from "../../components/Section";
import {Blog} from "../../blog/types";
import ItemPost from "../components/GridItemPost";

interface Props {
  blogs: Blog[];
}

const BlogPage: React.FC<Props> = ({blogs}) => {
  return (
    <Layout title="Blog">
      <Section title="Posts">
        <SimpleGrid columns={1} gap={10} w="100%">
          {blogs &&
            blogs.map((blog: any) => {
              return <ItemPost key={blog.id} blog={blog} />;
            })}
        </SimpleGrid>
      </Section>
    </Layout>
  );
};

export default BlogPage;
