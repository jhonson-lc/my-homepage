import React from "react";
import { SimpleGrid } from "@chakra-ui/react";

import ItemWork from "../components/GridItemWork";
import Section from "../../components/Section";
import Layout from "../../app/layouts/HeadLayout";
import { Work } from "../types";

interface Props {
  works: Work[];
}

const WorkScreen: React.FC<Props> = ({ works }) => {
  return (
    <Layout title="Work">
      <Section title="Works">
        <SimpleGrid columns={[1, 1, 2]} gridGap={16} w="100%">
          {works &&
            works.map((work, i) => {
              return <ItemWork key={work.id} i={i} work={work} />;
            })}
        </SimpleGrid>
      </Section>
    </Layout>
  );
};

export default WorkScreen;
