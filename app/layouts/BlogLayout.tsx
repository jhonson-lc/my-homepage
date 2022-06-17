import React from "react";
import formatDate from "utils/formatDate";
import { Text, Divider, Heading, Stack, Box } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Image from "next/image";

import Layout from "../../app/layouts/HeadLayout";
import Button from "../../ui/controls/Button/Button";
import Avatar from "../../ui/feedback/Avatar";

import { Blog } from ".contentlayer/generated/types";

interface Props {
  blog: Blog;
}

const BlogLayout: React.FC<Props> = ({ blog, children }) => {
  return (
    <Layout title={blog.title} url={`blog/${blog.slug}`}>
      <Stack spacing={8}>
        <Heading color="heading" fontSize={50}>
          {blog.title}
        </Heading>
        <Stack
          alignItems={{ base: "flex-start", sm: "center" }}
          direction={{ base: "column", md: "row" }}
          gap={4}
          justifyContent="space-between"
        >
          <Stack direction="row">
            <Avatar height={33} width={33} />
            <Stack
              alignItems="center"
              direction="row"
              divider={
                <Divider borderColor="secondary" orientation="vertical" />
              }
            >
              <Text variant="information">By Jhon Lescano</Text>
              <Text variant="information">{formatDate(blog.publishedAt)}</Text>
            </Stack>
          </Stack>
          <Text variant="information">{blog.readingTime.text}</Text>
        </Stack>
        <Box h="300px" position="relative" w="full">
          <Image
            layout="fill"
            loading="lazy"
            objectFit="cover"
            src={`/images/blogs/${blog.image}`}
          />
        </Box>
        {children}
        <Stack direction="row" justifyContent="end" w="100%">
          <Button
            href="/blog"
            label="Go back"
            leftIcon={<ArrowForwardIcon transform="rotate(180deg)" />}
            rightIcon=""
          />
        </Stack>
      </Stack>
    </Layout>
  );
};

export default BlogLayout;
