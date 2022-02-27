import type { NextPage } from 'next';
import { SimpleGrid, Button, Stack, Image, Text } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import NextLink from 'next/link';

import BioSection from '../ui/bio-section';
import P from '../work/components/Paragraph';

import ItemPost from '../blog/components/GridItemPost';
import { ParameterWork } from '../work/components/Work';
import WorkImage from '../work/components/WorkImage';
import Layout from '../ui/article';

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home">
      <Stack
        align="center"
        justifyContent="space-between"
        direction={{ base: 'column', sm: 'row' }}>
        <Stack order={{ base: '2', sm: '0' }} pos="relative">
          <Text
            align={{ base: 'center', sm: 'left' }}
            color="secondary"
            fontSize={32}
            fontWeight="600"
            lineHeight={7}
            py={2}
            letterSpacing="tighter">
            Jhon A. Lescano
          </Text>
          <Text
            fontSize="calc(12px + .2vw)"
            fontWeight="400"
            color="primary"
            letterSpacing="tighter">
            Frontend Dev ( Student / Self-Taught / Enthusiastic )
          </Text>
        </Stack>
        <Image
          bgGradient="linear(6deg, rgba(255,255,255,1) 0%, rgba(158,154,154,1) 100%)"
          borderRadius="100%"
          w={32}
          h={32}
          filter="grayscale(100%)"
          src="../images/foto.png"
        />
      </Stack>
      <BioSection title="Work">
        <P>
          Soy un desarrollador versátil y apasionado por aprender nuevas tecnologías, combinar la
          rapidez y la funcionalidad en desarrollo web. Actualmente estoy estudiando{' '}
          <Text fontWeight="500" color="secondary" as="ins">
            Ingeniería en Software
          </Text>
          , pero me mantengo aprendiendo y desarrollando proyectos.
        </P>
        <NextLink href="/work" scroll={false}>
          <Button
            variant="outline"
            rightIcon={<ArrowForwardIcon />}
            color="primary"
            maxW="min-content">
            My Portfolio
          </Button>
        </NextLink>
      </BioSection>
      <BioSection title="Latest Posts">
        <SimpleGrid w="100%" columns={1} gap={5}>
          <ItemPost
            post={{
              id: 'post-1',
              title: 'Muy pronto',
              description:
                'Tengo como meta realizar blogs para ayudar a la comunidad, ya que al inicio de este camino lo necesitamos.',
            }}
          />
          <ItemPost
            post={{
              id: 'post-2',
              title: 'Muy pronto',
              description:
                'Tengo como meta realizar blogs para ayudar a la comunidad, ya que al inicio de este camino lo necesitamos.',
            }}
          />
        </SimpleGrid>
        <NextLink href="/blog" passHref>
          <Button variant="external" rightIcon={<ArrowForwardIcon />}>
            Read all posts
          </Button>
        </NextLink>
      </BioSection>
      <BioSection title="Projects">
        <SimpleGrid columns={[1, 1, 2]} w="100%" gap={10}>
          <Stack as="article" justifyContent="flex-start" direction="column">
            <ParameterWork title="Project">
              <Text variant="information">Gif Finder</Text>
            </ParameterWork>
            <WorkImage
              work={{
                id: 'gif-finder',
                title: 'Gif Finder',
                thumbnail: '../images/works/giffinder.png',
              }}
            />
          </Stack>
          <Stack as="article" justifyContent="flex-start" direction="column">
            <ParameterWork title="Project">
              <Text variant="information">Netflix Clone UI</Text>
            </ParameterWork>
            <WorkImage
              work={{
                id: 'netflix-clone',
                title: 'Netflix Clone UI',
                thumbnail: '../images/works/netflix.png',
              }}
            />
          </Stack>
        </SimpleGrid>
        <NextLink href="/work" passHref>
          <Button variant="external" rightIcon={<ArrowForwardIcon />}>
            View all projects
          </Button>
        </NextLink>
      </BioSection>
    </Layout>
  );
};

export default IndexPage;
