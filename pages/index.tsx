import type { GetStaticProps, NextPage } from "next";
import { SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Skills from "components/Skills";
import { Blog } from "blog/types";
import { useRouter } from "next/router";

import en from "../locale/en.js";
import es from "../locale/es.js";
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
  const router = useRouter();
  const { locale } = router;
  const t = locale === "es" ? es : en;

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
              {t.mydescription}
            </Text>
          </Stack>
          <Avatar />
        </Stack>
        <Section hrefB="/work" labelB={t.myportfolio} title={t.titles[0]}>
          <P>{t.aboutme}</P>
        </Section>
        <Section hrefB="/work" labelB={t.viewall} title={t.titles[1]}>
          <SimpleGrid columns={[1, 2]} gap={10} justifyItems="center" w="100%">
            <ItemWork
              work={{
                id: "spaciart-ecuador",
                title: "Spaciart Ecuador",
                thumbnail: "/images/works/spaciartecuador.png",
                build: ["react", "chakra-ui", "framer-motion", "typescript"],
              }}
            />
            <ItemWork
              work={{
                id: "my-portfolio",
                title: "My Portfolio",
                thumbnail: "/images/works/myportfolio.png",
                build: ["next.js", "chakra-ui", "framer-motion", "typescript"],
              }}
            />
          </SimpleGrid>
        </Section>
        <Section title={t.titles[2]}>
          <Skills />
        </Section>
        <Section hrefB="/blog" labelB={t.viewall} title={t.titles[3]}>
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
