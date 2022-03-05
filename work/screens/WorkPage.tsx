import React from "react";
import {SimpleGrid} from "@chakra-ui/react";

import ItemWork from "../components/GridItemWork";
import Section from "../../components/Section";
import Layout from "../../app/layouts/ArticleLayout";
import {Work} from "../types";

interface Props {
  works: Work[];
}

const WorkScreen: React.FC<Props> = ({works}) => {
  return (
    <Layout title="Work">
      <Section title="Trabajos">
        <SimpleGrid
          columns={[1, 1, 2]}
          gridGap={24}
          justifyItems="center"
          w="100%"
        >
          {works &&
            works.map((work) => {
              return <ItemWork key={work.id} work={work} />;
            })}
        </SimpleGrid>
      </Section>
    </Layout>
  );
};

export default WorkScreen;
