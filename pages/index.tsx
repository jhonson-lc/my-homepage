import type { GetStaticProps, NextPage } from "next";
import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Skills from "components/Skills";
import { Post } from "blog/types";
import Button from "components/Button";
import ArrowMore from "components/ArrowMore";
import { getClient } from "lib/sanity-server";
import { indexQuery } from "lib/queries";

import Section from "../components/Section";
import Layout from "../app/layouts/HeadLayout";
import Avatar from "../ui/feedback/Avatar";
import ItemPost from "../blog/components/GridItemPost";
import ItemWork from "../work/components/GridItemWork";
import Paragraph from "../work/components/Paragraph";

interface Props {
  posts: Post[];
}

const IndexPage: NextPage<Props> = ({ posts }) => {
  return (
    <Layout title="Home">
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
              alignItems="end"
              flexDirection={{ base: "column", md: "row" }}
              gap={6}
            >
              <Button href="/blog" text="Read the blog" />
              <Button
                bg="transparent"
                color="secondary"
                href="/work"
                text="View Projects"
              />
            </Stack>
          </Stack>
          <Box pr={{ base: 0, md: 100 }}>
            <Avatar />
          </Box>
        </Stack>
        <ArrowMore href="#projects" text="Read more about Jhon" />
        <Section hrefB="/work" labelB="VIEW ALL" title="Popular Projects">
          <SimpleGrid columns={[1, 2]} gap={10} justifyItems="center" w="100%">
            <ItemWork
              work={{
                id: "spaciart-ecuador",
                title: "Spaciart Ecuador",
                thumbnail: "/images/works/spaciartecuador.png",
                build: ["react", "chakra-ui", "framer-motion", "typescript"],
                siteurl: "https://muebles-spaciartecuador.com/",
              }}
            />
            <ItemWork
              work={{
                id: "my-portfolio",
                title: "My Portfolio",
                thumbnail: "/images/works/myportfolio.png",
                build: ["next.js", "chakra-ui", "framer-motion", "typescript"],
                siteurl: "https://mejhon.dev/",
              }}
            />
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
          <SimpleGrid columns={1} gap={5} w="100%">
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
