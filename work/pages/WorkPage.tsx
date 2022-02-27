import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';

import ItemWork from '../components/GridItemWork';

import BioSection from '../../ui/bio-section';
import Layout from '../../ui/article';

import { Work } from '../types';

interface Props {
  works: Work[];
}

const Work: React.FC<Props> = ({ works }) => {
  return (
    <Layout title="Work">
      <BioSection title="Works">
        <SimpleGrid columns={[1, 1, 2]} w="100%" gap={10}>
          {works &&
            works.map(work => {
              return <ItemWork work={work} />;
            })}
        </SimpleGrid>
      </BioSection>
    </Layout>
  );
};

export default Work;
