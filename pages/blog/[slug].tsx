import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { getClient, sanityClient } from "lib/sanity-server";
import { postQuery, postSlugsQuery } from "lib/queries";
import { Post } from "blog/types";
import { mdxToHtml } from "utils/readingMdx";
import components from "blog/components/MDXComponents";
import { MDXRemote } from "next-mdx-remote";
import { Container } from "@chakra-ui/react";
import { serialize } from "next-mdx-remote/serialize";

import BlogLayout from "../../app/layouts/BlogLayout";

interface Props {
  post: Post;
  source: any;
}

const SingleBlog: React.FC<Props> = ({ post, source }) => {
  return (
    <BlogLayout post={post}>
      <Container maxW="container.xl">
        <MDXRemote
          {...source}
          components={
            {
              ...components,
            } as any
          }
        />
      </Container>
    </BlogLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(postSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const { post } = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  });
  if (!post) {
    return { notFound: true };
  }
  const p = await serialize(post.content);
  const { readingTime } = await mdxToHtml(post.content);
  return {
    props: {
      post: {
        ...post,
        readingTime,
      },
      source: p,
    },
  };
};

export default SingleBlog;
