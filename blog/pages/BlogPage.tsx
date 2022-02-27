import { SimpleGrid } from '@chakra-ui/react';
import Layout from '../../ui/article';
import BioSection from '../../ui/bio-section';

import ItemPost from '../components/GridItemPost';

const BlogPage = () => {
  return (
    <Layout title="Blog">
      <BioSection title="Blogs">
        <SimpleGrid columns={1} w="100%" gap={10}>
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
              id: 'post-1',
              title: 'Muy pronto',
              description:
                'Tengo como meta realizar blogs para ayudar a la comunidad, ya que al inicio de este camino lo necesitamos.',
            }}
          />
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
              id: 'post-1',
              title: 'Muy pronto',
              description:
                'Tengo como meta realizar blogs para ayudar a la comunidad, ya que al inicio de este camino lo necesitamos.',
            }}
          />
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
              id: 'post-1',
              title: 'Muy pronto',
              description:
                'Tengo como meta realizar blogs para ayudar a la comunidad, ya que al inicio de este camino lo necesitamos.',
            }}
          />
        </SimpleGrid>
      </BioSection>
    </Layout>
  );
};

export default BlogPage;
