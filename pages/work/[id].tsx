import { Stack, Text, Link, Image } from '@chakra-ui/react';

import Layout from '../../ui/article';
import P from '../../work/components/Paragraph';
import { TitleNavigation, ParameterWork, BuildWork } from '../../work/components/Work';

import { GetStaticProps, GetStaticPaths } from 'next';

import { Work } from '../../work/types';
import api from '../../work/api';

const SingleWork: React.FC<Props> = ({ works }) => {
  console.log(works);

  return (
    <>
      {works &&
        works.map(({ id, title, build, thumbnail, description, platform, siteurl }) => {
          return (
            <Layout key={id} title={title}>
              <Stack w="100%" direction="column" alignItems="flex-start" spacing={5}>
                <TitleNavigation title={title} />
                <ParameterWork title="Project">
                  <Text variant="information">{title}</Text>
                </ParameterWork>
                <ParameterWork title="Build with">
                  {build && <BuildWork build={build} />}
                </ParameterWork>
                <ParameterWork title="Platform">
                  <Text variant="information">
                    {platform && platform.reduce((text, item) => text.concat(`${item}/`), ``)}
                  </Text>
                </ParameterWork>
                <ParameterWork title="Site URL">
                  <Link href={siteurl} target="_blank">
                    <Text variant="linkexternal">{siteurl}</Text>
                  </Link>
                </ParameterWork>
                <ParameterWork title="Description">
                  <P>{description}</P>
                </ParameterWork>
                <ParameterWork title="Screenshots">
                  <Stack spacing={10}>
                    <Image src={thumbnail} alt={title} />
                  </Stack>
                </ParameterWork>
              </Stack>
            </Layout>
          );
        })}
    </>
  );
};

interface Props {
  works: Work[];
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const w = await api.list('default');
  const works = w.filter(work => work.id === params?.id);

  return {
    props: {
      works,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const works = await api.list('default');

  const paths = works.map(item => {
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
