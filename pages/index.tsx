import type {NextPage} from "next";

import {SimpleGrid, Stack, Text} from "@chakra-ui/react";
import {GetServerSideProps} from "next";

import Section from "../components/Section";
import Layout from "../app/layouts/HeadLayout";
import Button from "../ui/controls/Button/Button";
import P from "../work/components/Paragraph";
import api from "../blog/resources";
import {Blog} from "../blog/types";
import Avatar from "../ui/feedback/Avatar";
import ItemPost from "../blog/components/GridItemPost";
import {ParameterWork} from "../work/components/Work";
import WorkImage from "../work/components/WorkImage";

interface Props {
  blogs: Blog[];
}

const IndexPage: NextPage<Props> = ({blogs}) => {
  return (
    <Layout title="Home">
      <Stack spacing={10}>
        <Stack
          align="center"
          direction={{base: "column", sm: "row"}}
          justifyContent="space-between"
        >
          <Stack order={{base: "2", sm: "0"}} pos="relative">
            <Text
              align={{base: "center", sm: "left"}}
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
            technologies, combining speed and functionality in web development I
            am currently studying{" "}
            <Text as="ins" color="secondary" fontWeight="500">
              Software Engineering
            </Text>
            , but I keep learning and developing projects.
          </P>
          <Button href="/work" label="My portfolio" />
        </Section>
        <Section title="Latest posts">
          <SimpleGrid columns={1} gap={5} w="100%">
            <ItemPost blog={blogs[0]} />
            <ItemPost blog={blogs[1]} />
          </SimpleGrid>
          <Button href="/blog" label="View all" />
        </Section>
        <Section title="Projects">
          <SimpleGrid
            columns={[1, 1, 2]}
            gap={10}
            justifyItems="center"
            w="100%"
          >
            <Stack as="article" direction="column" justifyContent="flex-start">
              <ParameterWork title="Project">
                <Text variant="information">Gif Finder</Text>
              </ParameterWork>
              <WorkImage
                work={{
                  id: "gif-finder",
                  title: "Gif Finder",
                  thumbnail: "../images/works/giffinder.png",
                }}
              />
            </Stack>
            <Stack as="article" direction="column" justifyContent="flex-start">
              <ParameterWork title="Project">
                <Text variant="information">Netflix Clone UI</Text>
              </ParameterWork>
              <WorkImage
                work={{
                  id: "netflix-clone",
                  title: "Netflix Clone UI",
                  thumbnail: "../images/works/netflix.png",
                }}
              />
            </Stack>
          </SimpleGrid>
          <Button href="/work" label="View all" />
        </Section>
      </Stack>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const blogs = await api.list();

  return {
    props: {
      revalidate: 1,
      blogs: blogs,
    },
  };
};

export default IndexPage;
