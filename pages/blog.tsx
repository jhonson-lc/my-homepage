import React from "react";
import { GetStaticProps } from "next";
import { getClient } from "lib/sanity-server";
import { indexQuery } from "lib/queries";
import { Text, HStack, Image, Input, Stack, Box } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { mdxToHtml } from "utils/readingMdx";
import Paragraph from "work/components/Paragraph";
import Layout from "app/layouts/Layout";

import { Post } from "../blog/types";
import BlogPage from "../blog/screens/BlogPage";

interface Props {
  posts: Post[];
}
const IndexBlog: React.FC<Props> = ({ posts }) => {
  const [searchValue, setSearchValue] = React.useState<string>("");

  const filteredPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <Layout
      description="I hope to help you with great articles about software industry, programming, tech, and my personal life."
      title="Blog - Jhon Lescano"
    >
      <Stack
        align="center"
        direction={{ base: "column", sm: "row" }}
        gap={6}
        justifyContent="space-between"
        w="full"
      >
        <Stack
          alignItems={{ base: "center", md: "start" }}
          maxW={{ base: "100%", md: "50%" }}
          order={{ base: "2", sm: "0" }}
          pos="relative"
          spacing={8}
        >
          <Paragraph>I hope to help you with great articles</Paragraph>
          <Stack w="full">
            <HStack bg="hover" maxW={500} p={4} rounded="40px" w="full">
              <Input
                fontSize={16}
                placeholder="Search posts"
                type="text"
                value={searchValue}
                variant="unstyled"
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <SearchIcon />
            </HStack>
            <Text color="paragraph" fontSize={12} fontWeight={300} pl={4}>
              There are {filteredPosts.length} posts in this blog
            </Text>
          </Stack>
        </Stack>
        <Box pr={{ base: 0, md: 100 }}>
          <Image h={400} src="/blog.svg" w="full" />
        </Box>
      </Stack>
      <BlogPage posts={filteredPosts} />
      {!filteredPosts.length && (
        <Text fontSize={20} textAlign={"center"} w="full">
          No posts found
        </Text>
      )}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const res: Post[] = await getClient(preview).fetch(indexQuery);
  const posts = await Promise.all(
    res.map(async (post) => {
      const { readingTime } = await mdxToHtml(post.content);
      return { ...post, readingTime };
    }),
  );
  return {
    props: {
      posts,
    },
  };
};

export default IndexBlog;
