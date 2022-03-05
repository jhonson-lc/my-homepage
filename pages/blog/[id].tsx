import type {Blog} from ".contentlayer/generated/types";

import React from "react";
import {GetStaticProps, GetStaticPaths} from "next";
import {useMDXComponent} from "next-contentlayer/hooks";
import formatDate from "utils/formatDate";
import {Text, Divider, Heading, Stack} from "@chakra-ui/react";
import {ArrowForwardIcon} from "@chakra-ui/icons";

import Layout from "../../app/layouts/ArticleLayout";
import Button from "../../ui/controls/Button/Button";
import Avatar from "../../ui/feedback/Avatar";

import {allBlogs} from ".contentlayer/generated";

interface Props {
  blog: Blog;
}

const SingleBlog: React.FC<Props> = ({blog}) => {
  const Component = useMDXComponent(blog.body.code);

  return (
    <Layout title="Blog">
      <Stack spacing={8}>
        <Heading>{blog.title}</Heading>
        <Stack
          alignItems={{base: "flex-start", sm: "center"}}
          direction={{base: "column", md: "row"}}
          gap={4}
          justifyContent="space-between"
        >
          <Stack direction="row">
            <Avatar size={8} />
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
              <Text variant="information">Por Jhon Lescano</Text>
              <Text variant="information">{formatDate(blog.publishedAt)}</Text>
            </Stack>
          </Stack>
          <Text variant="information">
            {Math.round(blog.readingTime.minutes)} minutos de lectura
          </Text>
        </Stack>
        <Component />
        <Stack direction="row" justifyContent="end" w="100%">
          <Button
            href="/blog"
            label="Volver"
            leftIcon={<ArrowForwardIcon transform="rotate(180deg)" />}
            rightIcon=""
          />
        </Stack>
      </Stack>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allBlogs.map((blog) => ({params: {id: blog.slug}})),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const blog = allBlogs.find((blog) => blog.slug === params.id);

  return {props: {blog}};
};

export default SingleBlog;
