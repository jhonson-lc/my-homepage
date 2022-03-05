import React from "react";
import {Text, Stack} from "@chakra-ui/react";

import {Work} from "../types";

import {ParameterWork, BuildWork} from "./Work";
import WorkImage from "./WorkImage";

interface Props {
  work: Work;
}

const ItemWork: React.FC<Props> = ({work}) => {
  return (
    <Stack
      as="article"
      direction="column"
      justifyContent="flex-start"
      spacing={3}
    >
      <ParameterWork title="Proyecto">
        <Text variant="information">{work.title}</Text>
      </ParameterWork>
      {work.build && (
        <ParameterWork title="Creado con">
          {<BuildWork build={work.build} />}
        </ParameterWork>
      )}
      <WorkImage work={work} />
    </Stack>
  );
};

export default ItemWork;
