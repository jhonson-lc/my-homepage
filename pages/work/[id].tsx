import React from "react";
import { Stack, Text, Link, Image } from "@chakra-ui/react";
import { GetStaticProps, GetStaticPaths } from "next";

import Layout from "../../app/layouts/Layout";
import { TitleNavigation, ParameterWork, BuildWork } from "../../work/components/Work";
import { Work } from "../../work/types";
import api from "../../work/resources";

interface Props {
  work: Work;
}

const SingleWork: React.FC<Props> = ({ work }) => {
  return (
    <Layout
      key={work.id}
      description={work.description}
      image={work.thumbnail}
      title={`${work.title} - Jhon Lescano`}
      type="article"
    >
      <Stack alignItems="flex-start" direction="column" spacing={5} w="100%">
        <TitleNavigation title={work.title} />
        <ParameterWork title="Project">
          <Text color="paragraph" fontSize={14}>
            {work.title}
          </Text>
        </ParameterWork>
        <ParameterWork title="Build with">
          {work.build && <BuildWork build={work.build} />}
        </ParameterWork>
        <ParameterWork title="Platform">
          <Text color="paragraph" fontSize={14}>
            {work.platform && work.platform.reduce((text, item) => text.concat(`${item}/`), ``)}
          </Text>
        </ParameterWork>
        <ParameterWork title="Site URL">
          <Link isExternal href={work.siteurl}>
            <Text fontSize={14}>{work.siteurl}</Text>
          </Link>
        </ParameterWork>
        <ParameterWork title="Description">
          <Text color="paragraph" fontSize={14}>
            {work.description}
          </Text>
        </ParameterWork>
        <ParameterWork title="Screenshot">
          <Stack spacing={10}>
            {work.thumbnail ? (
              <Image alt={work.title} src={work.thumbnail} />
            ) : (
              <video
                id="video-player"
                autoPlay
                muted
                loop
                style={{
                  borderRadius: "10px",
                }}
                playsInline
                src={work.video}
              >
                <source type="video/mp4" src={work.video} />
              </video>
            )}
          </Stack>
        </ParameterWork>
      </Stack>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { works } = api.list();
  const work = works.find((work) => work.id === params?.id);

  return {
    props: {
      work,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { works } = api.list();

  const paths = works.map((item) => {
    return {
      params: {
        id: item.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default SingleWork;
