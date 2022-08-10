import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { Post } from "blog/types";

import Section from "../../components/Section";
import ItemPost from "../components/GridItemPost";

interface Props {
  posts: Post[];
}

const BlogPage: React.FC<Props> = ({ posts }) => {
  return (
    <Section title="All posts">
      <SimpleGrid columns={[1, 2, 2]} gap={10} w="100%">
        {posts &&
          posts.map((post: Post) => {
            return <ItemPost key={post.slug} post={post} />;
          })}
      </SimpleGrid>
    </Section>
  );
};

export default BlogPage;
