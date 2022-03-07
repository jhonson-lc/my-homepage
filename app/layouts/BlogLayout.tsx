import React from "react";
import formatDate from "utils/formatDate";
import {Text, Divider, Heading, Stack, Image} from "@chakra-ui/react";
import {ArrowForwardIcon} from "@chakra-ui/icons";

import Layout from "../../app/layouts/HeadLayout";
import Button from "../../ui/controls/Button/Button";
import Avatar from "../../ui/feedback/Avatar";

import {Blog} from ".contentlayer/generated/types";

interface Props {
  blog: Blog;
  banner: [string];
}

const BlogLayout: React.FC<Props> = ({blog, banner, children}) => {
  const urlBanner = banner.filter((url) => url && url);

  return (
    <Layout title="Blog">
      <Stack spacing={8}>
        <Heading color="heading" fontSize={50}>
          {blog.title}
        </Heading>
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
        <Image src={urlBanner[0]} />
        {children}
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

export default BlogLayout;
