import React from "react";
import { Stack, Text, Link, Image } from "@chakra-ui/react";
import { GetStaticProps, GetStaticPaths } from "next";

import Layout from "../../app/layouts/HeadLayout";
import P from "../../work/components/Paragraph";
import {
  TitleNavigation,
  ParameterWork,
  BuildWork,
} from "../../work/components/Work";
import { Work } from "../../work/types";
import api from "../../work/resources";

interface Props {
  work: Work;
}

const SingleWork: React.FC<Props> = ({ work }) => {
  return (
    <Layout key={work.id} title={work.title} url={`work/${work.id}`}>
      <Stack alignItems="flex-start" direction="column" spacing={5} w="100%">
        <TitleNavigation title={work.title} />
        <ParameterWork title="Project">
          <Text>{work.title}</Text>
        </ParameterWork>
        <ParameterWork title="Build with">
          {work.build && <BuildWork build={work.build} />}
        </ParameterWork>
        <ParameterWork title="Platform">
          <Text>
            {work.platform &&
              work.platform.reduce((text, item) => text.concat(`${item}/`), ``)}
          </Text>
        </ParameterWork>
        <ParameterWork title="Site URL">
          <Link isExternal href={work.siteurl}>
            <Text>{work.siteurl}</Text>
          </Link>
        </ParameterWork>
        <ParameterWork title="Description">
          <P line={1.5} size={16}>
            {work.description}
          </P>
        </ParameterWork>
        <ParameterWork title="Screenshots">
          <Stack spacing={10}>
            <Image alt={work.title} src={work.thumbnail} />
          </Stack>
        </ParameterWork>
      </Stack>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { works } = api.list();
  const work = works.find((work) => work.id === params.id);

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
