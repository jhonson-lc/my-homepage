import type { NextPage } from "next";
import { SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Skills from "components/Skills";

import Section from "../components/Section";
import Layout from "../app/layouts/HeadLayout";
import Button from "../ui/controls/Button/Button";
import P from "../work/components/Paragraph";
import api from "../blog/resources";
import apiWork from "../work/resources";
import { Blog } from "../blog/types";
import { Work } from "../work/types";
import Avatar from "../ui/feedback/Avatar";
import ItemPost from "../blog/components/GridItemPost";
import ItemWork from "../work/components/GridItemWork";

interface Props {
  blogs: Blog[];
  works: Work[];
}

const IndexPage: NextPage<Props> = ({ blogs, works }) => {
  return (
    <Layout title="Home">
      <Stack spacing={10}>
        <Stack
          align="center"
          direction={{ base: "column", sm: "row" }}
          justifyContent="space-between"
        >
          <Stack order={{ base: "2", sm: "0" }} pos="relative">
            <Text
              align={{ base: "center", sm: "left" }}
              color="secondary"
              fontSize={32}
              fontWeight="600"
              letterSpacing="tighter"
              lineHeight={7}
              py={2}
            >
              Jhon A. Lescano
            </Text>
            <Text
              color="primary"
              fontSize="sm"
              fontWeight="regular"
              letterSpacing="tighter"
            >
              FrontEnd Developer ( Student / Self-Taught / Productive )
            </Text>
          </Stack>
          <Avatar size={32} />
        </Stack>
        <Section title="About me">
          <P>
            I&apos;m a versatile developer and productive about learning new
            technologies, combining speed and functionality in web development.
            I&apos;m currently studying{" "}
            <Text as="ins" color="secondary" fontWeight="500">
              Software Engineering
            </Text>
            , but I keep learning and developing projects.
          </P>
          <Button href="/work" label="My portfolio" />
        </Section>
        <Section title="Projects">
          <SimpleGrid
            columns={[1, 1, 2]}
            gap={10}
            justifyItems="center"
            w="100%"
          >
            {works.slice(0, 2).map((work, i) => {
              return <ItemWork key={work.id} i={i} work={work} />;
            })}
          </SimpleGrid>
          <Button href="/work" label="View all" />
        </Section>
        <Section title="Skills">
          <Skills />
        </Section>
        <Section title="Latest posts">
          <SimpleGrid columns={1} gap={5} w="100%">
            {blogs.map((blog) => {
              return <ItemPost key={blog.id} blog={blog} />;
            })}
          </SimpleGrid>
          <Button href="/blog" label="View all" />
        </Section>
      </Stack>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const blogs = await api.list();
  const { works } = apiWork.list();

  return {
    props: {
      revalidate: 1,
      blogs: blogs,
      works,
    },
  };
};

export default IndexPage;
