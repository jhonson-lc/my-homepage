import React from "react";
import formatDate from "utils/formatDate";
import { Text, Divider, Heading, Stack, Box } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Image from "next/image";
import es from "date-fns/locale/es";
import { useRouter } from "next/router";

import Layout from "../../app/layouts/HeadLayout";
import Button from "../../ui/controls/Button/Button";
import Avatar from "../../ui/feedback/Avatar";

import { Blog } from ".contentlayer/generated/types";

interface Props {
  blog: Blog;
}

const BlogLayout: React.FC<Props> = ({ blog, children }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "es" ? es : null;
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
            <Avatar size={33} />
            <Stack
              alignItems="center"
              direction="row"
              divider={
                <Divider
                  border={0.5}
                  borderColor="secondary"
                  h={5}
                  orientation="vertical"
                />
              }
            >
              <Text variant="information">By Jhon Lescano</Text>
              <Text variant="information">
                {formatDate(blog.publishedAt, t)}
              </Text>
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
