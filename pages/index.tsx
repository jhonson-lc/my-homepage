import type { GetStaticProps, NextPage } from "next";
import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Skills from "components/Skills";
import { Post } from "blog/types";
import Button from "components/Button";
import ArrowMore from "components/ArrowMore";
import { getClient } from "lib/sanity-server";
import { indexQuery } from "lib/queries";
import works from "work/data/works";

import Section from "../components/Section";
import Layout from "../app/layouts/Layout";
import Avatar from "../ui/feedback/Avatar";
import ItemPost from "../blog/components/GridItemPost";
import ItemWork from "../work/components/GridItemWork";
import Paragraph from "../work/components/Paragraph";

interface Props {
  posts: Post[];
}

const IndexPage: NextPage<Props> = ({ posts }) => {
  return (
    <Layout>
      <Stack spacing={10}>
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
            <Text
              align={{ base: "center", md: "left" }}
              color="primary"
              fontSize={16}
              fontWeight={400}
            >
              Software Engineer | React | Next.js | Java | SQL{" "}
            </Text>
            <Paragraph>
              Learn and implement software to help the world be better through
              quality software.
            </Paragraph>
            <Stack
              alignItems={{ base: "center", md: "end" }}
              flexDirection={{ base: "column", md: "row" }}
              gap={6}
            >
              <Button href="/blog" text="Read the blog" />
              <Button
                bg="transparent"
                color="secondary"
                href="/auth/signin"
                text="Create an account"
              />
            </Stack>
          </Stack>
          <Box pr={{ base: 0, md: 12, lg: 100 }}>
            <Avatar />
          </Box>
        </Stack>
        <ArrowMore href="#projects" text="Read more about Jhon" />
        <Section hrefB="/work" labelB="VIEW ALL" title="Latest Projects">
          <div id="projects" />
          <SimpleGrid columns={[1, 2]} gridGap={16} w="100%">
            {works.slice(0, 2).map((work, i) => {
              return <ItemWork key={work.id} i={i} work={work} />;
            })}
          </SimpleGrid>
        </Section>
        <Section hrefB="/contact" labelB="SEND MESSAGE" title="Skills">
          <Skills />
        </Section>
        <Section
          hrefB="/blog"
          labelB="SEE THE FULL BLOG"
          subtitle="Join me to suggesting future blogs"
          title="Blog recomendations"
        >
          <SimpleGrid columns={[1, 2, 2]} gap={5} w="100%">
            {posts.slice(0, 2).map((post) => {
              return <ItemPost key={post.slug} post={post} />;
            })}
          </SimpleGrid>
        </Section>
      </Stack>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const posts: Post[] = await getClient(preview).fetch(indexQuery);

  return {
    props: {
      revalidate: 1,
      posts,
    },
  };
};

export default IndexPage;
