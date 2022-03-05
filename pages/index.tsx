import type {NextPage} from "next";
import {SimpleGrid, Stack, Text} from "@chakra-ui/react";

import {GetServerSideProps} from "next";

import Section from "../components/Section";
import Layout from "../app/layouts/ArticleLayout";
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
          justifyContent="space-between"
          direction={{base: "column", sm: "row"}}
        >
          <Stack order={{base: "2", sm: "0"}} pos="relative">
            <Text
              align={{base: "center", sm: "left"}}
              color="secondary"
              fontSize={32}
              fontWeight="600"
              lineHeight={7}
              py={2}
              letterSpacing="tighter"
            >
              Jhon A. Lescano
            </Text>
            <Text fontSize="sm" fontWeight="regular" color="primary" letterSpacing="tighter">
              Desarrollador Frontend ( Estudiante / Autodidacta / Apasionado )
            </Text>
          </Stack>
          <Avatar size={32} />
        </Stack>
        <Section title="Trabajo">
          <P>
            Soy un desarrollador versátil y apasionado por aprender nuevas tecnologías, combinar la
            rapidez y la funcionalidad en desarrollo web. Actualmente estoy estudiando{" "}
            <Text fontWeight="500" color="secondary" as="ins">
              Ingeniería en Software
            </Text>
            , pero me mantengo aprendiendo y desarrollando proyectos.
          </P>
          <Button label="Mi Portafolio" href="/work" />
        </Section>
        <Section title="Últimos posts">
          <SimpleGrid w="100%" columns={1} gap={5}>
            <ItemPost blog={blogs[0]} />
            <ItemPost blog={blogs[1]} />
          </SimpleGrid>
          <Button label="Ver todo" href="/blog" />
        </Section>
        <Section title="Proyectos">
          <SimpleGrid justifyItems="center" columns={[1, 1, 2]} w="100%" gap={10}>
            <Stack as="article" justifyContent="flex-start" direction="column">
              <ParameterWork title="Proyecto">
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
            <Stack as="article" justifyContent="flex-start" direction="column">
              <ParameterWork title="Proyecto">
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
          <Button label="Ver todo el trabajo" href="/work" />
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
