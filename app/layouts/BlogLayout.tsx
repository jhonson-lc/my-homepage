import React from "react";
import formatDate from "utils/formatDate";
import { Text, Divider, Heading, Stack, Box } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { Post } from "blog/types";
import { urlForImage } from "lib/sanity";
import Button from "components/Button";

import Layout from "../../app/layouts/HeadLayout";
import Avatar from "../../ui/feedback/Avatar";

interface Props {
  post: Post;
}

const BlogLayout: React.FC<Props> = ({ post, children }) => {
  return (
    <Layout title={post.title} url={`blog/${post.slug}`}>
      <Stack spacing={8}>
        <Heading color="heading" fontSize={{ base: 24, md: 50 }}>
          {post.title}
        </Heading>
        <Stack
          alignItems={{ base: "flex-start", sm: "center" }}
          direction={{ base: "column", md: "row" }}
          gap={4}
          justifyContent="space-between"
        >
          <Stack direction="row">
            <Avatar height={33} rounded={true} width={33} />
            <Stack
              alignItems="center"
              direction="row"
              divider={
                <Divider borderColor="secondary" orientation="vertical" />
              }
            >
              <Text variant="information">By Jhon Lescano</Text>
              <Text variant="information">{formatDate(post.date)}</Text>
            </Stack>
          </Stack>
          <Text variant="information">{post?.readingTime}</Text>
        </Stack>
        <Box h="300px" position="relative" w="full">
          <Image
            layout="fill"
            loading="lazy"
            objectFit="cover"
            src={urlForImage(post.coverImage).url()}
          />
        </Box>
        {children}
        <Stack direction="row" justifyContent="end" w="100%">
          <Button
            href="/blog"
            icon={<ArrowForwardIcon transform="rotate(180deg)" />}
            text="Go back"
          />
        </Stack>
      </Stack>
    </Layout>
  );
};

export default BlogLayout;
