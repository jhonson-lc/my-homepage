import React from "react";
import {GetStaticProps, GetStaticPaths} from "next";

import {allBlogs} from ".contentlayer/generated";
import type {Blog} from ".contentlayer/generated/types";
import {useMDXComponent} from "next-contentlayer/hooks";

import Avatar from "../../ui/feedback/Avatar";
import Button from "../../ui/controls/Button/Button";
import Layout from "../../app/layouts/ArticleLayout";

import formatDate from "utils/formatDate";

import {Text, Divider, Heading, Stack} from "@chakra-ui/react";
import {ArrowForwardIcon} from "@chakra-ui/icons";

interface Props {
  blog: Blog;
}

const Blog: React.FC<Props> = ({blog}) => {
  const Component = useMDXComponent(blog.body.code);

  return (
    <Layout title="Blog">
      <Stack spacing={8}>
        <Heading>{blog.title}</Heading>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Stack direction="row">
            <Avatar size={8} />
            <Stack
              alignItems="center"
              divider={
                <Divider orientation="vertical" border={0.5} borderColor="secondary" h={5} />
              }
              direction="row"
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
        <Stack direction="row" w="100%" justifyContent="end">
          <Button
            label="Volver"
            href="/blog"
            rightIcon=""
            leftIcon={<ArrowForwardIcon transform="rotate(180deg)" />}
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

export default Blog;
