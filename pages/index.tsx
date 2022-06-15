import type { GetStaticProps, NextPage } from "next";
import { SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Skills from "components/Skills";
import { Blog } from "blog/types";

import Section from "../components/Section";
import Layout from "../app/layouts/HeadLayout";
import P from "../work/components/Paragraph";
import Avatar from "../ui/feedback/Avatar";
import ItemPost from "../blog/components/GridItemPost";
import ItemWork from "../work/components/GridItemWork";
import api from "../blog/resources";

interface Props {
  blogs: Blog[];
}

const IndexPage: NextPage<Props> = ({ blogs }) => {
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
          <Avatar />
        </Stack>
        <Section hrefB="/work" labelB="My portfolio" title="About me">
          <P>
            I&apos;m a versatile developer and productive about learning new
            technologies, combining speed and functionality in web development.
            I&apos;m currently studying Software Engineering, but I keep
            learning and developing projects.
          </P>
        </Section>
        <Section hrefB="/work" labelB="View all" title="Projects">
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
        <Section title="Skills">
          <Skills />
        </Section>
        <Section hrefB="/blog" labelB="View All" title="Latest blog">
          <SimpleGrid columns={1} gap={5} w="100%">
            {blogs.slice(0, 2).map((blog) => {
              return <ItemPost key={blog.id} blog={blog} />;
            })}
          </SimpleGrid>
        </Section>
      </Stack>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await api.list();

  return {
    props: {
      revalidate: 1,
      blogs: blogs,
    },
  };
};

export default IndexPage;
